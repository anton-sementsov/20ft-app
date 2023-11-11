import React, { FC } from 'react'
import { Box, Spinner } from 'native-base'

export const Loader: FC = ({}) => {
	return (
		<Box
			flex={1}
			backgroundColor="white"
			alignItems="center"
			justifyContent="center"
		>
			<Spinner color="emerald.500" size="lg" />
		</Box>
	)
}
