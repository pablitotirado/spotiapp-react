import React from 'react'
import Loading from '../loading'
import PropTypes from 'prop-types'
import './styles.scss'

const CardsGrid = ({ albums, loading }) => {
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='new-releases'>
					{albums.map(album => (
						<div key={album.id}>
							<div className='new-releases__card animated'>
								<img
									src={album.images[1].url}
									alt={album.name}
									className='new-releases__image'
								/>
								<div className='new-releases__title'>
									<p>{album.name}</p>
								</div>
								<div className='new-releases__type'>
									<p>{album.type}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}
const initialState = [
	{
		id: '',
		images: [{ url: 'htmslasd' }, { url: 'htmslasd' }],
		name: '',
		type: ''
	}
]
CardsGrid.propTypes = {
	albums: PropTypes.array,
	loading: PropTypes.bool
}
CardsGrid.defaultProps = {
	albums: initialState,
	loading: false
}
export default CardsGrid
