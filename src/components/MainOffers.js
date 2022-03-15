import Article from '../components/Article'
import { GiPartyPopper } from 'react-icons/gi'
import { IoBeer, IoRestaurant } from 'react-icons/io5'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Overlay from './Overlay'
import { color } from '../style/styleVariables'

const MainOffers = () => {
	const [hoverItemIndex, setHoverItemIndex] = useState(null)
	const mainOffers = [
		{
			imgUrl: './assets/content-img/thumb1.jpg',
			icon: <GiPartyPopper />,
			heading: 'NIGHT CLUB',
		},
		{
			imgUrl: './assets/content-img/restaurant_1.jpg',
			icon: <IoRestaurant />,
			heading: 'RESTAURANT',
		},
		{
			imgUrl: './assets/content-img/thumb2.jpg',
			icon: <IoBeer />,
			heading: 'BAR',
		},
	]

	// === STYLE ===
	const mainOfferStyle = css`
		width: 451px;
		height: 577px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
		display: grid;
		place-content: center;

		.icon {
			width: 125px;
			height: 135px;
			border: 4px solid ${color.pink};
			border-radius: 10px;
			z-index: 1;
			display: grid;
			place-content: center;
			margin: 0 auto;

			& > svg {
				color: ${color.pink};
				width: 60px;
				height: 60px;
			}
		}
		.mainOfferHeading {
			text-align: center;
			font-size: 24px;
			color: ${color.grey};
			margin: 2rem 0 1.5rem;
			z-index: 1;
		}
		.description {
			max-width: 370px;
			color: ${color.grey};
			font-size: 16px;
			line-height: 25px;
			text-align: center;
			z-index: 1;
		}
	`
	const mainOfferContainerStyle = css`
		display: flex;
		justify-content: center;
		gap: 37px;
	`

	// === ANIMATIONS ===
	const iconAnimation = {
		initial: {
			opacity: 0.5,
			scale: 0.6,
		},
		animate: {
			opacity: 1,
			scale: 1,
		},
		exit: {
			opacity: 0,
			scale: 0.6,
		},
	}
	const headingAnimation = {
		initial: {
			opacity: 0,
			scale: 0.6,
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.7 },
		},
		exit: {
			opacity: 0,
			scale: 0.6,
		},
	}
	const descriptionAnimation = {
		initial: {
			opacity: 0,
			x: 60,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.7 },
		},
		exit: {
			opacity: 0,
			x: 30,
		},
	}
	return (
		<>
			<Article heading='welcome in the nightclub' centerContent>
				<div css={mainOfferContainerStyle}>
					{mainOffers.map((offer, i) => (
						<motion.section
							key={i}
							css={mainOfferStyle}
							style={{
								backgroundImage: `url(${offer.imgUrl})`,
							}}
							onHoverStart={() => setHoverItemIndex(i)}
							onHoverEnd={() => setHoverItemIndex(null)}>
							<AnimatePresence>
								{hoverItemIndex === i && (
									<>
										<Overlay key='overlay' />
										<motion.div
											key='icon'
											className='icon'
											variants={iconAnimation}
											initial='initial'
											animate='animate'
											exit='exit'>
											{offer.icon}
										</motion.div>
										<motion.h2
											className='mainOfferHeading'
											variants={headingAnimation}
											initial='initial'
											animate='animate'
											exit='exit'>
											{offer.heading}
										</motion.h2>
										<motion.p
											className='description'
											variants={descriptionAnimation}
											initial='initial'
											animate='animate'
											exit='exit'>
											'Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud
											exercitation ullamco laboris nisi ut
											aliquip ex ea commodo consequat.'
										</motion.p>
									</>
								)}
							</AnimatePresence>
						</motion.section>
					))}
				</div>
			</Article>
		</>
	)
}

export default MainOffers
