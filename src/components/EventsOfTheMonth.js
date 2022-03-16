import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Article from './Article'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

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
		padding: 0.5rem;
		background: ${color.pink};
	`
	const myPaginationStyle = css`
		text-align: center;
		transition: 0.3s opacity;
		transform: translate3d(0, 0, 0);
		width: 100%;
		margin-top: 2.5rem;

		& > * + * {
			margin-left: 0.5rem;
		}

		.swiper-pagination-bullet {
			width: 20px;
			height: 20px;
			border-radius: 0;
			background: ${color.grey};
			opacity: 1;
		}
		.swiper-pagination-bullet-active {
			background: ${color.pink};
		}
	`
	return (
		<Article
			heading='events of the month'
			backgroundImage='./assets/content-img/gallery7_big.jpg'
			centerContent>
			<Swiper
				slidesPerView={2}
				// spaceBetween={30}
				slidesPerGroup={2}
				loop={true}
				// loopFillGroupWithBlank={true}
				pagination={{
					el: '.my-pagination',
					clickable: true,
					renderBullet: (index, className) => {
						return '<span class="' + className + '">' + '</span>'
					},
				}}
				// autoplay={{
				// 	delay: 5000,
				// 	disableOnInteraction: true,
				// }}
				navigation={true}
				modules={[Pagination, Autoplay]}
				className='mySwiper'>
				{events?.map((event) => (
					<SwiperSlide key={event.id}>
						<motion.div
							css={eventStyle}
							style={{
								backgroundImage: `url(${event.asset.url})`,
							}}></motion.div>
						<div css={timeBarStyle}>
							{dateConverter(event.date)}
							{event.location}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='my-pagination' css={myPaginationStyle} />
		</Article>
	)
}

export default EventsOfTheMonth