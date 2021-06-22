import React from 'react'

const Home = () => {
	return (
		<>
			<div className="home-title">
				<h1> Welcome to the Pokepedia! </h1>
			</div>
			<hr className="solid"/>
			<div className="description">
				<p>I am a long-time fan of the Pokemon franchise and I thought doing a project on it would be a fun idea and also a good way to introduce myself to React. I gained a lot of inspiration from <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"><u>Bulbapedia</u></a>, a site I use very often when I play the games. This is my rendition of an encyclopedia, keeping things nice and simple for anyone to use.</p>
			</div>
			<div className="footer">
				<p>Things are still a work in progress, but I hope you can follow along my journey in building this project!</p>
			</div>
		</>
	)
}

export default Home
