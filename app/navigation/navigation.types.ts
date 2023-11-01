import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Archive: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
