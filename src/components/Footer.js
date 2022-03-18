import Article from './Article'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color, spacing } from '../style/styleVariables'
import {
	FaTwitter,
	FaFacebookF,
	FaGooglePlusG,
	FaSkype,
	FaBloggerB,
} from 'react-icons/fa'

const Footer = () => {
	const sectionContainerStyle = css`
		display: flex;
		gap: 2.5rem;
	`
	const infoSectionStyle = css`
		flex: 1;
	`
	const logoStyle = css`
		width: 232px;
		margin-bottom: 4rem;
	`
	const header = css`
		color: ${color.pink};
		font-size: 20px;
		text-transform: uppercase;
		font-weight: 500;
	`
	const descriptionStyle = css`
		color: ${color.grey};
		font-size: 16px;
	`
	const infoContainerStyle = css`
		& > h2 {
			margin-bottom: 0.8rem;
		}
		& > p {
			margin-bottom: 2.5rem;
			text-transform: uppercase;
		}
	`
	const postSectionStyle = css`
		flex: 1;
		& > h2 {
			margin-bottom: 2rem;
		}
	`
	const postStyle = css`
		display: flex;
		gap: 1.5rem;
		border-bottom: 1px solid rgb(255, 255, 255, 0.1);
		padding-bottom: 2rem;
		margin-top: 2rem;
	`
	const postImgStyle = css``
	const postTextContainer = css`
		padding: 1rem 0;
	`
	const postDateStyle = css`
		color: ${color.pink};
		font-size: 16px;
		margin-top: 1rem;
		display: block;
	`
	const postIconStyle = css`
		width: 24px;
		height: 24px;
		color: ${color.pink};
		margin: 1rem 0;
	`
	const someSectionStyle = css`
		max-width: ${spacing.maxWidth};
		margin: 0 auto;
		padding: 2rem 0;
		background: ${color.black};
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > h2,
		h3 {
			color: ${color.grey};
			font-size: 1rem;
			font-weight: 400;
		}
	`
	const someIconContainerStyle = css`
		display: flex;
		gap: 1rem;
	`
	const someIconStyle = css`
		width: 47px;
		height: 47px;
		border: 2px solid ${color.grey};
		display: grid;
		place-content: center;

		& > svg {
			color: ${color.grey};
		}
	`
	return (
		<footer>
			<Article heading='' backgroundImage='./assets/bg/footerbg.jpg' centerContent>
				<div css={sectionContainerStyle}>
					<section css={infoSectionStyle}>
						<img
							css={logoStyle}
							src='./assets/Logo.png'
							alt='nightclub logo'
						/>
						<div css={infoContainerStyle}>
							<h2 css={header}>Location</h2>
							<p css={descriptionStyle}>
								PO Box 16122 Collins Street West Victoria 8007 Australia
							</p>
						</div>
						<div css={infoContainerStyle}>
							<h2 css={header}>opening hours</h2>
							<p css={descriptionStyle}>mon - fri 9 am to 10 pm</p>
						</div>
						<div css={infoContainerStyle}>
							<h2 css={header}>Location</h2>
							<p css={descriptionStyle}>mon - fri 2 pm to 06 pm</p>
						</div>
					</section>
					<section css={postSectionStyle}>
						<h2 css={header}>Recent posts</h2>
						<div css={postStyle}>
							<img
								css={postImgStyle}
								src='./assets/content-img/recent_post1.jpg'
								alt='guy partying with headphones'
							/>
							<div css={postTextContainer}>
								<p css={descriptionStyle}>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting.
								</p>
								<span css={postDateStyle}>April 17, 2018</span>
							</div>
						</div>
						<div css={postStyle}>
							<img
								css={postImgStyle}
								src='./assets/content-img/recent_post2.jpg'
								alt='concert'
							/>
							<div css={postTextContainer}>
								<p css={descriptionStyle}>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting.
								</p>
								<span css={postDateStyle}>April 17, 2018</span>
							</div>
						</div>
					</section>
					<section css={postSectionStyle}>
						<h2 css={header}>Recent posts</h2>
						<div css={postStyle}>
							<FaTwitter css={postIconStyle} />
							<div css={postTextContainer}>
								<p css={descriptionStyle}>
									It is a long established fact that a reader will be
									distracted by readable.
								</p>
								<span css={postDateStyle}>5 hour ago</span>
							</div>
						</div>
						<div css={postStyle}>
							<FaTwitter css={postIconStyle} />
							<div css={postTextContainer}>
								<p css={descriptionStyle}>
									It is a long established fact that a reader will be
									distracted by readable.
								</p>
								<span css={postDateStyle}>5 hour ago</span>
							</div>
						</div>
					</section>
				</div>
			</Article>
			<section css={someSectionStyle}>
				<h2>Stay Connected With Us Night Club</h2>
				<div css={someIconContainerStyle}>
					<div css={someIconStyle}>
						<FaFacebookF />
					</div>
					<div css={someIconStyle}>
						<FaTwitter />
					</div>
					<div css={someIconStyle}>
						<FaGooglePlusG />
					</div>
					<div css={someIconStyle}>
						<FaSkype />
					</div>
					<div css={someIconStyle}>
						<FaBloggerB />
					</div>
				</div>
				<h3>CopyRight @ 2018 NightClub psd template all right</h3>
			</section>
		</footer>
	)
}

export default Footer
