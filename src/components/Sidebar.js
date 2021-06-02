import React, {useState, useContext, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
	return (
		<nav className="sidebar">
			<div className="sidebar-logo">
				<img src="../question.png"/>
			</div>
	  		<ul className="nav-links">
	  			<li>
	  				<NavLink to="/" exact activeStyle={{textDecoration: "underline"}}>Home</NavLink>
	  			</li>
				<li>
	  				<NavLink to="/pokedex" exact activeStyle={{textDecoration: "underline"}}>Pokedex</NavLink>
	  			</li>
	  			<li>
	  				<NavLink to="/typechart" exact activeStyle={{textDecoration: "underline"}}>Type Chart</NavLink>
	  			</li>
	  			<li>
	  				<NavLink to="/about" exact activeStyle={{textDecoration: "underline"}}>About</NavLink>
	  			</li>
	  		</ul>
		</nav>
	)
}

export default Sidebar
