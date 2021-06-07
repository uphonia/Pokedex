import React, {useState, useContext, useEffect} from 'react'
import { useGlobalContext } from '../context'

const regionURL = "https://pokeapi.co/api/v2/region/"
const typeURL = "https://pokeapi.co/api/v2/type/"

const Filter = () => {
	const {capitilize, setFilters} = useGlobalContext();
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

	async function filterPokemon () {

	}

	return (
		<div className="filter-container">
			<div className="filter-expand" id="region-expand">
				Region Filter
			</div>
			<div className="table-container" id="region-table">
				<ul>
					<li key={999}>
						<input type="checkbox" checked key="national" onChange={filterPokemon}/>
						<label htmlFor="national">National</label>
					</li>
					{regionList.map((region, id) => {
						return (
							<li key={id}>
								<input type="checkbox" key={region} onChange={filterPokemon}/>
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
						<input type="checkbox" key="all" checked onChange={filterPokemon}/>
						<label htmlFor="all">All</label>
					</li>
					{typeList.filter((type) => {
						return (type !== "unknown" && type !== "shadow");
					}).map((type, id) => {
						return (
							<li key={id}>
								<input type="checkbox" key={type} onChange={filterPokemon}/>
								<label htmlFor={type}>
									{capitilize(type)}
								</label>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="filter-expand" id="evolution-expand">
				Number of Evolutions
			</div>
			<div className="table-container" id="evolution-table">
				<ul>
					<li key="anyevo">
						<input type="checkbox" key="anyevo" checked/>
						<label htmlFor="anyevo">Any</label>
					</li>
					<li key="1evo">
						<input type="checkbox" key="1evo"/>
						<label htmlFor="1evo">1</label>
					</li>
					<li key="2evo">
						<input type="checkbox" key="2evo"/>
						<label htmlFor="2evo">2</label>
					</li>
					<li key="3evo">
						<input type="checkbox" key="3evo"/>
						<label htmlFor="3evo">3</label>
					</li>
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
