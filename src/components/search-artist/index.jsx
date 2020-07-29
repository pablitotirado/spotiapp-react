import React from 'react'
import { useDispatch } from 'react-redux'
import { getTrackAndAlbums } from 'actions'
import { Loading } from 'components'
import { CardArtist } from 'components'

import './styles.scss'

//TODO: proptypes and defaultProps
export const SearchArtist = ({ search, loading }) => {
	const dispatch = useDispatch()

	const loadUri = uri => dispatch(getTrackAndAlbums(uri))

	return (
		<>
			{loading ? (
				<Loading loading />
			) : (
				<>
					{search && (
						<div className='artist__result'>
							Mostrando {search.length} resultados
						</div>
					)}
					<div className='artist-container__search animated'>
						{search &&
							search.map(({ id, images, name, uri, followers: { total } }) => {
								const validationImages =
									images !== undefined && images.length > 0
								return (
									<CardArtist
										key={id}
										image={validationImages && images[1].url}
										name={name}
										loadUri={loadUri}
										uri={uri}
										followers={total}
										foll
										large
									/>
								)
							})}
					</div>
				</>
			)}
		</>
	)
}
