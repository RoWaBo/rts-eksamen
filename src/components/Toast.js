import { css } from '@emotion/react'
/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion'
import { color } from '../style/styleVariables'

const Toast = ({ children, ...props }) => {
	const ToastStyle = css`
		color: white;
	`
	const containerStyle = css`
		position: fixed;
		bottom: 20%;
		left: 0;
		right: 0;
		z-index: 20;
		margin: 0 auto;
		background: ${color.pink};
		border-radius: 10px;
		padding: 1.5rem;
		max-width: fit-content;
	`
	const toastAnimation = {
		initial: {
			opacity: 0,
			y: '100vh',
		},
		animate: {
			opacity: 1,
			y: '0',
		},
	}
	return (
		<motion.div
			css={containerStyle}
			{...props}
			key={'Toast'}
			variants={toastAnimation}
			initial='initial'
			animate='animate'
			exit='initial'
			transition={{ duration: 0.5 }}>
			<p css={ToastStyle}>{children}</p>
		</motion.div>
	)
}

export default Toast
