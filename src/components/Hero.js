/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'
import { motion } from 'framer-motion'

const Hero = () => {
	const heroImages = ['header_bg_1.jpg', 'header_bg_2.jpg']
	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
	}
	const backgroundUrlPicker = () => `./assets/bg/${heroImages[getRandomInt(0, 2)]}`
	// === STYLE ===
	const sectionStyle = css`
		width: 100%;
		height: 100vh;
		background-image: url(${backgroundUrlPicker()});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: grid;
		place-content: center;

		& .slogan {
			line-height: 1.1;
			font-weight: 100;
			text-transform: uppercase;
			color: ${color.white};
			font-size: 32px;
			letter-spacing: 22px;
			text-align: center;
			margin: 0.4rem 0;
		}
		& .bottomLine {
			width: 100%;
			padding: 0 3rem;
		}
	`
	// === ANIMATION VARIANTS ===
	const logoAnimation = {
		initial: {
			rotateX: 95,
			opacity: 0,
		},
		animate: {
			rotateX: 0,
			opacity: 1,
			transition: {
				duration: 1.5,
				ease: 'easeInOut',
			},
		},
	}
	const sloganAnimation = {
		initial: {
			opacity: 0,
			y: -50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 1,
				duration: 1,
				ease: 'easeInOut',
			},
		},
	}
	return (
		<section css={sectionStyle}>
			<div>
				<motion.img
					src='./assets/icon/Logo.svg'
					alt='night club logo'
					variants={logoAnimation}
					initial='initial'
					animate='animate'
				/>
				<motion.div
					variants={sloganAnimation}
					initial='initial'
					animate='animate'>
					<h2 className='slogan'>Have a good time</h2>
					<img
						className='bottomLine'
						src='./assets/bottom_line2.png'
						alt='night club logo'
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
