import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
	const {setSearchTerm} = useGlobalContext();
	const searchValue = React.useRef('');

	React.useEffect(() => {
		searchValue.current.focus();
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(searchValue.current.value);
		searchValue.current.value = "";
	}

	return (
		<div className="search-container">
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					type="text"
					ref={searchValue}
					placeholder="Search by name or ID"/>
				<button className="search-btn">
					Search
				</button>
			</form>
		</div>
	)
}

export default Search
