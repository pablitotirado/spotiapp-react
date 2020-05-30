import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FetchRecently } from 'actions/action-recently-played'
import './styles.scss'

const RecentlyPlayed = () => {
	const dispatch = useDispatch()
	const recently = useSelector(state => state.reducerRecently.recently)
	useEffect(() => {
		const load = () => dispatch(FetchRecently())
		load()
	}, [])
	console.log(recently)
	return (
		<>
			<h2 className='title'>RecentlyPlayed</h2>
			<div className='recently'>
				{recently &&
					recently.map((album, i) => (
						<div key={`${album.track.id}_${i}`}>
							<div className='recently__card animated'>
								<img
									src={album.track.album.images[1].url}
									alt={album.track.album.name}
									className='recently__image'
								/>
								<div className='recently__title'>
									<p>{album.track.album.name}</p>
								</div>
								<div className='recently__type'>
									<p>{album.track.album.type}</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	)
}

export default RecentlyPlayed
