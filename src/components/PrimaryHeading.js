/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'

const PrimaryHeading = ({ children, ...props }) => {
	const headingStyle = css`
		letter-spacing: 0.075em;
		font-weight: 700;
		line-height: 1.1;
		font-family: 'Ubuntu', sans-serif;
		color: ${color.white};
	`
	return (
		<h1 css={headingStyle} {...props}>
			{children}
		</h1>
	)
}

export default PrimaryHeading
