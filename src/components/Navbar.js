import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
	  		<ul className="nav-links">
	  			<li>
	  				<Link to="/" className="link-active">Home - Pokedex</Link>
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
		</nav>
	)
}

export default Navbar
