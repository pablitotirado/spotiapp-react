import React from 'react'
import NotImage from 'assets/img/notimage.png'
import './styles.scss'

const ArtistCard = ({ image, name, loadUri, uri, foll }) => (
	<div className='artist-card' onClick={() => loadUri(uri)}>
		<img src={image ? image : NotImage} alt={name} className='artist-card__image' />
		<div className='artist-card__name'>
			<p>{name}</p>
		</div>
		{foll && (
			<iframe
				src={`https://open.spotify.com/follow/1/?uri=${uri}&size=basic&theme=dark`}
				scrolling='no'
				frameborder='0'
				className='artist-card__follow'
				allowtransparency='true'
				title='foll'
			></iframe>
		)}
	</div>
)

export default ArtistCard
