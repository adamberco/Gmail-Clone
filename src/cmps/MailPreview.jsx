import { Link, useNavigate } from 'react-router-dom'
import { Fragment } from 'react'

export function MailPreview({ mail }) {
	function dateToDisplay() {
		const currentDate = new Date()
		const mailDate = new Date(mail.sentAt)

		if (mailDate.getDate() === currentDate.getDate() && mailDate.getMonth() === currentDate.getMonth() && mailDate.getFullYear() === currentDate.getFullYear()) {
			// If the timestamp is from today, format as "HH:MM PM"
			const options = { hour: '2-digit', minute: '2-digit', hour12: true }
			return mailDate.toLocaleTimeString('en-US', options)
		} else {
			// If the timestamp is not from today, format as "Sep 7"
			const options = { month: 'short', day: 'numeric' }
			return mailDate.toLocaleDateString('en-US', options)
		}
	}

	const navigate = useNavigate()

	function handelClick({target}) {
		if (target.localName === 'span' || target.localName === 'input') return
		navigate(`/mail/${mail.id}`)

	}

	return (
		<article className={'mail-preview ' + (!mail.isRead ? 'unread' : '')} onClick={handelClick}>
			<span>
				<input type='checkbox' />
			</span>
			<span> {mail.isStarred ? '⭐' : '🌕'}</span>
			<p className='from'>{mail.id}</p>
			<div className='content'>
				<p className='mail-subject'>{mail.subject + ' - '}</p>
				<p className='mail-body'>{mail.body}</p>
			</div>
			<p>{dateToDisplay()}</p>
		</article>
	)
}