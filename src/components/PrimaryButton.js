/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'

const PrimaryButton = ({ children, ...props }) => {
	const btnStyle = css`
		padding: 1rem 2rem;
		background: transparent;
		border-color: ${color.grey};
		border-width: 1px 0;
		border-style: solid;
		color: ${color.grey};
		text-transform: uppercase;
		cursor: pointer;
	`
	return (
		<button {...props} css={btnStyle}>
			{children}
		</button>
	)
}

export default PrimaryButton
