import React, {useState, useContext, useEffect} from 'react'
import { useGlobalContext } from '../context'

const regionURL = "https://pokeapi.co/api/v2/region/"
const typeURL = "https://pokeapi.co/api/v2/type/"

const Filter = () => {
	const {capitilize} = useGlobalContext();
	const [regionList, setRegionList] = useState([]);
	const [typeList, setTypeList] = useState([]);

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
	},[])

	return (
		<div className="filter-container">
			<div className="filter-expand" id="region-expand">
				Region Filter
			</div>
			<div className="table-container" id="region-table">
				<ul>
					<li key={999}>
						<input type="checkbox" key="national"/>
						<label htmlFor="national">National</label>
					</li>
					{regionList.map((region, id) => {
						return (
							<li key={id}>
								<input type="checkbox" key={region}/>
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
					<li key={998}>
						<input type="checkbox" key="all"/>
						<label htmlFor="all">All Types</label>
					</li>
					{typeList.map((type, id) => {
						return (
							<li key={id}>
								<input type="checkbox" key={type}/>
								<label htmlFor={type}>
									{capitilize(type)}
								</label>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="submit-container">
				<button className="filter-btn">
					Set Filters
				</button>
			</div>
		</div>
	)
}

export default Filter
