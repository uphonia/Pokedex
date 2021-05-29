import React from 'react'
import Search from '../components/Search'
import PokeInfo from '../components/PokeInfo'

const Home = () => {
	return (
		<div className="main-container">
			<div className="inner-container">
				<Search />
				<PokeInfo />
			</div>
		</div>
	)
}

export default Home