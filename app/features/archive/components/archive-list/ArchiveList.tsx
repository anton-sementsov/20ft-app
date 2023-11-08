import React from 'react'
import { View, Text, Image } from 'react-native'
import { useMixcloudList } from '../../api/hooks'
import { TMixcloudMix, TTag } from '../types/mix.types'

const MIXES_PER_PAGE = 10

// todo: specify any
export const Mix = ({
	picture,
	name,
	likes,
	tags,
	key
}: Record<string, any>) => {
	return (
		<View className="flex flex-row" key={key}>
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
	//todo: refactor, use response normillizer
	const { data: resposeMixcloud, isLoading } = useMixcloudList(MIXES_PER_PAGE)

	const mixes = resposeMixcloud?.data?.data

	return (
		<View>
			{!isLoading &&
				mixes &&
				mixes?.map((mix: TMixcloudMix) => (
					<Mix
						key={mix.key}
						name={mix.name}
						picture={mix.pictures.large}
						likes={mix.favorite_count}
						tags={mix.tags}
					/>
				))}
		</View>
	)
}

export default ArchiveList
