import React, { FC, useEffect } from 'react'
import { View, Text, Dimensions, TouchableHighlight, Image } from 'react-native'
import { WebView } from 'react-native-webview'
import { useWindowDimensions } from 'react-native'
import RenderHtml from 'react-native-render-html'
import { Schedule } from '../../../features/schedule/components/Schedule'

// const htmlString = ReactDOMServer.renderToString(<App />)

// const appendScript = (srcURL, selector) => {
// 	const script = document.createElement('script')
// 	script.src = srcURL
// 	script.async = true
// 	document.querySelector(selector).appendChild(script)
// }

// const StreamingPlayerRadioCo = () => {
// 	useEffect(() => {
// 		appendScript(
// 			'https://embed.radio.co/player/2aba130.js',
// 			'#radioco-player-div'
// 		)
// 	}, [])

// 	{
// 		return <div id="radioco-player-div">222</div>
// 	}
// }

// const source = {
// 	html: `
//   <p style='text-align:center;'>
// 	Hello World!
//   </p>`
// }

export const Home: FC = ({}) => {
	// const { width } = useWindowDimensions()
	let deviceWidth = Dimensions.get('screen').width

	// `
	//     <script src="https://embed.radio.co/player/6f3c055.js"></script>
	// `

	const { width, height } = Dimensions.get('window')
	return (
		<View className="flex-col grow">
			{/* <Text style={styles.dimensionText}>Screen Width: {width}</Text>
			<Text style={styles.dimensionText}>Screen Height: {height}</Text> */}
			{/* <View className="w-full h-full">
				<WebView
					javaScriptEnabled
					source={{
						html: `
						<iframe title="20ft Radio audio player" src="https://app.radiocult.fm/embed/player/20ft%20Radio?theme=dusk&amp;primaryColor=%23FFCA26&amp;corners=rounded" width="100%" height="144px" scrolling="no" frameborder="0" seamless=""></iframe>
   						 `
					}}
					// style={{ width }}
				/>
			</View> */}
			<Schedule />

			<Text>Home page content</Text>
			<Text>Home page content</Text>
			<Text>Home page content</Text>
		</View>
	)
}
