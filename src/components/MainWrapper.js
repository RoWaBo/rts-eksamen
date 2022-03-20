/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Wrapper = ({ children, ...props }) => {
	const wrapperStyle = css`
		background-image: url('./assets/bg/pattern_bg.jpg');
	`
	return (
		<main css={wrapperStyle} {...props}>
			{children}
		</main>
	)
}

export default Wrapper
