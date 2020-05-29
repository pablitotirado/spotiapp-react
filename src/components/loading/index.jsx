import React from 'react'
import { ScaleLoader } from 'react-spinners'
import PropTypes from 'prop-types'

const cssStyles = `
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.7);
`
const Loading = ({
	size = 150,
	css = cssStyles,
	color = '#1db954',
	loading = false
}) => {
	return <ScaleLoader css={css} size={size} color={color} loading={loading} />
}

Loading.propTypes = {
	size: PropTypes.number,
	css: PropTypes.string,
	color: PropTypes.string,
	loading: PropTypes.bool
}
export default Loading
