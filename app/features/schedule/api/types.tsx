export type TGetRadioCultScheduleParams = {
	startDate: string
	endDate: string
	timezone?: string
}

export type TRadioCultEvent = {
	id: string
	stationId: string
	title: string
	startDateUtc: string
	endDateUtc: string
	description?: any
	duration: number
	timezone: string
	color?: string
	artistIds?: string[]
	isRecurring: boolean
	media:
		| {
				type: 'mix'
				trackId?: string | undefined
		  }
		| {
				type: 'playlist'
				playlistId: string
		  }
		| {
				type: 'live'
		  }
}
