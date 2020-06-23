import React from 'react'
import NotImage from 'assets/img/notimage.png'
import './styles.scss'

const CardArtist = ({ image, name, loadUri, uri, foll, type, large }) => {
	return (
		<div className='wrapper-card'>
			<div className='artist-card' onClick={() => loadUri(uri)}>
				<img
					src={image ? image : NotImage}
					alt={name}
					className={`artist-card__image ${
						large && 'artist-card__image--large'
					}`}
				/>
				<div>
					<p className='artist-card__name'>{name}</p>
					{!foll && <p className='artist-card__type'>{type}</p>}
				</div>
				<div className='artist-card__play'>
					<span className='artist-card__play-icon'>&#x25b6;</span>
				</div>
			</div>
		</div>
	)
}

export default CardArtist
