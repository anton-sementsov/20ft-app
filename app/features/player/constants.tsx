import { Dimensions } from 'react-native'

export const FONT_SIZE = 14
export const BACKGROUND_COLOR = '#FFF8ED'

export const LOADING_STRING = '... loading ...'
export const LOOPING_TYPE_ALL = 0
export const LOOPING_TYPE_ONE = 1
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } =
	Dimensions.get('window')
export const VIDEO_CONTAINER_HEIGHT =
	(DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2

export const PLAYLIST = [
	{
		name: 'rubber robot1',
		uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
		img: 'https://i1.sndcdn.com/artworks-kq7DmPfK70vEgUbM-Up404A-t500x500.jpg'
	},
	{
		name: 'rubber robot1',
		uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
		img: 'https://i1.sndcdn.com/artworks-kq7DmPfK70vEgUbM-Up404A-t500x500.jpg'
	},
	{
		name: 'rubber robot1',
		uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3'
	},
	{
		name: 'rubber robot1',
		uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3'
	}
]
