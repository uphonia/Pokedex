import React, {useState, useContext, useEffect} from 'react'
import { useGlobalContext } from '../context'
import SinglePokemonTab from '../components/SinglePokemonTab'

const url = "https://pokeapi.co/api/v2/pokemon"
// get regional pokedex
const regionalDexURL = "https://pokeapi.com/api/v2/pokedex" // 1 = national dex, 2 = kanto, etc

const PokeInfo = () => {
	const {capitilize, pageNum, setPageNum, maxIDOnPage, startID, boundaries, idList, startFetchID} = useGlobalContext();

	const [pokeList, setPokeList] = useState([]);

	async function forFetch() {
		let fetches = [];
		for (let i = startFetchID-1; i < startFetchID+15-1; i++) {
			if (idList[i]) {
				fetches.push(`${url}/${idList[i]}`);
			}
		}
		let list = [];

		try {
			await Promise.all(fetches.map(url => fetch(url)
				.then(response => response.json())
				.then(data => {
					list.push({abilities:data.abilities, name:data.name, id:data.id, height:data.height, weight:data.weight, types:data.types, image:data.sprites.front_default, species:data.species.url})
				})
			))
		} catch (error) {}
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
