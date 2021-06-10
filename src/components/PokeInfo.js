import React, {useState, useContext, useEffect} from 'react'
import { useGlobalContext } from '../context'
import SinglePokemonTab from '../components/SinglePokemonTab'

const url = "https://pokeapi.co/api/v2/pokemon"
// get regional pokedex
const regionalDexURL = "https://pokeapi.com/api/v2/pokedex" // 1 = national dex, 2 = kanto, etc

const PokeInfo = () => {
	const {capitilize, pageNum, setPageNum, maxID, startID} = useGlobalContext();
	const [pokeList, setPokeList] = useState([]);

	async function forFetch() {
		let fetches = [];
		for (let i = startID; i <= maxID; i++) {
			fetches.push(`${url}/${i}/`)
		}
		let list = [];

		await Promise.all(fetches.map(url => fetch(url)
			.then(response => response.json())
			.then(data => {
				list.push({abilities:data.abilities, name:data.name, id:data.id, height:data.height, weight:data.weight, types:data.types, image:data.sprites.front_default, species:data.species.url})
			})
		))
		setPokeList(list);
	}

	useEffect(() => {
		forFetch();
		return () => {}
	}, [pageNum])

	return (
		<div className="pokelist-container">
			<ul>
				{pokeList ? pokeList
					.sort((a, b) => a.id > b.id)
					.map((entry) => {
					return (
						<SinglePokemonTab key={entry.id} {...entry}/>
					)
				}): ""}
			</ul>
		</div>
	)
}

export default PokeInfo
