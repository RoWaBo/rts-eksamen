import { useState } from 'react'
import Article from '../components/Article'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { color, spacing } from '../style/styleVariables'
import { useForm } from 'react-hook-form'
import PrimaryButton from '../components/PrimaryButton'
import Message from '../components/Message'
import axios from 'axios'
import FieldRHF from '../components/FieldRHF'
import TextAreaRHF from '../components/TextAreaRHF'

const BookTable = () => {
	const [successMessage, setSuccessMessage] = useState()
	const [selectedTable, setSelectedTable] = useState()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors,
		setValue,
	} = useForm()

	// === TABLES
	const smallTable = {
		imgUrl: './assets/table/table_1.png',
		seats: 4,
	}
	const mediumTable = {
		imgUrl: './assets/table/table_2.png',
		seats: 6,
	}
	const largeTable = {
		imgUrl: './assets/table/table_3.png',
		seats: 8,
	}
	const tableRow = [smallTable, smallTable, mediumTable, smallTable, largeTable]
	const allTables = [...tableRow, ...tableRow, ...tableRow]
	// ===

	const handleTableClick = (tableID, tableSeats) => {
		setValue('table', tableID)
		setSelectedTable({ id: tableID, seats: tableSeats })
	}

	const formateDate = (date) => {
		const dateObj = new Date(date)
		const month = dateObj.getUTCMonth() + 1
		const day = dateObj.getUTCDate()
		const year = dateObj.getUTCFullYear()
		return year + '/' + month + '/' + day
	}

	const onSubmit = async (form) => {
		try {
			const newReservation = {
				name: form.name,
				email: form.email,
				table: form.table.toString(),
				guests: form.numberOfGuests,
				date: form.date,
				phone: form.contactNumber,
				comment: form.comment,
			}

			const { data: reservations } = await axios(
				`${process.env.REACT_APP_BASE_URL}/reservations`
			)

			const tableIsBooked = reservations.some(
				(reservation) =>
					formateDate(reservation.date) === formateDate(newReservation.date) &&
					reservation.table === newReservation.table
			)

			if (tableIsBooked)
				return setError('date', { message: 'the table is booked that date' })

			const res = await axios.post(
				`${process.env.REACT_APP_BASE_URL}/reservations`,
				newReservation
			)

			if (res.status === 201) setSuccessMessage(`Your reservation has been made!`)
		} catch {
			setError('nightClubApi', { message: 'Something went wrong' })
		}
	}

	// === STYLE ===
	const wrapperStyle = css`
		max-width: ${spacing.maxWidth};
		margin: 0 auto;
		padding: 4rem 0;
	`
	const tableListStyle = css`
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		margin-bottom: 3rem;
	`
	const tableItemStyle = css`
		position: relative;
		cursor: pointer;
		& > span {
			color: ${color.grey};
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	`
	const activeTableItemStyle = css`
		box-shadow: rgba(255, 255, 255, 0.04) 0px 1px 3px 0px,
			rgba(255, 255, 255, 0.35) 0px 0px 0px 1px;
	`
	// FORM STYLE
	const FormStyle = css`
		display: grid;
	`
	const inputStyle = css`
		margin: 1rem 0;
		position: relative;

		&::-webkit-calendar-picker-indicator {
			background: transparent;
			color: transparent;
			cursor: pointer;
			width: auto;
			height: auto;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			top: 0;
		}
	`
	const textAreaStyle = css`
		height: 300px;
		margin: 1rem 0;
	`
	const submitBtnStyle = css`
		margin: 1rem 0;
		justify-self: flex-end;
	`
	const flexContainerStyle = css`
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	`
	const inputContainerStyle = css`
		flex: 1;
	`
	const formHeadingStyle = css`
		color: ${color.grey};
		margin: 1rem 0;
		text-transform: uppercase;
		font-size: 22px;
	`

	return (
		<>
			<Article heading='book table' backgroundImage='./assets/bg/footerbg.jpg' />
			<div css={wrapperStyle}>
				<ul css={tableListStyle}>
					{allTables.map(({ imgUrl, seats }, i) => (
						<li
							key={i}
							css={[
								tableItemStyle,
								selectedTable?.id === i + 1 && activeTableItemStyle,
							]}
							onClick={() => handleTableClick(i + 1, seats)}>
							<img src={imgUrl} alt='table' />
							<span>{i + 1}</span>
						</li>
					))}
				</ul>
				<form onSubmit={handleSubmit(onSubmit)} css={FormStyle}>
					<h2 css={formHeadingStyle}>Book a table</h2>
					<div css={flexContainerStyle}>
						<div css={inputContainerStyle}>
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
								placeholder='Table Number - click on a table above to select it'
								type='number'
								errorMessage={errors.table?.message}
								onChange={() => clearErrors()}
								disabled
								{...register('table', {
									required: 'table is required',
									min: {
										value: 1,
										message: "table doesn't exist",
									},
									max: {
										value: allTables.length,
										message: "table doesn't exist",
									},
								})}
							/>
							<FieldRHF
								css={inputStyle}
								placeholder='Select Date'
								type='date'
								errorMessage={errors.date?.message}
								onChange={() => clearErrors()}
								{...register('date', {
									required: 'date is required',
								})}
							/>
						</div>
						<div css={inputContainerStyle}>
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
								placeholder='Number of Guests'
								type='number'
								min={1}
								max={8}
								errorMessage={errors.numberOfGuests?.message}
								onChange={() => clearErrors()}
								{...register('numberOfGuests', {
									required: 'number of guests is required',
									min: {
										value: 1,
										message: 'number of guests is required',
									},
									max: {
										value: selectedTable ? selectedTable : 8,
										message: `selected table can't seat that number of guests`,
									},
								})}
							/>
							<FieldRHF
								css={inputStyle}
								placeholder='Your Contact Number'
								type='tel'
								errorMessage={errors.contactNumber?.message}
								onChange={() => clearErrors()}
								{...register('contactNumber', {
									required: 'contact number is required',
								})}
							/>
						</div>
					</div>
					<TextAreaRHF
						css={textAreaStyle}
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
			</div>
		</>
	)
}

export default BookTable
