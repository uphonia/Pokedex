import React from 'react'
import { useGlobalContext } from '../context'
import { typeData } from '../data'
import { Link } from 'react-router-dom'

const SinglePokemonTab = ({id, image, name, types}) => {
	const {capitilize} = useGlobalContext();

	return (
		<li key={id} className="pokeinfo-tab">
			<div className="id-container">#{id}</div>
			<div className="thumbnail-container">
				<img className="thumbnail" alt={name} src={image}/>
			</div>
			<div className="name-container">
				<Link to={`/pokedex/${name}`}>
					{capitilize(name)}
				</Link>
			</div>
			<div className="type-container">
				{types.map((type, index) => {
					return (
						<div key={index} className="type-box" style={{backgroundColor:`${typeData[type.type.name]}`}}>
							{capitilize(type.type.name)}
						</div>
					)
				})}
			</div>
		</li>
	)
}

export default SinglePokemonTab
