import React from 'react'

const About = () => {
	return (
		<div className="main-container">
			<section className="section-container">
				<h1 className="section-title">About This Project</h1>
				<p> 
					{"This is a personal project on something I am passionate about -- Pokemon. I'm a long-time fan of the Pokemon franchise, from the TV show to the games. What I really want to focus on is the side experience while playing the games. There is a lot more to these virtual creatures than the pixels on the screen. Because of this, there are many resources out there that bring you to a deeper level, especially once you get into competitive battling. Such resources that I've used are Bulbapedia, Smogon, and Pokemon Showdown."}
				</p>
				{"\n"}
				<p>
					{"This project came to be because I thought it would be a good idea to put together the above resources under one website. The information of Pokemon is gathered from "}
						<a href="https://pokeapi.co/api/v2/"><u>{"https://pokeapi.co/api/v2/"}</u></a>
				</p>
			</section>
		</div>
	)
}

export default About
