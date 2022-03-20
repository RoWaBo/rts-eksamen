/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { color } from '../style/styleVariables'

const Overlay = ({ opacity, smallTriangles, ...props }) => {
	const overlayStyle = css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		background: rgba(3, 2, 3, ${opacity});
		border-color: ${color.pink};
		border-width: 2px 0;
		border-style: solid;

		& .rightTriangle {
			width: ${smallTriangles ? '80px' : '200px'};
			height: ${smallTriangles ? '50px' : '200px'};
			position: absolute;
			bottom: ${smallTriangles ? '-24px' : '-97px'};
			right: ${smallTriangles ? '-36px' : '-140px'};
			background: ${color.pink};
			transform: rotate(134deg);
			z-index: 2;
		}

		& .leftTriangle {
			width: ${smallTriangles ? '80px' : '200px'};
			height: ${smallTriangles ? '50px' : '200px'};
			position: absolute;
			top: ${smallTriangles ? '-24px' : '-97px'};
			left: ${smallTriangles ? '-36px' : '-140px'};
			background: ${color.pink};
			transform: rotate(134deg);
			z-index: 2;
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
