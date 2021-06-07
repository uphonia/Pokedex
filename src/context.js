import React, {useState, useContext, useEffect} from 'react'

const AppContext = React.createContext()
const url = "https://pokeapi.co/api/v2/"

const AppProvider = ({children}) => {
	const [searchTerm, setSearchTerm] = useState("bulbasaur");
	const [pokemonInfo, setPokemonInfo] = useState([]);
	const [flavorTexts, setFlavorTexts] = useState("");
	const [filters, setFilters] = useState([]);
	const [pageNum, setPageNum] = useState(1);

	const capitilize = (str) => {
		return str[0].toUpperCase() + str.slice(1);
	}

	return (
		<AppContext.Provider value={{
			setSearchTerm, filters, capitilize, pageNum, setPageNum
		}}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export {AppContext, AppProvider}
