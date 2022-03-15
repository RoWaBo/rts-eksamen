import Article from '../components/Article'
import { GiPartyPopper } from 'react-icons/gi'
import { GrRestaurant } from 'react-icons/gr'
import { IoBeer } from 'react-icons/io5'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

const MainOffers = () => {
	const mainOffers = [
		{
			imgUrl: './assets/content-img/thumb1.jpg',
			icon: <GiPartyPopper />,
			heading: 'NIGHT CLUB',
		},
		{
			imgUrl: './assets/content-img/restaurant_1.jpg',
			icon: <GrRestaurant />,
			heading: 'RESTAURANT',
		},
		{
			imgUrl: './assets/content-img/thumb2.jpg',
			icon: <IoBeer />,
			heading: 'BAR',
		},
	]
	const mainOfferStyle = css`
		width: 451px;
		height: 577px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	`
	const mainOfferContainerStyle = css`
		display: flex;
		justify-content: center;
		gap: 37px;
	`
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
							}}></motion.section>
					))}
				</div>
			</Article>
		</>
	)
}

export default MainOffers
