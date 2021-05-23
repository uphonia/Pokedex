import React from 'react'

const About = () => {
	return (
		<section className="section about-section">
			<h1 className="section-title">About This Project</h1>
			<p> 
				{"This is a personal project on something I am passionate about -- Pokemon. I'm a long-time fan of the Pokemon franchise, from the TV show to the games. When I play the games, I often look up on more information on Bulbapedia (online Pokemon encyclopedia) about the qualities of the Pokemon that I encounter. For competitive battling, there are sites that help with team building and testing. Team testing will not be implemented here."}
			</p>
			{"\n"}
			<p>
				{"This project came to be because I thought it would be a good idea to put together the features of Bulbapedia and a team builder. It is also a fun way for me to showcase my web development skills and bring in my new learned knowledge of React. The information of Pokemon is gathered from https://pokeapi.co/api/v2/. "}
			</p>
		</section>
	)
}

export default About
