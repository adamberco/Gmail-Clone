import { Link } from 'react-router-dom'

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

	function byToDisplay() {
		return mail.id.length > 21 ? mail.id.slice(0, 21) + '.' : mail.id
	}

	return (
		<article className={'mail-preview ' + (!mail.isRead ? 'unread' : '')}>
			<p>
				<input type='checkbox' />
			</p>
			<p> {mail.isStarred ? '⭐' : '🌕'}</p>
				<p className='from'>{byToDisplay()}</p>
				<p className='content'>
					<p className='mail-subject'>{mail.subject + ' - '}</p>
					<p className='mail-body'>{mail.body}</p>
				</p>
			<p>{dateToDisplay()}</p>
		</article>
	)
}

// 		{ id: 'e101', subject: 'Miss you!', body: 'Would love to catch up sometime', isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null },
