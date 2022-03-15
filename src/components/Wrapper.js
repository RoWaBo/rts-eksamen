/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Wrapper = ({ children, ...props }) => {
	const wrapperStyle = css`
		background-image: url('./assets/bg/pattern_bg.jpg');
	`
	return (
		<div css={wrapperStyle} {...props}>
			{children}
		</div>
	)
}

export default Wrapper
