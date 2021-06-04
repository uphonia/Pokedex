import React from 'react'
import Search from '../components/Search'
import PokeInfo from '../components/PokeInfo'
import Filter from '../components/Filter'

const Pokedex = () => {
	return (
		<div className="main-container">
			<div className="inner-container">
				<Search />
				<Filter />
				<PokeInfo />
			</div>
		</div>
	)
}

export default Pokedex
