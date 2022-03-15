/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import EventsOfTheMonth from '../components/EventsOfTheMonth'
import MainOffers from '../components/MainOffers'

const Home = () => {
	return (
		<>
			<MainOffers />
			<EventsOfTheMonth />
		</>
	)
}

export default Home
