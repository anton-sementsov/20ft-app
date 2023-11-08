import { TPictures, TTag, TUser } from '../components/types/mix.types'

export type TApiGetMixesMixcloud = {
	key: string
	url: string
	name: string
	tags: TTag[]
	created_time: string
	updated_time: string
	play_count: number
	favorite_count: number
	comment_count: number
	listener_count: number
	repost_count: number
	pictures: TPictures
	slug: string
	user: TUser
	audio_length: number
}
