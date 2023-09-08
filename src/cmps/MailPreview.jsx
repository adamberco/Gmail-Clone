import { Link } from 'react-router-dom'

export function MailPreview({ mail }) {
	return (
		<article className='mail-preview'>
			<span>
				<input type='checkbox' />
			</span>
			<span> {mail.isStarred ? '⭐' : '🌕'}</span>
			<Link to={`/mail/${mail.id}`}>
				<span>Subject: {mail.subject}</span>
				<span>Body: {mail.body}</span>
			</Link>
			<span>isRead? {mail.isRead + ''}</span>
		</article>
	)
}

// 		{ id: 'e101', subject: 'Miss you!', body: 'Would love to catch up sometime', isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null },
