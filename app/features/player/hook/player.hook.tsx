import { useContext } from 'react'
import { AudioPlayerContext } from '../context/player.context'
import { Dimensions } from 'react-native'
import { LOOPING_TYPE_ALL, LOOPING_TYPE_ONE } from '../constants'

export const useAudioPlayer = () => {
	const context = useContext(AudioPlayerContext)

	if (!context) {
		throw new Error(
			'useAudioPlayerContext must be used within a PlayerProvider'
		)
	}

	const {
		setPlayerState,
		playerState,
		playbackInstance,
		setIsSeeking,
		setShouldPlayAtEndOfSeek,
		shouldPlayAtEndOfSeek,
		isSeeking
	} = context

	const onPlaybackStatusUpdate = (status) => {
		if (status.isLoaded) {
			setPlayerState({
				...playerState,
				playbackInstancePosition: status.positionMillis,
				playbackInstanceDuration: status.durationMillis,
				shouldPlay: status.shouldPlay,
				isPlaying: status.isPlaying,
				isBuffering: status.isBuffering,
				rate: status.rate,
				muted: status.isMuted,
				volume: status.volume,
				loopingType: status.isLooping ? LOOPING_TYPE_ONE : LOOPING_TYPE_ALL,
				shouldCorrectPitch: status.shouldCorrectPitch
			})
			// if (status.didJustFinish && !status.isLooping) {
			// 	this._advanceIndex(true)
			// 	this._updatePlaybackInstanceForIndex(true)
			// }
		} else {
			if (status.error) {
				console.log(`FATAL PLAYER ERROR: ${status.error}`)
			}
		}
	}

	const onPlayPausePressed = () => {
		if (playbackInstance !== null) {
			if (playerState.isPlaying) {
				playbackInstance.pauseAsync()
			} else {
				playbackInstance.playAsync()
			}
		}
	}

	const getSeekSliderPosition = () => {
		console.log('getSeekSliderPosition', {
			playerState: playerState.playbackInstancePosition,
			playbackInstanceDuration: playerState.playbackInstanceDuration
		})
		if (
			playbackInstance != null &&
			playerState.playbackInstancePosition != null &&
			playerState.playbackInstanceDuration != null
		) {
			return (
				playerState.playbackInstancePosition /
				playerState.playbackInstanceDuration
			)
		}
		return 0
	}

	const onSeekSliderValueChange = (value) => {
		if (playbackInstance != null && !isSeeking) {
			setIsSeeking(true)
			setShouldPlayAtEndOfSeek(playerState.shouldPlay)
			playbackInstance?.pauseAsync()
		}
	}

	const onSeekSliderSlidingComplete = async (value) => {
		if (playbackInstance != null) {
			setIsSeeking(false)

			const seekPosition = value * playerState.playbackInstanceDuration
			if (shouldPlayAtEndOfSeek) {
				playbackInstance.playFromPositionAsync(seekPosition)
			} else {
				playbackInstance.setPositionAsync(seekPosition)
			}
		}
	}

	return {
		...context,
		onPlaybackStatusUpdate,
		onPlayPausePressed,
		getSeekSliderPosition,
		onSeekSliderValueChange,
		onSeekSliderSlidingComplete
	}
}

// 117 14-19
// 117 13-18
// euro -> chilliz football token
