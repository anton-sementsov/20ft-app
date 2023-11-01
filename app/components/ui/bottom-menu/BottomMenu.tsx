import React, { FC } from 'react'
import { View, Text, Pressable } from 'react-native'
import { IMenuItem, TypeNav } from './menu.interface'
import { AntDesign } from '@expo/vector-icons'
import { MenuItem } from './MenuItem'
import { menuData } from './menu.data'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

export const BottomMenu: FC<IBottomMenu> = ({ nav, currentRoute }) => {
	const { bottom } = useSafeAreaInsets()
	return (
		<View
			className="pt-5 px-3 flex-row w-full"
			style={{ paddingBottom: bottom + 10 }}
		>
			{menuData.map((item) => (
				<MenuItem
					nav={nav}
					item={item}
					currentRoute={currentRoute}
					key={item.path}
				/>
			))}
		</View>
	)
}
