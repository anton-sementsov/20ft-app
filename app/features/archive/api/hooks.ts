import { useQuery } from '@tanstack/react-query'
import { ArchiveApiEndpoints, getMixesMixcloud } from './client'
import { AxiosError, AxiosResponse } from 'axios'
import { TApiGetMixesMixcloud } from './types'

const queryKeys = {
	getGetMixesMixcloudList: () => [ArchiveApiEndpoints.GetMixesMixcloud] as const
}

export const useMixcloudList = (perPage: number) => {
	return useQuery<AxiosResponse<TApiGetMixesMixcloud>, AxiosError>({
		queryKey: queryKeys.getGetMixesMixcloudList(),
		queryFn: () => getMixesMixcloud(perPage)
	})
}
