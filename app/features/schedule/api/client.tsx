import { ApiClient } from '@/api/client'
import { TGetRadioCultScheduleParams } from './types'

export enum RadioCultApiEndpoints {
	GetSchedule = 'https://api.radiocult.fm/api/station/20ft%20Radio/schedule/'
}

export const getRadioCultSchedule = async ({
	startDate,
	endDate,
	timezone = 'Europe/Kiev'
}: TGetRadioCultScheduleParams) =>
	await ApiClient.get(
		`${RadioCultApiEndpoints.GetSchedule}?startDate=${startDate}&endDate=${endDate}&timezone=${timezone}`,
		{
			headers: {
				'x-api-key': 'pk_5a62b516777f48bfa17f7894a33c5361'
			}
		}
	)
