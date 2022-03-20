import PrimaryHeading from './PrimaryHeading'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { spacing } from '../style/styleVariables'

const Article = ({ heading, backgroundImage, centerContent, children, ...props }) => {
	const articleStyle = css`
		width: 100%;
		padding: 4rem 0;
		${backgroundImage &&
		`
			background: linear-gradient(rgb(0, 0, 0, 0.85), rgb(0, 0, 0, 0.85)), url(${backgroundImage});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		`}

		& .heading {
			${children && 'padding-bottom: 3rem;'}
		}
		& .container {
			${centerContent && `max-width:${spacing.maxWidth}; margin: 0 auto`}
		}
	`
	return (
		<article css={articleStyle} {...props}>
			<div className='container'>
				{heading !== '' && (
					<PrimaryHeading className='heading'>{heading}</PrimaryHeading>
				)}
				{children}
			</div>
		</article>
	)
}

export default Article
