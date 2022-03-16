import Article from './Article'
import { useState, useEffect } from 'react'
import axios from 'axios'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { motion, AnimatePresence } from 'framer-motion'
import Overlay from './Overlay'
import { AiOutlineCloseSquare } from 'react-icons/ai'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { color } from '../style/styleVariables'

const NightClubGallery = () => {
	const [gallery, setGallery] = useState()
	const [hoverItemIndex, setHoverItemIndex] = useState(null)
	const [lightboxIsVisible, setLightboxIsVisible] = useState()
	const [swiperControl, setSwiperControl] = useState()
	const [clickedImageIndex, setClickedImageIndex] = useState()

	useEffect(() => {
		if (gallery) return
		;(async () => {
			const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/gallery`)
			setGallery(data)
		})()
	}, [gallery])

	useEffect(() => {
		swiperControl && swiperControl.slideTo(clickedImageIndex, 0)
	}, [swiperControl, clickedImageIndex])

	const enableLightBox = (i) => {
		setLightboxIsVisible(true)
		setClickedImageIndex(i)
	}

	// === STYLE ===
	const imageStyle = css`
		width: 200px;
		height: 200px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
	`
	const galleryContainerStyle = css`
		display: flex;
		flex-wrap: wrap;
	`
	const lightboxStyle = css`
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(3, 2, 3, 0.8);
		z-index: 5;
	`
	const closeIconStyle = css`
		width: 50px;
		height: 50px;
		color: ${color.grey};
		position: fixed;
		top: 20px;
		right: 30px;
		z-index: 10;
		cursor: pointer;
	`
	const swiperStyle = css`
		opacity: ${lightboxIsVisible ? '1' : '0'};
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 6;
		.swiper-slide {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		/* .sliderImage {

		} */
		/* .swiper-button-prev {
			
		}
		.swiper-button-next {
			
		} */
	`
	// === ANIMATIONS ===
	const galleryContainerAnimation = {
		initial: {
			opacity: 0,
			x: -150,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1 },
		},
	}
	const opacityAnimation = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: { duration: 0.4 },
		},
	}
	return (
		<>
			<Article heading='Night club gallery' centerContent>
				<motion.div
					css={galleryContainerStyle}
					variants={galleryContainerAnimation}
					initial='initial'
					whileInView='animate'>
					{gallery?.map((image, i) => (
						<motion.div
							key={i}
							css={imageStyle}
							style={{
								backgroundImage: `url(${image.asset.url})`,
							}}
							onHoverStart={() => setHoverItemIndex(i)}
							onHoverEnd={() => setHoverItemIndex(null)}
							onTap={() => enableLightBox(i)}>
							<AnimatePresence>
								{hoverItemIndex === i && (
									<Overlay key='overlay' opacity={0.7} smallTriangles />
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>
			</Article>
			<AnimatePresence>
				{lightboxIsVisible && (
					<motion.div
						variants={opacityAnimation}
						initial='initial'
						animate='animate'
						exit='initial'>
						<div css={lightboxStyle} />
						<AiOutlineCloseSquare
							css={closeIconStyle}
							onClick={() => setLightboxIsVisible(false)}
						/>
						<Swiper
							onSwiper={setSwiperControl}
							css={swiperStyle}
							navigation={true}
							modules={[Navigation]}
							// loop
							centeredSlides
							className='mySwiper'>
							{gallery?.map((image, i) => (
								<SwiperSlide key={i}>
									<img
										className='sliderImage'
										src={image.asset.url}
										alt={image.description}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default NightClubGallery
