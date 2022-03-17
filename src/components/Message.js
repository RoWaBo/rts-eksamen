import { css } from '@emotion/react'
/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion'

const Message = ({ children, error, success, ...props }) => {
	const messageStyle = css`
		font-size: 14px;
		color: white;
	`
	const containerStyle = css`
		background: #9ca3af;
		${error && 'background: rgb(239 68 68 / 60%);'}
		${success && 'background: #22c55e;'}
		border-radius: 10px;
		padding: 0.5rem 1rem;
		max-width: fit-content;
	`

	return (
		<motion.div
			css={containerStyle}
			{...props}
			key={'message'}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}>
			<p css={messageStyle}>{children}</p>
		</motion.div>
	)
}

export default Message
