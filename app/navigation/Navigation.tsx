import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'
import { BottomMenu } from '../components/ui/bottom-menu'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'
import { Player } from '@/features/player/components/PlayerWrapper/Player'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

export const Navigation: FC = ({}) => {
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () => {
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		})

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])

	return (
		<>
			<NavigationContainer ref={navRef}>
				<Stack.Navigator screenOptions={{}}>
					{routes.map((route) => (
						<Stack.Screen
							key={route.name}
							{...route}
							options={{
								headerStyle: {
									backgroundColor: '#1B1B1B'
								},
								headerTitleStyle: {
									color: '#A5A5A5'
								}
							}}
						></Stack.Screen>
					))}
				</Stack.Navigator>
			</NavigationContainer>
			<Player />
			{currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	)
}
