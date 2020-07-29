import React from 'react'
import './styles.scss'

//TODO: proptypes and defaultProps
export const Logo = ({ className = '', ...props }) => (
	<img className={`icon ${className}`} alt='img' {...props} />
)
