import React, { FC, PropsWithChildren, useEffect } from 'react'
import { LOOPING_TYPE_ALL, LOOPING_TYPE_ONE, PLAYLIST } from '../../constants'

import { View, Text, TouchableHighlight, Image } from 'react-native'
import { useAudioPlayer } from '../../hook/player.hook'
import { AntDesign } from '@expo/vector-icons'
import { AudioPlayerProvider } from '../../context/player.context'
import { FontAwesome } from '@expo/vector-icons'
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av'
import Slider from '@react-native-community/slider'

export const Player: FC<PropsWithChildren> = ({}) => {
	const {
		playerState,
		setPlayerState,
		onPlayPausePressed,
		getSeekSliderPosition,
		onSeekSliderValueChange,
		onSeekSliderSlidingComplete,
		setPlaybackInstance
	} = useAudioPlayer()

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

	useEffect(() => {
		Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
			staysActiveInBackground: false,
			interruptionModeIOS: InterruptionModeIOS.DoNotMix,
			playsInSilentModeIOS: true,
			shouldDuckAndroid: true,
			interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
			playThroughEarpieceAndroid: false
		})

		const source = { uri: PLAYLIST[0].uri }

		const loadTrack = async () => {
			const { sound, status } = await Audio.Sound.createAsync(
				source,
				{
					shouldPlay: true
				},
				onPlaybackStatusUpdate
				// source
				// initialStatus
				// this._onPlaybackStatusUpdate
			)

			setPlaybackInstance(sound)
			await sound.playAsync()
		}

		loadTrack()
	}, [])

	return (
		<View className="flex flex-row justify-start items-center bg-[#1B1B1B]">
			<Image
				className="flex flex-1 max-w-[58px] h-[58px]"
				source={{ uri: PLAYLIST[0].img }}
			/>

			<TouchableHighlight
				activeOpacity={0.6}
				underlayColor="#DDDDDD"
				// onPress={() => alert('Pressed!')}
				onPress={onPlayPausePressed}
				className="mx-[24px]"
			>
				{/* <AntDesign
					name={playerState.isPlaying ? 'caretright' : 'pause'}
					size={24}
					color="white"
				/> */}
				<FontAwesome
					name={playerState.isPlaying ? 'play' : 'pause'}
					size={24}
					color="white"
				/>
			</TouchableHighlight>

			{playerState.isPlaying ? (
				<Slider
					// style={styles.playbackSlider}
					// trackImage={{
					// 	uri: PLAYLIST[0].uri
					// }}
					// thumbImage={{
					// 	uri: PLAYLIST[0].uri
					// }}
					style={{ width: 200, height: 40 }}
					minimumValue={0}
					maximumValue={1}
					minimumTrackTintColor="#FFFFFF"
					maximumTrackTintColor="#FFFFFF"
					value={getSeekSliderPosition()}
					onValueChange={onSeekSliderValueChange}
					onSlidingComplete={onSeekSliderSlidingComplete}
					disabled={false}
				/>
			) : (
				<Text className="text-white">{PLAYLIST[0].name.toUpperCase()}</Text>
			)}
		</View>
	)
}
