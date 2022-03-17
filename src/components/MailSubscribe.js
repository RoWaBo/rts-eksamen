import { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'
import { useForm } from 'react-hook-form'
import PrimaryButton from './PrimaryButton'
import Message from './Message'
import { AnimatePresence } from 'framer-motion'
import axios from 'axios'

const MailSubscribe = () => {
	const [successMessage, setSuccessMessage] = useState()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm()

	const mailValidation = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/

	const onSubmit = async (form) => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_BASE_URL}/newsletters`,
				{
					email: form.email,
				}
			)
			if (res.status === 201)
				setSuccessMessage(`${res.data.email} is now subscribed!`)
		} catch {
			setError('nightClubApi', { message: 'Something went wrong' })
		}
	}

	// === STYLE ===
	const sectionStyle = css`
		width: 100%;
		background: ${color.black};
		padding: 4rem 0;

		& > header {
			color: ${color.grey};
			text-align: center;

			& > h2 {
				font-size: 21px;
				text-transform: uppercase;
				font-weight: 400;
				margin-bottom: 0.5rem;
			}
			& > h3 {
				font-size: 15.5px;
				font-weight: 400;

				& > span {
					color: ${color.pink};
				}
			}
		}

		& > form {
			max-width: 730px;
			margin: 2rem auto 0 auto;

			& > input {
				margin-right: 2rem;
				margin-bottom: 1rem;
				width: 514px;
				padding: 1rem;
				background: transparent;
				border-color: ${color.grey};
				border-width: 0 0 1px 0;
				border-style: solid;
				color: ${color.grey};

				&::placeholder {
					color: ${color.grey};
				}
			}
		}
	`
	return (
		<section css={sectionStyle}>
			<header>
				<h2>Want the latest night club news</h2>
				<h3>
					Subscribe to our newsletter and never miss an <span>Event</span>
				</h3>
			</header>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					placeholder='Enter Your Email'
					{...register('email', {
						required: 'Please enter your email',
						pattern: mailValidation,
					})}
					onChange={() => {
						clearErrors()
						setSuccessMessage(null)
					}}
				/>
				<PrimaryButton>subscribe</PrimaryButton>
				<AnimatePresence>
					{errors.email && errors.email.type === 'required' && (
						<Message error>{errors.email.message}</Message>
					)}
					{errors.email && errors.email.type === 'pattern' && (
						<Message error>Please write a valid email</Message>
					)}
					{errors.nightClubApi && (
						<Message error>{errors.nightClubApi.message}</Message>
					)}
					{successMessage && <Message success>{successMessage}</Message>}
				</AnimatePresence>
			</form>
		</section>
	)
}

export default MailSubscribe
