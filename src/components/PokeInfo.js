import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../context'
import SinglePokemonTab from '../components/SinglePokemonTab'
import Loading from '../components/Loading'

const url = "https://pokeapi.co/api/v2/pokemon"

const PokeInfo = () => {
	const {pageNum, idList, startFetchID, loading, setLoading, searchTerm, loadingText, setLoadingText} = useGlobalContext();

	// list of pokemon to show
	const [pokeList, setPokeList] = useState([]);

	async function doSearch() {
		if (searchTerm === "") return;
		try {
			const response = await fetch(`${url}/${searchTerm}`);
			const data = await response.json();
			let list = [];
			list.push({abilities:data.abilities, name:data.name, id:data.id, height:data.height, weight:data.weight, types:data.types, image:data.sprites.front_default, species:data.species.url})
			setPokeList(list);
			setLoading(false);
		} catch (error) {
			setLoadingText("No matching results.");
		}
	}

	useEffect(() => {
		doSearch();
		return () => {}
	}, [searchTerm])

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
		setLoading(false);
	}

	useEffect(() => {
		forFetch();
		return () => {}
	}, [pageNum, idList])

	if (loading) {
		return <Loading text={loadingText}/>
	} else {
		return (
			<div className="pokelist-container">
				<ul>
					{pokeList ? pokeList
						.sort((a, b) => a.id > b.id)
						.map((entry) => {
						return (
							<SinglePokemonTab key={entry.id} {...entry}/>
						)
					}): "No matching entries."}
				</ul>
			</div>
		)
	}
}

export default PokeInfo
