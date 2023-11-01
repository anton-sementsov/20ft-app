import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { AntDesign } from '@expo/vector-icons'

export interface IMenuItem {
	iconName: keyof typeof AntDesign.glyphMap
	path: keyof TypeRootStackParamList
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void
