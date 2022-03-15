/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import { color, spacing } from '../style/styleVariables'

const Navigation = () => {
	const navItems = [
		{ href: '/', text: 'home' },
		{ href: '/blog', text: 'blog' },
		{ href: '/booktable', text: 'book table' },
		{ href: '/contact', text: 'contact us' },
	]

	const activeLinkStyleIf = (isActive) => {
		const activeLink = {
			color: color.pink,
			borderColor: color.pink,
			borderWidth: '0 0 1px 0',
			borderStyle: 'solid',
		}

		return isActive ? activeLink : null
	}

	// === STYLE ===
	const containerStyle = css`
		width: 100vw;
		background: ${color.black};
		border-color: ${color.pink};
		border-width: 1px 0;
		border-style: solid;
		position: sticky;
		overflow: hidden;

		.rightTriangle {
			width: 80px;
			height: 50px;
			position: absolute;
			bottom: -24px;
			right: -36px;
			background: ${color.pink};
			transform: rotate(134deg);
		}

		.leftTriangle {
			width: 80px;
			height: 50px;
			position: absolute;
			top: -24px;
			left: -36px;
			background: ${color.pink};
			transform: rotate(134deg);
		}
	`

	const navStyle = css`
		width: 100%;
		padding: 1.5rem 0;
		max-width: ${spacing.maxWidth};
		margin: 0 auto;
		display: flex;
		.logo {
			margin-right: auto;
		}
		.list {
			display: flex;
			align-items: center;

			& > * + * {
				margin-left: 3rem;
			}
		}
		.link {
			line-height: 1.1;
			font-weight: 500;
			text-transform: uppercase;
			color: ${color.white};
			padding: 12px 0;
			font-size: 20px;
		}
	`

	return (
		<div css={containerStyle}>
			<div className='leftTriangle' />
			<nav css={navStyle}>
				<img
					className='logo'
					src='./assets/Logo.png'
					alt='night club logo'
				/>
				<ul className='list'>
					{navItems.map(({ href, text }, i) => (
						<li key={i} className='listItem'>
							<NavLink
								to={href}
								className='link'
								style={({ isActive }) =>
									activeLinkStyleIf(isActive)
								}>
								{text}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<div className='rightTriangle' />
		</div>
	)
}

export default Navigation
