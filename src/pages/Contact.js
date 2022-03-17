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
import FieldRHF from '../components/FieldRHF'
import TextAreaRHF from '../components/TextAreaRHF'

const Contact = () => {
	const [successMessage, setSuccessMessage] = useState()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm()

	const onSubmit = async ({ name, email, website, comment }) => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_BASE_URL}/contact_message`,
				{
					name,
					email,
					website,
					comment,
				}
			)
			if (res.status === 201) setSuccessMessage(`Your comment has been sent!`)
		} catch {
			setError('nightClubApi', { message: 'Something went wrong' })
		}
	}

	// === STYLE ===
	const wrapperStyle = css`
		max-width: ${spacing.maxWidth};
		margin: 3rem auto;
		display: flex;
		gap: 2rem;
	`
	const FormStyle = css`
		flex: 1;
	`
	const sectionStyle = css`
		margin-top: 1rem;
		position: relative;
		flex: 1;
		height: fit-content;
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
	const triangleStyle = css`
		width: 20px;
		height: 20px;
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translate(-50%);
		background: ${color.pink};
		transform: rotate(134deg);
	`
	// FORM STYLE
	const inputStyle = css`
		margin: 1rem 0;
	`
	const textAreaStyle = css`
		height: 300px;
		margin: 1rem 0;
	`
	const submitBtnStyle = css`
		margin: 1rem 0;
	`
	return (
		<>
			<Article heading='contact us' backgroundImage='./assets/bg/footerbg.jpg' />
			<div css={wrapperStyle}>
				<form onSubmit={handleSubmit(onSubmit)} css={FormStyle}>
					<FieldRHF
						css={inputStyle}
						placeholder='Your Name'
						type='text'
						errorMessage={errors.name?.message}
						onChange={() => clearErrors()}
						{...register('name', {
							required: 'name is required',
						})}
					/>
					<FieldRHF
						css={inputStyle}
						placeholder='Your Email'
						type='email'
						errorMessage={errors.email?.message}
						onChange={() => clearErrors()}
						{...register('email', {
							required: 'email is required',
						})}
					/>
					<FieldRHF
						css={inputStyle}
						placeholder='Your Website'
						type='text'
						errorMessage={errors.website?.message}
						onChange={() => clearErrors()}
						{...register('website', {
							required: 'website is required',
						})}
					/>
					<TextAreaRHF
						css={textAreaStyle}
						placeholder='Your Comment'
						errorMessage={errors.comment?.message}
						onChange={() => clearErrors()}
						{...register('comment', {
							required: 'comment is required',
						})}
					/>
					{errors.nightClubApi && (
						<Message error>{errors.nightClubApi.message}</Message>
					)}
					{successMessage && <Message success>{successMessage}</Message>}
					<PrimaryButton
						type='submit'
						css={submitBtnStyle}
						onClick={() => clearErrors()}>
						submit
					</PrimaryButton>
				</form>
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
					<div css={triangleStyle} />
				</section>
			</div>
		</>
	)
}

export default Contact
