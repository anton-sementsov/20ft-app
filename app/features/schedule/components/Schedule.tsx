import { FC } from 'react'
import { useRadioCultSchedule } from '../api/hooks'
import { TRadioCultEvent } from '../api/types'
import { View, Text, Image, FlatList } from 'react-native'

import dayjs from 'dayjs' // Імпортуємо бібліотеку dayjs
import utc from 'dayjs/plugin/utc' // Імпортуємо плагін для роботи з UTC

// todo:
// - add dinamick fetch from todays moment till one week
// - display propperly according to nts schedule design

// Функція для розбиття об'єктів за днями
const groupByDay = (events) => {
	return events.reduce((acc, event) => {
		const startDate = dayjs(event.startDateUtc)
		let dayKey = startDate.format('dddd, DD MMM')

		const today = dayjs().startOf('day')
		const tomorrow = dayjs().add(1, 'day').startOf('day')

		if (startDate.isSame(today, 'day')) {
			dayKey = 'today, ' + startDate.format('DD MMM')
		} else if (startDate.isSame(tomorrow, 'day')) {
			dayKey = 'tomorrow, ' + startDate.format('DD MMM')
		}

		if (!acc[dayKey]) {
			acc[dayKey] = []
		}

		acc[dayKey].push(event)
		return acc
	}, {})
}

// Функція для сортування об'єктів за днями
const sortEventsByDay = (events) => {
	// Розбиваємо об'єкти за днями
	const groupedEvents = groupByDay(events)

	// Отримуємо масив дат
	const dates = Object.keys(groupedEvents)

	// Сортуємо масив дат
	dates.sort()

	// Створюємо новий масив подій, відсортований за днями
	const sortedEvents = dates.reduce((acc, date) => {
		// Додаємо події для поточної дати до загального масиву
		acc.push(...groupedEvents[date])
		return acc
	}, [])

	return sortedEvents
}

const ScheduleItem = ({ event }: { event: TRadioCultEvent }) => {
	var inputDateFormat = 'HH:mm'
	// var startDate = dayjs.utc(event.startDateUtc, inputDateFormat)
	// var endDate = dayjs.utc(event.endDateUtc, inputDateFormat)

	dayjs.extend(utc) // Встановлюємо плагін для роботи з UTC

	const formattedStartDate = dayjs
		.utc(event.startDateUtc)
		.utcOffset(dayjs().utcOffset())
		.format(inputDateFormat) // Форматуємо та зображуємо дату з урахуванням таймзони клієнта

	const formattedEndDate = dayjs
		.utc(event.endDateUtc)
		.utcOffset(dayjs().utcOffset())
		.format(inputDateFormat) // Форматуємо та зображуємо дату з урахуванням таймзони клієнта

	return (
		<View className="flex flex-col text-white py-[6px]">
			<Text>{formattedStartDate}</Text>
			{/* <Text>end:{formattedEndDate}</Text> */}

			<Text>{event.title}</Text>
		</View>
	)
}

const ScheduleDayGroup = ({
	dayTitle,
	events
}: {
	dayTitle: string
	events: TRadioCultEvent[]
}) => {
	console.log('dayTitle', events)
	console.log('events in ScheduleDayGroup', events)
	const scheduleList = events.map((event: TRadioCultEvent) => (
		<ScheduleItem event={event} />
	))
	return (
		<View className="p-[10px] ">
			<View className="py-[10px] bg-black">
				<Text className="font-bold text-white">{dayTitle}</Text>
			</View>
			<View>{scheduleList}</View>
		</View>
	)
}

export const Schedule: FC = () => {
	const { schedules } = useRadioCultSchedule({
		startDate: '2024-04-23T03:00:00.000Z',
		endDate: '2024-04-28T03:00:00.000Z'
	})

	if (!schedules) return <></>

	const eventsGroupedByDay = groupByDay(schedules)

	return (
		<FlatList
			data={Object.keys(eventsGroupedByDay)}
			renderItem={({ item }) => (
				<ScheduleDayGroup dayTitle={item} events={eventsGroupedByDay[item]} />
			)}
		/>
	)
}
