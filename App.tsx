import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Navigation } from './app/navigation/Navigation'
import { NativeBaseProvider } from 'native-base'
import { AudioPlayerProvider } from '@/features/player/context/player.context'

const queryClient = new QueryClient()

export default function App() {
	return (
		<NativeBaseProvider>
			<QueryClientProvider client={queryClient}>
				<SafeAreaProvider>
					<AudioPlayerProvider>
						<Navigation />
					</AudioPlayerProvider>
				</SafeAreaProvider>
				<StatusBar style="light" />
			</QueryClientProvider>
		</NativeBaseProvider>
	)
}
