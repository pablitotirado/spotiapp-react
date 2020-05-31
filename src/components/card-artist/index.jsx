import React from 'react'
import NotImage from 'assets/img/notimage.png'
import './styles.scss'

const ArtistCard = ({ image, name, loadUri, uri, followers }) => (
	<div className='artist-card' onClick={() => loadUri(uri)}>
		<img src={image ? image : NotImage} alt={name} className='artist-card__image' />
		<div className='artist-card__name'>
			<p>{name}</p>
		</div>
		<iframe
			src={`https://open.spotify.com/follow/1/?uri=${uri}&size=basic&theme=dark`}
			scrolling='no'
			frameborder='0'
			className='artist-card__follow'
			allowtransparency='true'
			title='foll'
		></iframe>
		<div className='artist-card__followers'>
			Followers: <span className='artist-card__followers-span'>{followers}</span>
		</div>
	</div>
)

export default ArtistCard