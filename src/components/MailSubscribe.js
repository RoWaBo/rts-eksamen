import { useEffect, useState } from 'react'
import Article from './Article'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color } from '../style/styleVariables'
import { useForm } from 'react-hook-form'
import PrimaryButton from './PrimaryButton'
import Message from './Message'
import { AnimatePresence } from 'framer-motion'

const MailSubscribe = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm()
	const mailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const onSubmit = (data) => console.log(data)

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
					type='mail'
					placeholder='Enter Your Email'
					{...register('mail', {
						required: 'Please enter your mail',
						pattern: mailValidation,
					})}
					onChange={() => clearErrors()}
				/>
				<PrimaryButton>subscribe</PrimaryButton>
				<AnimatePresence>
					{errors.mail && errors.mail.type === 'required' && (
						<Message error>{errors.mail.message}</Message>
					)}
					{errors.mail && errors.mail.type === 'pattern' && (
						<Message error>Please write a valid email</Message>
					)}
				</AnimatePresence>
			</form>
		</section>
	)
}

export default MailSubscribe
