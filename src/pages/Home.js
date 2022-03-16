/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import EventsOfTheMonth from '../components/EventsOfTheMonth'
import MainOffers from '../components/MainOffers'
import NightClubGallery from '../components/NightClubGallery'

const Home = () => {
	return (
		<>
			<MainOffers />
			<EventsOfTheMonth />
			<NightClubGallery />
		</>
	)
}

export default Home
