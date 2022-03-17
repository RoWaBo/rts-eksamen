import { useState } from 'react'
import Article from '../components/Article'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color, spacing } from '../style/styleVariables'
import { useForm } from 'react-hook-form'
import PrimaryButton from '../components/PrimaryButton'
import Message from '../components/Message'
import { AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { ImLocation, ImMobile } from 'react-icons/im'
import { GoMail } from 'react-icons/go'
import { BiWorld } from 'react-icons/bi'

const Contact = () => {
	const [successMessage, setSuccessMessage] = useState()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm()

	const mailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	const onSubmit = async (form) => {
		console.log(form)
		try {
		} catch {}
	}

	// === STYLE ===
	const wrapperStyle = css`
		max-width: ${spacing.maxWidth};
		margin: 4rem auto;
		display: flex;
		gap: 1rem;
	`
	const FormStyle = css`
		flex: 1;
	`
	const sectionStyle = css`
		flex: 1;
		background: ${color.pink};
		color: ${color.grey};
		font-size: 18px;
		line-height: 24px;
		padding: 2rem;
		display: flex;
		gap: 2rem;
	`
	const leftDivStyle = css`
		display: flex;
		flex-direction: column;
	`
	const rightDivStyle = css``
	const infoItemStyle = css`
		width: 266px;
		display: flex;
		margin-bottom: 1.5rem;

		& > svg {
			margin-right: 1rem;
			min-width: 1.6rem;
			min-height: 1.6rem;
		}
	`
	return (
		<>
			<Article heading='contact us' backgroundImage='./assets/bg/footerbg.jpg' />
			<div css={wrapperStyle}>
				<form onSubmit={handleSubmit(onSubmit)} css={FormStyle}></form>
				<section css={sectionStyle}>
					<div css={leftDivStyle}>
						<div css={infoItemStyle}>
							<ImLocation />
							<p>
								04, A Agroha Nagar, Agra Mumbai National Highway No. 3,{' '}
								<br /> Denwas # 455001 India.
							</p>
						</div>
						<div css={infoItemStyle}>
							<ImMobile /> <p>+61 8 7804 6310</p>
						</div>
					</div>
					<div css={rightDivStyle}>
						<div css={infoItemStyle}>
							<GoMail /> <p>@Hsoft.com</p>
						</div>
						<div css={infoItemStyle}>
							<BiWorld />
							<p>www.Hsoft.com</p>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Contact
