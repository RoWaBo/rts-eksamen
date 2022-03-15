/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Hero = () => {
	const heroImages = ['header_bg_1.jpg', 'header_bg_2.jpg']
	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
	}
	// === STYLE ===
	const sectionStyle = css`
		width: 100vw;
		height: 100vh;
		background-image: url('./assets/bg/${heroImages[getRandomInt(0, 2)]}');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	`
	return <section css={sectionStyle}></section>
}

export default Hero
