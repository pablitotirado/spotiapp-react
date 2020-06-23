import React from 'react'
import { useDispatch } from 'react-redux'
import './styles.scss'

const Pagination = ({ previous, next, paginationAction }) => {
	const dispatch = useDispatch()
	return (
		<div className='pag'>
			{previous && (
				<button
					className='pag__prev'
					onClick={() => dispatch(paginationAction(previous, 'prev'))}
				>
					<span className='pag__prev-icon'>&#x25C0;</span>
				</button>
			)}

			{next && (
				<button
					className='pag__next'
					onClick={() => dispatch(paginationAction(next, 'next'))}
				>
					<span className='pag__next-icon'>&#x25b6;</span>
				</button>
			)}
		</div>
	)
}

export default Pagination
