import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { mailService } from '../services/mail.service'
import { Link } from 'react-router-dom'

export function MailDetails() {
	const [mail, setMail] = useState(null)
	const params = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		loadMail()
	}, [params.mailId])

	async function loadMail() {
		try {
			const mail = await mailService.getById(params.mailId)
			setMail(mail)
		} catch (err) {
			navigate('/mail')
			console.log('Had issues loading mail', err)
		}
	}

	if (!mail) return <div>Loading..</div>
	return (
		<section className='mail-details'>
			<span>Subject: {mail.subject}</span>
			<span>Body: {mail.body}</span>
			<span>isRead? {mail.isRead + ''}</span>
			<span>isStarred? {mail.isStarred + ''}</span>
			<span>sentAt? {mail.sentAt + ''}</span>
			<span>removedAt? {mail.removedAt + ''}</span>
			<Link to='/mail'>Go back</Link>
			{/* <Link to='/mail/r1'>Next mail</Link> */}
		</section>
	)
}

// 		{ id: 'e101', subject: 'Miss you!', body: 'Would love to catch up sometime', isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null },
