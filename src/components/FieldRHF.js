/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forwardRef } from 'react'
import { color } from '../style/styleVariables'

const FieldRHF = forwardRef(({ errorMessage, ...props }, ref) => {
	// === STYLING ===
	const errorColor = 'rgb(239 68 68)'

	const input = css`
		outline: none;
		width: 100%;
		background: ${color.black};
		padding: 1rem;
		border: 1px solid rgb(255, 255, 255, 0.25);
		color: ${color.grey};
	`
	const inputError = css`
		border: 1px solid ${errorColor};
	`
	const errorText = css`
		font-size: 14px;
		color: ${errorColor};
	`

	return (
		<>
			<input ref={ref} {...props} css={[input, errorMessage && inputError]} />
			{errorMessage && <p css={errorText}>{errorMessage}</p>}
		</>
	)
})

export default FieldRHF
