import React, {useState, useContext} from 'react'

const AppContext = React.createContext()
const url = "https://pokeapi.co/api/v2/"

const AppProvider = ({children}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [loadingText, setLoadingText] = useState("Loading...");

	// page navigation states
	const [pageNum, setPageNum] = useState(1);
	const [maxPageNum, setMaxPageNum] = useState(Math.ceil(898/15));
	const [numSet, setNumSet] = useState(1);
	const [maxSets, setMaxSets] = useState(Math.ceil(898/225));

	const [idList, setIdList] = useState([...new Array(899).keys()].slice(1))
	const [startFetchID, setStartFetchID] = useState(1);

	const [maxPageNumOnPage, setMaxPageNumOnPage] = useState(15);

	// loading state
	const [loading, setLoading] = useState(true);

	const capitilize = (str) => {
		return str[0].toUpperCase() + str.slice(1);
	}

	return (
		<AppContext.Provider value={{
			setSearchTerm, searchTerm, capitilize, pageNum, setPageNum, numSet, setNumSet, maxSets, setMaxSets, maxPageNumOnPage, setMaxPageNumOnPage, idList, setIdList, startFetchID, setStartFetchID, setMaxPageNum, maxPageNum, loading, setLoading, loadingText, setLoadingText
		}}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export {AppContext, AppProvider}
