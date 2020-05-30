import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchGenres } from 'actions/action-genre-seeds'
import './styles.scss'

const Genres = () => {
	const dispatch = useDispatch()
	const state = useSelector(state => state.reducerGenres)

	useEffect(() => {
		const load = () => dispatch(FetchGenres())
		load()
	}, [])
	return (
		<>
			<h1>Hola mundo</h1>
		</>
	)
}

export default Genres
