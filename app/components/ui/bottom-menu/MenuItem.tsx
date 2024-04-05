import React, { FC } from 'react'
import { View, Text, Pressable } from 'react-native'
import { IMenuItem, TypeNav } from './menu.interface'
import { AntDesign } from '@expo/vector-icons'

interface IBottomMenu {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

export const MenuItem: FC<IBottomMenu> = ({ nav, currentRoute, item }) => {
	const isActive = currentRoute === item.path

	const textColor = isActive ? 'text-[#6A8C1B]' : 'text-[#A5A5A5]'
	return (
		<Pressable
			className="flex flex-row justify-center items-center w-1/2 gap-4"
			onPress={() => nav(item.path)}
		>
			{/* <AntDesign name={item.iconName} size={26} color={color} /> */}
			<View>
				<Text className={textColor}>{item.path.toUpperCase()}</Text>
			</View>
		</Pressable>
	)
}
