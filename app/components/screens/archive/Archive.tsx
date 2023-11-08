import ArchiveList from '@/features/archive/components/archive-list/ArchiveList'
import { FC } from 'react'
import { View, Text } from 'react-native'

export const Archive: FC = ({}) => {
	return (
		<View>
			<Text>Archive</Text>
			<ArchiveList />
		</View>
	)
}
