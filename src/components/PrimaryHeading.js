/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'

const PrimaryHeading = ({ children, ...props }) => {
	const headerStyle = css`
		display: grid;
		place-content: center;
	`
	const headingStyle = css`
		letter-spacing: 0.075em;
		font-weight: 500;
		line-height: 1.1;
		text-transform: uppercase;
		color: ${color.white};
		font-size: 26px;
	`
	const ellipsisStyle = css`
		margin: 1rem auto;
		width: 250px;
		height: 3px;
		background: rgb(3, 2, 3);
		background: linear-gradient(
			90deg,
			rgba(3, 2, 3, 1) 0%,
			rgba(255, 42, 112, 1) 50%,
			rgba(3, 2, 3, 1) 100%
		);
	`
	return (
		<header css={headerStyle} {...props}>
			<h1 css={headingStyle}>{children}</h1>
			<div css={ellipsisStyle} />
		</header>
	)
}

export default PrimaryHeading
