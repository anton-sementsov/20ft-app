import { AxiosError } from 'axios'
import { TGetRadioCultScheduleParams } from './types'
import { useQuery } from '@tanstack/react-query'
import { RadioCultApiEndpoints, getRadioCultSchedule } from './client'

const queryKeys = {
	getRadioCultSchedule: () => [RadioCultApiEndpoints.GetSchedule] as const
}

export const useRadioCultSchedule = ({
	startDate,
	endDate,
	timezone
}: TGetRadioCultScheduleParams) => {
	const query = useQuery<any, AxiosError>({
		queryKey: queryKeys.getRadioCultSchedule(),
		queryFn: () =>
			getRadioCultSchedule({
				startDate,
				endDate,
				timezone
			})
	})

	return { ...query, schedules: query?.data?.data.schedules }
}
