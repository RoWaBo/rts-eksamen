import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Article from './Article'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'

const EventsOfTheMonth = () => {
	const [events, setEvents] = useState()

	const dateConverter = (date) => {
		const newDate = new Date(date)
		const day = newDate.getDate()
		const month = newDate.toLocaleString('da-dk', { month: 'short' })
		const time = newDate.toLocaleString('en-US', {
			hour: 'numeric',
			hour12: true,
		})
		return `${day} ${month} ${time}`
	}

	useEffect(() => {
		if (events) return
		;(async () => {
			const { data } = await axios(
				`${process.env.REACT_APP_BASE_URL}/events`
			)
			setEvents(data)
		})()
	}, [events])

	// === STYLE ===
	const eventStyle = css`
		width: 700px;
		height: 500px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
	`
	const timeBarStyle = css`
		width: 700px;
		height: 25px;
		background: ${color.pink};
	`
	return (
		<Article
			heading='events of the month'
			backgroundImage='./assets/content-img/gallery7_big.jpg'>
			{events?.map((event) => (
				<>
					<motion.section
						key={event.id}
						css={eventStyle}
						style={{
							backgroundImage: `url(${event.asset.url})`,
						}}></motion.section>
					<div css={timeBarStyle}>
						{dateConverter(event.date)}
						{event.location}
					</div>
				</>
			))}
		</Article>
	)
}

export default EventsOfTheMonth
