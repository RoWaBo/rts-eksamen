/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { color } from '../style/styleVariables'

const Overlay = ({ ...props }) => {
	const overlayStyle = css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		background: rgba(3, 2, 3, 1);
		border-color: ${color.pink};
		border-width: 2px 0;
		border-style: solid;

		.rightTriangle {
			width: 200px;
			height: 200px;
			position: absolute;
			bottom: -97px;
			right: -140px;
			background: ${color.pink};
			transform: rotate(134deg);
		}

		.leftTriangle {
			width: 200px;
			height: 200px;
			position: absolute;
			top: -97px;
			left: -140px;
			background: ${color.pink};
			transform: rotate(134deg);
		}
	`
	const overlayAnimation = {
		initial: {
			top: '-110px',
			bottom: '-110px',
			opacity: 0,
		},
		animate: {
			top: '0px',
			bottom: '0px',
			opacity: 1,
			transition: { damping: 5 },
		},
		exit: {
			top: '-110px',
			bottom: '-110px',
			opacity: 0,
		},
	}
	return (
		<motion.div
			{...props}
			css={overlayStyle}
			variants={overlayAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			<motion.div className='leftTriangle' />
			<motion.div className='rightTriangle' />
		</motion.div>
	)
}

export default Overlay
