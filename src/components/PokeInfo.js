import React from 'react'
import { useGlobalContext } from '../context'

const PokeInfo = () => {
	const {pokemonInfo, flavorText} = useGlobalContext();
	console.log(flavorText, pokemonInfo)
	const getAbilities = (abilities) => {
		if (!abilities) return "";
		const list = [];
		for (let i = 0; i < abilities.length; i++) {
			list.push(abilities[i].ability.name.toUpperCase());
		}
		return list.join();
	}

	const getTypes = (types) => {
		if (!types) return "";
		const list = [];
		for (let i = 0; i < types.length; i++) {
			list.push(types[i].type.name.toUpperCase());
		}
		return list.join();
	}

	return (
		<div className="pokeinfo-container">
			<div className="pokeinfo-top-container">
				<div className="pokeinfo-image-container">
					<img src={pokemonInfo.image} alt="poke-img"/>
				</div>
				<div className="pokeinfo-stats-container">
					<ul>
						<li>Name: {pokemonInfo.name?pokemonInfo.name.toUpperCase():""}</li>
						<li>Entry: {pokemonInfo.id}</li>
						<li>Height: {pokemonInfo.height} cm</li>
						<li>Weight: {pokemonInfo.weight} kg</li>
						<li>Abilities: {getAbilities(pokemonInfo.abilities)}</li>
						<li>Type(s): {getTypes(pokemonInfo.types)}</li>
					</ul>
				</div>
			</div>
			<div className="pokeinfo-bottom-container">
				<p>{flavorText}</p>
			</div>
		</div>
	)
}

export default PokeInfo
