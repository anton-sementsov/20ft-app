import { ApiClient } from '@/api/client'
import { TApiGetMixesMixcloud, TPageParam } from './types'

export enum ArchiveApiEndpoints {
	GetMixesMixcloud = 'https://api.mixcloud.com/20ftradio/cloudcasts/'
}

export const getMixesMixcloud = async ({ limit, offset }: TPageParam) =>
	await ApiClient.get<TApiGetMixesMixcloud>(
		`${ArchiveApiEndpoints.GetMixesMixcloud}?limit=${limit}&offset=${offset}`
	)
