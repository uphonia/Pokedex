import React from 'react'
import Search from '../components/Search'
import PokeInfo from '../components/PokeInfo'
import Filter from '../components/Filter'
import PageNav from '../components/PageNav'

const Pokedex = () => {
	return (
		<>
			<Search />
			<Filter />
			<PageNav />
			<PokeInfo />
		</>
	)
}

export default Pokedex
