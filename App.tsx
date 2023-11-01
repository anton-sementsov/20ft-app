import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Navigation } from './app/navigation/Navigation'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<Navigation />
				<View>
					<Text>sad</Text>
				</View>
			</SafeAreaProvider>
			<StatusBar style="light" />
		</QueryClientProvider>
	)
}
