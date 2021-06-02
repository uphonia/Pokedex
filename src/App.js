import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Pokedex from './pages/Pokedex'
import TypeChart from './pages/TypeChart'
import Teambuilder from './pages/Teambuilder'
// components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
	return (
		<Router>
			<Sidebar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/pokedex">
					<Pokedex />
				</Route>
				<Route exact path="/typechart">
					<TypeChart />
				</Route>
				<Route exact path="/teambuilder">
					<Teambuilder />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
