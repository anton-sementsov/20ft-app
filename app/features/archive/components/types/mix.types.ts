export type TTag = {
	key: string
	url: string
	name: string
}

export type TPictures = {
	small: string
	thumbnail: string
	medium_mobile: string
	medium: string
	large: string
	'320wx320h': string
	extra_large: string
	'640wx640h': string
	'768wx768h': string
	'1024wx1024h': string
}

export type TUser = {
	key: string
	url: string
	name: string
	username: string
	pictures: TPictures
}

export type TMixcloudMix = {
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
