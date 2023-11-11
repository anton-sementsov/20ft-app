import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { useMixcloudList } from '../../api/hooks'
import { TMixcloudMix, TTag } from '../types/mix.types'
import { Box, Spinner } from 'native-base'

const PAGE_LIMIT = 20
const PAGE_OFFSET = 0

// todo: specify any
export const Mix = ({ picture, name, likes, tags }: Record<string, any>) => {
	return (
		<View className="flex flex-row">
			<Image source={{ uri: picture }} style={{ height: 80, width: 80 }} />
			<Text>{name}</Text>
			<Text>{likes}</Text>
			{tags.map((tag: TTag) => (
				<Text className="mix__tag">{tag.name}</Text>
			))}
		</View>
	)
}

const ArchiveList = ({}) => {
	const { mixes, isLoading, hasNextPage, fetchNextPage } = useMixcloudList(
		PAGE_OFFSET,
		PAGE_LIMIT
	)

	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage()
		}
	}

	const renderItem = ({ item }: { item: TMixcloudMix }) => (
		<View className="flex flex-row">
			<Image
				source={{ uri: item.pictures.large }}
				style={{ height: 80, width: 80 }}
			/>
			<Text>{item.name}</Text>
			{item.tags.map((tag: TTag, index) => (
				<Text key={index} className="mix__tag">
					{tag.name}
				</Text>
			))}
		</View>
	)

	const keyExtractor = (item: TMixcloudMix, index: number) => {
		return index.toString()
	}

	return (
		<View>
			{isLoading ? (
				<Box
					flex={1}
					backgroundColor="white"
					alignItems="center"
					justifyContent="center"
				>
					<Spinner color="emerald.500" size="lg" />
				</Box>
			) : (
				<FlatList
					data={mixes}
					keyExtractor={keyExtractor}
					renderItem={renderItem}
					onEndReached={loadMore}
				/>
			)}
		</View>
	)
}

export default ArchiveList
