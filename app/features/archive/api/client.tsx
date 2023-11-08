import { ApiClient } from '@/api/client'
import { TApiGetMixesMixcloud } from './types'

export enum ArchiveApiEndpoints {
	GetMixesMixcloud = 'https://api.mixcloud.com/20ftradio/cloudcasts/?limit='
}

export const getMixesMixcloud = (perPage: number) =>
	ApiClient.get<TApiGetMixesMixcloud>(
		ArchiveApiEndpoints.GetMixesMixcloud + perPage
	)
