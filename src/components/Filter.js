import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../context'

import { regionDexNums } from '../data'
const regionURL = "https://pokeapi.co/api/v2/region/"
const typeURL = "https://pokeapi.co/api/v2/type/"

 // https://pokeapi.co/api/v2/type/[type]/pokemon/

const Filter = () => {
	const {capitilize, setIdList, setMaxPageNum, setMaxSets} = useGlobalContext();
	const [regionList, setRegionList] = useState([]);
	const [typeList, setTypeList] = useState([]);

	// regionList and typeList length are hard-coded for nw
	const [regionState, setRegionState] = useState(new Array(8).fill(false, 0, 8));
	const [typeState, setTypeState] = useState(new Array(18).fill(false, 0, 18));

	const fetchRegions = async () => {
		try {
			const response = await fetch(`${regionURL}`);
			const data = await response.json();
			const list = data.results.map((region) => {
				return region.name
			});
			setRegionList(list);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchRegions();
		return () => {}
	},[])

	const fetchTypes = async () => {
		try {
			const response = await fetch(`${typeURL}`);
			const data = await response.json();
			const list = data.results.map((type) => {
				return type.name
			});
			setTypeList(list);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchTypes();
		return () => {}
	},[])

	async function handleRegionChange(position) {
		const updatedRegionState = regionState.map((item, index) => {
			return index === position ? !item : item
		})
		setRegionState(updatedRegionState)
	}

	async function handleTypeChange(position) {
		const updatedTypeState = typeState.map((item, index) => {
			return index === position ? !item : item
		})
		setTypeState(updatedTypeState)
	}

	const range = (size, start) => {
		return [...Array(size).keys()].map(i => i + start)
	}

	// set filters selected by user; ONLY REGION FILTER FOR NOW
	const setFilters = () => {
		let newIdList = [];
		// get all regions we want and add to idList
		for (let i = 0; i < regionState.length; i++) {
			if (regionState[i] === true) {
				const region = regionList[i]; // get name of region
				const start = regionDexNums[region].start;
				const end = regionDexNums[region].end;
				const regionIDs = range(end-start+1, start);
				newIdList = newIdList.concat(regionIDs);
			}
		}

		if (newIdList.length === 0) {
			newIdList = [...new Array(899).keys()].slice(1)
		}
		setIdList(newIdList);
		setMaxPageNum(Math.ceil(newIdList.length/15));
		setMaxSets(Math.ceil(newIdList.length/225));
	}

	return (
		<div className="filter-container">
			<div className="filter-expand" id="region-expand">
				Region Filter
			</div>
			<div className="table-container" id="region-table">
				<ul>
					{regionList.map((region, index) => {
						return (
							<li key={index}>
								<input
									type="checkbox"
									onChange={() => handleRegionChange(index)}
									checked={regionState[index]}
								/>
								<label htmlFor={region}>
									{capitilize(region)}
								</label>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="filter-expand" id="type-expand">
				Type Filter
			</div>
			<div className="table-container" id="type-table">
				<ul>
					{typeList.filter((type) => {
						return (type !== "unknown" && type !== "shadow");
					}).map((type, index) => {
						return (
							<li key={index}>
								<input
									type="checkbox"
									onChange={() => handleTypeChange(index)}
									checked={typeState[index]}
								/>
								<label htmlFor={type}>
									{capitilize(type)}
								</label>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="submit-container">
				<button className="filter-btn" onClick={setFilters}>
					Set Filters
				</button>
			</div>
		</div>
	)
}

export default Filter
