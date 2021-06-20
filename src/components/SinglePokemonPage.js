import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../context'
import { useParams } from 'react-router-dom'

import { typeData } from '../data'
import Loading from '../components/Loading'
const url = "https://pokeapi.co/api/v2/"

const SinglePokemon = () => {
	const {name} = useParams();
	const {capitilize, setLoading, loading} = useGlobalContext();
	const [flavorTexts, setFlavorTexts] = useState("");
	const [pokemonInfo, setPokemonInfo] = useState([]);

	async function getPokemon() {
		setLoading(true);
		try {
			const response = await fetch(`${url}pokemon/${name}/`)
			const data = await response.json();
			setPokemonInfo({abilities:data.abilities, name:data.name, id:data.id, height:data.height, weight:data.weight, types:data.types, image:data.sprites.front_default, species:data.species.url})
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	}

	useEffect(() => {
		getPokemon();
	}, [name])

	// fetch the flavortext (description) of the Pokemon
	// requires another fetch because flavortext is in another URL
	const fetchFlavorText = async () => {
		try {
			const response = await fetch(pokemonInfo.species);
			const data = await response.json();
			setFlavorTexts(data.flavor_text_entries);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchFlavorText();
	}, [pokemonInfo])

	const getFlavorText = (list) => {
		if (!list) return "";
		let index = 15;
		while (list[index].language.name !== "en") {
			index--;
		}
		return list[index].flavor_text;
	}

	if (loading) {
		return <Loading />
	} else {
		return (
			<div className="pokeinfo-container">
				<div className="pokeinfo-top-container">
					{pokemonInfo.name?capitilize(pokemonInfo.name):""} #{ pokemonInfo.id}
				</div>
				<div className="pokeinfo-middle-container">
					<div className="pokeinfo-image-container">
						<img src={pokemonInfo.image} alt="poke-img"/>
					</div>
					<div className="pokeinfo-stats-container">
						<ul>
							<li>Height: {pokemonInfo.height/10} m</li>
							<li>Weight: {pokemonInfo.weight/10} kg</li>
							<li>Abilities: &nbsp;{
									pokemonInfo.abilities ?
									pokemonInfo.abilities.map((ability, index) => {
										return [
											index > 0 && ", ",
											<a key={index} href="">
												{capitilize(ability.ability.name)}&nbsp;
											</a>
										]
									}):""
								}
							</li>
							<li>Type(s): {
								pokemonInfo.types ?
								pokemonInfo.types.map((type, index) => {
									return (
										<div key={index} className="type-box" style={{backgroundColor:`${typeData[type.type.name]}`}}>
											{capitilize(type.type.name)}
										</div>
									)
								}):""
							}</li>
						</ul>
					</div>
				</div>
				<div className="pokeinfo-bottom-container">
					<p>{getFlavorText(flavorTexts)}</p>
				</div>
			</div>
		)
	}
}

export default SinglePokemon
