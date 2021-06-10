import React, {useState, useContext, useEffect} from 'react'

const AppContext = React.createContext()
const url = "https://pokeapi.co/api/v2/"

const AppProvider = ({children}) => {
	const [searchTerm, setSearchTerm] = useState("");

	// page navigation states
	const [pageNum, setPageNum] = useState(1);
	const [maxPageNum, setMaxPageNum] = useState(1);
	const [maxID, setMaxID] = useState(15);
	const [startID, setStartID] = useState(1);
	const [numSet, setNumSet] = useState(1);
	const [maxSets, setMaxSets] = useState(1);

	const [currID, setCurrID] = useState(1);
	const [boundaries, setBoundaries] = useState([{start:1, end:898}])

	const capitilize = (str) => {
		return str[0].toUpperCase() + str.slice(1);
	}

	return (
		<AppContext.Provider value={{
			setSearchTerm, capitilize, pageNum, setPageNum, maxID, setMaxID, startID, setStartID, numSet, setNumSet, maxSets, currID, setCurrID, boundaries, setBoundaries
		}}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export {AppContext, AppProvider}
