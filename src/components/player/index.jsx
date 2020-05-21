import React from 'react'
import Silvio from 'assets/mp3/silvio.mp3'
import './styles.scss'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/src/styles.scss'
const Player = () => {
	return (
		<>
			<AudioPlayer src={Silvio} />
		</>
	)
}

export default Player
