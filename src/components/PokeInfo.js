import React, {useState, useContext, useEffect} from 'react'
import { useGlobalContext } from '../context'
import { typeData } from '../data'
import SinglePokemonTab from '../components/SinglePokemonTab'

const url = "https://pokeapi.co/api/v2/"
// get regional pokedex
const regionalDexURL = "https://pokeapi.com/api/v2/pokedex" // 1 = national dex, 2 = kanto, etc

const PokeInfo = () => {
	const {capitilize, pageNum} = useGlobalContext();
	const [pokeList, setPokeList] = useState([]);
	const [maxID, setMaxID] = useState(15);
	const [startID, setStartID] = useState(1);

	async function forFetch() {
		let fetches = [];
		for (let i = startID; i <= maxID; i++) {
			fetches.push(`${url}pokemon/${i}/`)
		}
		let pokemonList = []
		Promise.all(fetches.map(url => fetch(url)
			.then(response => response.json())
			.then(data => {
				pokemonList.push({abilities:data.abilities, name:data.name, id:data.id, height:data.height, weight:data.weight, types:data.types, image:data.sprites.front_default, species:data.species.url})
			})
		))

		setPokeList(pokemonList)
	}

	useEffect(() => {
		forFetch();
	}, [])


	return (
		<div className="pokelist-container">
			<ul>
				{pokeList
					.sort((a, b) => a.id > b.id)
					.map((entry) => {
					const {id, name, types, image} = entry;
					return (
						<li key={id} className="pokeinfo-tab">
							<div className="id-container">#{id}</div>
							<div className="thumbnail-container">
								<img className="thumbnail" src={image}/>
							</div>
							<div className="name-container">
								{capitilize(name)}
							</div>
							<div className="type-container">
								{types.map((type, index) => {
									return (
										<div key={index} className="type-box" style={{backgroundColor:`${typeData[type.type.name]}`}}>
											{capitilize(type.type.name)}
										</div>
									)
								})}
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default PokeInfo
