import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import TypeChart from './pages/TypeChart'
import Teambuilder from './pages/Teambuilder'
// components 
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>	
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/typechart">
					<TypeChart />
				</Route>
				<Route exact path="/teambuilder">
					<Teambuilder />
				</Route>
				<Route path="/about">
					<About />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
