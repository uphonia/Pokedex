import React, {useState} from 'react'
import { useGlobalContext } from '../context'

import { regionDexNums, typeData } from '../data'
const typeURL = "https://pokeapi.co/api/v2/type"

const Filter = () => {
	const {capitilize, setIdList, setMaxPageNum, setMaxSets, setLoading, setLoadingText} = useGlobalContext();

	const typeList = [];
	for (let key in typeData) {
		typeList.push(key);
	}

	const regionList = [];
	for (let key in regionDexNums) {
		regionList.push(key);
	}

	// regionList and typeList length are hard-coded for nw
	const [regionState, setRegionState] = useState(new Array(8).fill(false, 0, 8));
	const [typeState, setTypeState] = useState(new Array(18).fill(false, 0, 18));

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

	function inBoundary(id, boundaries) {
		for (let i = 0; i < boundaries.length; i++) {
			console.log(id, boundaries[i].start, boundaries[i].end)
			if (id >= boundaries[i].start && id <= boundaries[i].end) {
				return true;
			}
		}
		return false;
	}

	// set filters selected by user
	const setFilters = async () => {
		setLoading(true);
		setLoadingText("Loading...");
		// get all boundaries for regions
		let boundaries = [];
		let lowest = 898;
		let highest = 0;
		for (let i = 0; i < regionState.length; i++) {
			if (regionState[i] === true) {
				const entry = regionDexNums[regionList[i]];
				boundaries.push(entry);
				if (entry.start < lowest) lowest = entry.start;
				if (entry.end > highest) highest = entry.end;
			}
		}

		let newIdList = [];
		// get all IDs of pokemon with specific typing selected
		for (let i = 0; i < typeState.length; i++) {
			if (typeState[i] === true) {
				const type = typeList[i];
				// get all pokemon with this type
				try {
					const fetchTyping = await fetch(`${typeURL}/${type}`);
					const fetchTypingData = await fetchTyping.json();
					const pokeTypeList = fetchTypingData.pokemon;
					for (let j = 0; j < pokeTypeList.length; j++) {
						const pokeURL = pokeTypeList[j].pokemon.url;
						try {
							const idFetch = await fetch(pokeURL);
							const idFetchData = await idFetch.json();
							const pokeID = idFetchData.id;
							if (pokeID >= lowest && pokeID <= highest) {
								if (inBoundary(pokeID, boundaries) === true) {
									newIdList.push(pokeID);
								}
							}
						} catch (error) {console.log(error)}
					}
				} catch (error) {
					console.log(error)
				}
			}
		}

		// do only region handling if no type is being filtered
		if (newIdList.length === 0) {
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
								<label className="filter-label" htmlFor={region}>
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
								<label className="filter-label" htmlFor={type}>
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
