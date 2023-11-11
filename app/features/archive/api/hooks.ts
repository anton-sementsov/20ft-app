import { useInfiniteQuery } from '@tanstack/react-query'
import { ArchiveApiEndpoints, getMixesMixcloud } from './client'
import { AxiosError, AxiosResponse } from 'axios'
import { MixesMixcloudDTO, TPageParam } from './types'
import { getParamsFromUrl } from '@/utils'
import { useMemo } from 'react'
import { TMixcloudMix } from '../components/types/mix.types'

const queryKeys = {
	getGetMixesMixcloudList: () => [ArchiveApiEndpoints.GetMixesMixcloud] as const
}

export const useMixcloudList = (limit: number, offset: number) => {
	const query = useInfiniteQuery<MixesMixcloudDTO, AxiosError>({
		queryKey: queryKeys.getGetMixesMixcloudList(),

		queryFn: ({ pageParam }: { pageParam: TPageParam }) =>
			getMixesMixcloud(pageParam),
		initialPageParam: { limit, offset },
		getNextPageParam: (lastPage) =>
			getParamsFromUrl(lastPage?.data?.paging.next)
	})

	const flatPages = useMemo(() => {
		return query.data?.pages.flat(Infinity)
	}, [query.data])

	// todo: rewrite data selecting from response
	const mixes =
		flatPages &&
		(flatPages.map((data) => data?.data.data).flat() as TMixcloudMix[])

	return { ...query, mixes }
}
