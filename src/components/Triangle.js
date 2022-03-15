/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Triangle = ({ ...props }) => {
	const triangleStyle = css`
		position: absolute;
		width: 40px;
		height: 40px;
		background: conic-gradient(
			at 50% 50%,
			transparent 135deg,
			rgb(255, 42, 112) 0,
			rgb(255, 42, 112) 225deg,
			transparent 0
		);
	`
	return <div css={triangleStyle} {...props} />
}

export default Triangle
