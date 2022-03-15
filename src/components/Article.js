import PrimaryHeading from './PrimaryHeading'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Article = ({ heading, backgroundImage, centerContent, ...props }) => {
	const articleStyle = css``
	return (
		<article css={articleStyle} {...props}>
			<PrimaryHeading>{heading}</PrimaryHeading>
		</article>
	)
}

export default Article
