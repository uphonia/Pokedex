import React from 'react'

const Home = () => {
	return (
		<>
			<div className="home-title">
				<h1> Welcome! </h1>
			</div>
			<div className="description">
				<p>This is a personal project on something I am passionate about -- Pokemon. I'm a long-time fan of the Pokemon franchies and I thought doing a project on it would be a fun idea. I gained a lot of inspiration from <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"><u>Bulbapedia</u></a>, a site I use very often when I play the games. This is my rendition of it, keeping things nice and simple for anyone to use.</p>
				<p>Things are still a work in progress, but I hope you can follow along my journey in building this project!</p>
			</div>
			<div className="stock-img">
				<img src="../pokeball2.png"/>
			</div>
		</>
	)
}

export default Home
