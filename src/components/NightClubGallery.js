import Article from './Article'
import { useState, useEffect } from 'react'
import axios from 'axios'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { motion, AnimatePresence } from 'framer-motion'
import Overlay from './Overlay'

const NightClubGallery = () => {
	const [gallery, setGallery] = useState()
	const [hoverItemIndex, setHoverItemIndex] = useState(null)

	useEffect(() => {
		if (gallery) return
		;(async () => {
			const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/gallery`)
			setGallery(data)
		})()
	}, [gallery])

	// === STYLE ===
	const imageStyle = css`
		width: 200px;
		height: 200px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
	`
	const galleryContainerStyle = css`
		display: flex;
		flex-wrap: wrap;
	`
	const overlayStyle = css``
	return (
		<>
			<motion.div css={overlayStyle} />
			<Article heading='Night club gallery' centerContent>
				<motion.div css={galleryContainerStyle}>
					{gallery?.map((image, i) => (
						<motion.div
							css={imageStyle}
							style={{
								backgroundImage: `url(${image.asset.url})`,
							}}
							onHoverStart={() => setHoverItemIndex(i)}
							onHoverEnd={() => setHoverItemIndex(null)}>
							<AnimatePresence>
								{hoverItemIndex === i && (
									<Overlay key='overlay' opacity={0.7} smallTriangles />
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>
			</Article>
		</>
	)
}

export default NightClubGallery
