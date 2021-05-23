import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
		  	<div className="nav-center">
		  		<Link to="/">
		  		</Link>
		  		<ul className="nav-links">
		  			<li>
		  				<Link to="/">Home - Pokedex</Link>
		  			</li>
		  			<li>
		  				<Link to="/typechart">Type Chart</Link>
		  			</li>
		  			<li>
		  				<Link to="/teambuilder">Team Builder</Link>
		  			</li>
		  			<li>
		  				<Link to="/about">About</Link>
		  			</li>
		  		</ul>
		  	</div>
		</nav>
	)
}

export default Navbar
