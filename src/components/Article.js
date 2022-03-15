import PrimaryHeading from './PrimaryHeading'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { spacing } from '../style/styleVariables'

const Article = ({
	heading,
	backgroundImage,
	centerContent,
	children,
	...props
}) => {
	const articleStyle = css`
		width: 100vw;
		padding: 4rem 0;
		.heading {
			padding-bottom: 3rem;
		}
		.container {
			${centerContent && `max-width:${spacing.maxWidth}; margin: 0 auto`}
		}
	`
	return (
		<article css={articleStyle} {...props}>
			<div className='container'>
				<PrimaryHeading className='heading'>{heading}</PrimaryHeading>
				{children}
			</div>
		</article>
	)
}

export default Article
