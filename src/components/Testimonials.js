import axios from 'axios'
import { useEffect, useState } from 'react'
import Article from './Article'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState()
	useEffect(() => {
		if (testimonials) return
		;(async () => {
			const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/testimonials`)
			setTestimonials(data)
		})()
	}, [testimonials])

	// === STYLE ===
	const testimonialContainerStyle = css`
		width: 100%;
		display: grid;
		justify-content: center;
		color: ${color.grey};
		text-align: center;

		& > img {
			margin: 0 auto;
		}
		& > h2 {
			font-size: 20px;
			font-weight: 400;
			margin: 1.5rem 0;
		}
		& > p {
			max-width: 1100px;
		}
	`
	const someIconContainerStyle = css`
		display: flex;
		margin: 1.5rem auto;
		& > * + * {
			margin-left: 1.5rem;
		}
	`
	const someIconStyle = css`
		width: 47px;
		height: 47px;
		border: 2px solid ${color.white};
		display: grid;
		place-content: center;

		& > svg {
			color: ${color.white};
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
		<Article heading='' backgroundImage='./assets/bg/footerbg.jpg' centerContent>
			<Swiper
				slidesPerView={1}
				loop={true}
				pagination={{
					el: '.my-pagination-testimonials',
					clickable: true,
					renderBullet: (i, className) => {
						return `<span class="${className}"></span>`
					},
				}}
				modules={[Pagination]}
				className='mySwiper'>
				{testimonials?.map((testimonial) => (
					<SwiperSlide key={testimonial.id}>
						<div css={testimonialContainerStyle}>
							<img src={testimonial.asset.url} alt={testimonial.name} />
							<h2>{testimonial.name}</h2>
							<p>{testimonial.content}</p>
							<div css={someIconContainerStyle}>
								<a
									href={testimonial.facebook}
									target='_blank'
									css={someIconStyle}>
									<FaFacebookF />
								</a>
								<a
									href={testimonial.twitter}
									target='_blank'
									css={someIconStyle}>
									<FaTwitter />
								</a>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='my-pagination-testimonials' css={myPaginationStyle} />
		</Article>
	)
}

export default Testimonials
