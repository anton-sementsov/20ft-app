import { createContext, useMemo, FC, PropsWithChildren, useState } from 'react'
import { Dimensions } from 'react-native'

const FONT_SIZE = 14
const BACKGROUND_COLOR = '#FFF8ED'

const LOADING_STRING = '... loading ...'
const LOOPING_TYPE_ALL = 0
const LOOPING_TYPE_ONE = 1
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window')
const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2

const playerSateInitial = {
	// added as additional prop
	showVideo: false,
	playbackInstanceName: LOADING_STRING,
	loopingType: LOOPING_TYPE_ALL,
	muted: false,
	playbackInstancePosition: null,
	playbackInstanceDuration: null,
	shouldPlay: false,
	isPlaying: false,
	isBuffering: false,
	isLoading: true,
	fontLoaded: false,
	shouldCorrectPitch: true,
	volume: 1.0,
	rate: 1.0,
	videoWidth: DEVICE_WIDTH,
	videoHeight: VIDEO_CONTAINER_HEIGHT,
	poster: false,
	useNativeControls: false,
	fullscreen: false,
	throughEarpiece: false
}

export const AudioPlayerContext = createContext<any | undefined>(undefined)

export const AudioPlayerProvider: FC<PropsWithChildren> = (props) => {
	const [playbackInstance, setPlaybackInstance] = useState(null)

	const [isSeeking, setIsSeeking] = useState(false)

	const [shouldPlayAtEndOfSeek, setShouldPlayAtEndOfSeek] = useState(true)

	const [playerState, setPlayerState] = useState({ playerSateInitial })

	const contextValue = {
		playbackInstance,
		setPlaybackInstance,
		isSeeking,
		setIsSeeking,
		shouldPlayAtEndOfSeek,
		setShouldPlayAtEndOfSeek,
		playerState,
		setPlayerState
	}

	return <AudioPlayerContext.Provider value={contextValue} {...props} />
}
