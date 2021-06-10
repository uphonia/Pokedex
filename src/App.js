import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import TypeChart from './pages/TypeChart'
import Teambuilder from './pages/Teambuilder'
// components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SinglePokemonPage from './components/SinglePokemonPage'

function App() {
	return (
		<Router>
			<Sidebar />
			<div className="main-container">
				<div className="inner-container">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/pokedex/">
							<Pokedex />
						</Route>
						<Route exact path="/pokedex/:name">
							<SinglePokemonPage/>
						</Route>
						<Route exact path="/typechart">
							<TypeChart />
						</Route>
						<Route exact path="/teambuilder">
							<Teambuilder />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
