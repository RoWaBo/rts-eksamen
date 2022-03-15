/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'

const Hero = () => {
	const heroImages = ['header_bg_1.jpg', 'header_bg_2.jpg']
	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
	}
	const backgroundUrlPicker = () =>
		`./assets/bg/${heroImages[getRandomInt(0, 2)]}`
	// === STYLE ===
	const sectionStyle = css`
		width: 100vw;
		height: 100vh;
		background-image: url(${backgroundUrlPicker()});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: grid;
		place-content: center;

		.slogan {
			line-height: 1.1;
			font-weight: 100;
			text-transform: uppercase;
			color: ${color.white};
			font-size: 32px;
			letter-spacing: 22px;
			text-align: center;
			margin-top: 0.4rem;
		}
		.bottomLine {
			width: 100%;
			height: 30px;
			padding: 0 3rem;
		}
	`
	return (
		<section css={sectionStyle}>
			<div>
				<img src='./assets/icon/Logo.svg' alt='night club logo' />
				<h2 className='slogan'>Have a good time</h2>
				<img
					className='bottomLine'
					src='./assets/bottom_line2.png'
					alt='night club logo'
				/>
			</div>
		</section>
	)
}

export default Hero
