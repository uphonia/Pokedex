import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
	return (
		<nav className="sidebar">
			<div className="sidebar-logo">
				<img alt="pokeball" src={process.env.PUBLIC_URL + "/pokeball4.png"}/>
			</div>
	  		<ul className="nav-links">
	  			<li>
	  				<NavLink to="/" exact activeStyle={{textDecoration: "underline"}}>Home</NavLink>
	  			</li>
				<li>
	  				<NavLink to="/pokedex/" exact activeStyle={{textDecoration: "underline"}}>Pokedex</NavLink>
	  			</li>
				<li>
					<a href="https://uphonia.github.io/website">
						About Me
					</a>
				</li>
	  		</ul>
		</nav>
	)
}

export default Sidebar
