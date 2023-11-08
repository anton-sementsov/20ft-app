import { IRoute } from './navigation.types'
import { Auth } from '@/components/screens/auth/Auth'
import { Archive, Home } from '@/components/screens'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Archive',
		component: Archive
	},
	{
		name: 'Auth',
		component: Auth
	}
]
