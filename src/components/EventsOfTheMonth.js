import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Article from './Article'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'
import Overlay from './Overlay'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const EventsOfTheMonth = () => {
	const [events, setEvents] = useState()
	const [hoverItemIndex, setHoverItemIndex] = useState(null)

	const dateToTime = (date) => {
		const newDate = new Date(date)
		const time = newDate.toLocaleString('en-US', {
			hour: 'numeric',
			hour12: true,
		})
		return `${time}`
	}
	const dateToShortMonth = (date) => {
		const newDate = new Date(date)
		const day = newDate.getDate()
		const month = newDate.toLocaleString('da-dk', { month: 'short' }).replace('.', '')
		return `${day} ${month}`
	}

	useEffect(() => {
		if (events) return
		;(async () => {
			const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/events`)
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
		padding: 0.5rem 1rem;
		background: ${color.pink};

		& > span {
			margin-right: 1rem;
			color: ${color.grey};
			text-transform: capitalize;
		}
	`
	const btnStyle = css`
		padding: 1rem 3rem;
		color: ${color.grey};
		background: ${color.pink};
		border: none;
		z-index: 1;
		position: absolute;
		top: 20%;
		left: 39%;
		cursor: pointer;
	`
	const textContainerStyle = css`
		position: absolute;
		bottom: 0;
		z-index: 1;
		color: ${color.grey};
		background: rgba(3, 2, 3, 0.7);
		padding: 1rem 3.5rem 1rem 1rem;
		margin-bottom: 1px;
		line-height: 22px;

		& > h2 {
			margin-bottom: 0.5rem;
			text-transform: uppercase;
			font-size: 22px;
			font-weight: 400;
		}
	`
	// SWIPER STYLE
	const myPaginationStyle = css`
		text-align: center;
		width: 100%;
		margin-top: 2.5rem;

		& > * + * {
			margin-left: 0.5rem;
		}

		& .swiper-pagination-bullet {
			width: 20px;
			height: 20px;
			border-radius: 0;
			background: ${color.grey};
			opacity: 1;
		}
		& .swiper-pagination-bullet-active {
			background: ${color.pink};
		}
	`
	// === ANIMATIONS ===
	const btnAnimation = {
		initial: {
			opacity: 0,
			y: '-300%',
		},
		animate: {
			opacity: 1,
			y: '0%',
			transition: { type: 'spring', damping: 18 },
		},
	}
	const textContainerAnimation = {
		initial: {
			opacity: 0,
			y: '100%',
		},
		animate: {
			opacity: 1,
			y: '0%',
			transition: { type: 'spring', damping: 18 },
		},
	}
	return (
		<Article
			heading='events of the month'
			backgroundImage='./assets/content-img/gallery7_big.jpg'
			centerContent>
			<Swiper
				slidesPerView={2}
				slidesPerGroup={2}
				loop={true}
				pagination={{
					el: '.my-pagination_events',
					clickable: true,
					renderBullet: (i, className) => {
						return `<span class="${className}"></span>`
					},
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				modules={[Pagination, Autoplay]}
				className='mySwiper'>
				{events?.map((event, i) => (
					<SwiperSlide key={event.id}>
						<motion.div
							css={eventStyle}
							style={{
								backgroundImage: `url(${event.asset.url})`,
							}}
							onHoverStart={() => setHoverItemIndex(i)}
							onHoverEnd={() => setHoverItemIndex(null)}>
							<AnimatePresence>
								{hoverItemIndex === i && (
									<>
										<Overlay key='overlay' opacity={0.7} />
										<motion.button
											css={btnStyle}
											variants={btnAnimation}
											initial='initial'
											animate='animate'
											exit='initial'>
											Book Now
										</motion.button>
										<motion.div
											css={textContainerStyle}
											variants={textContainerAnimation}
											initial='initial'
											animate='animate'
											exit='initial'>
											<h2>{event.title}</h2>
											<p>{event.description}</p>
										</motion.div>
									</>
								)}
							</AnimatePresence>
						</motion.div>
						<div css={timeBarStyle}>
							<span>{dateToShortMonth(event.date)}</span>
							<span>{dateToTime(event.date)}</span>
							<span>{event.location}</span>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='my-pagination_events' css={myPaginationStyle} />
		</Article>
	)
}

export default EventsOfTheMonth
