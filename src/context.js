import React, {useState, useContext, useEffect} from 'react'

const AppContext = React.createContext()
const url = "https://pokeapi.co/api/v2/"

const AppProvider = ({children}) => {
	const [searchTerm, setSearchTerm] = useState("bulbasaur");
	const [pokemonInfo, setPokemonInfo] = useState([]);
	const [flavorText, setFlavorText] = useState("");

	// fetch all data for searched Pokemon and set the info
	const fetchPokemon = async () => {
		try {
			const response = await fetch(`${url}pokemon/${searchTerm}/`);
			const data = await response.json();
			setPokemonInfo({abilities:data.abilities, name:data.name, id:data.id, height:data.height, weight:data.weight, types:data.types, image:data.sprites.front_default, species:data.species.url});
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchPokemon();
	},[searchTerm])

	// fetch the flavortext (description) of the Pokemon
	// requires another fetch because flavortext is in another URL
	const fetchFlavorText = async () => {
		try {
			const response = await fetch(pokemonInfo.species);
			const data = await response.json();
			console.log(data.flavor_text_entries[0].flavor_text)
			setFlavorText(data.flavor_text_entries[0].flavor_text);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchFlavorText();
	}, [pokemonInfo])

	return (
		<AppContext.Provider value={{
			setSearchTerm, pokemonInfo, flavorText
		}}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export {AppContext, AppProvider}
