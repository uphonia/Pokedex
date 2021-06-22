import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {HashRouter} from 'react-router-dom'
// pages
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import TypeChart from './pages/TypeChart'
// components
import Sidebar from './components/Sidebar'
import SinglePokemonPage from './components/SinglePokemonPage'

function App() {
	return (
		<HashRouter>
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
					</Switch>
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
