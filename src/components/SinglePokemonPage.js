import React from 'react'
import { useGlobalContext } from '../context'

const SinglePokemon = () => {
	const {pokemonInfo, flavorTexts, capitilize} = useGlobalContext();

	const getFlavorText = (list) => {
		if (!list) return "";
		let index = 15;
		while (list[index].language.name !== "en") {
			index--;
		}
		return list[index].flavor_text;
	}


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
						<li>Abilities: {
								pokemonInfo.abilities ?
								pokemonInfo.abilities.map((ability, index) => {
									return [
										index > 0 && ", ",
										<a key={index} href="">
											{capitilize(ability.ability.name)}
										</a>
									]
								}):""
							}
						</li>
						<li>Type(s): {
							pokemonInfo.types ?
							pokemonInfo.types.map((type, index) => {
								return [
									index > 0 && ", ",
									<a key={index} href="">
										{capitilize(type.type.name)}
									</a>
								]
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

export default SinglePokemon
