import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const mailService = {
	query,
	save,
	remove,
	getById,
	createMail,
	getDefaultFilter,
}

const STORAGE_KEY = 'mails'

async function query(filterBy) {
	let mails = await storageService.query(STORAGE_KEY)
	if (!mails || !mails.length) _createMails()

	if (filterBy) {
		let { status, txt = '', isRead, isStarred } = filterBy
		isRead = isRead === 'true' ? true : isRead === 'false' ? false : isRead
		mails = mails.filter((mail) => (mail.subject.toLowerCase().includes(txt.toLowerCase()) || mail.body.toLowerCase().includes(txt.toLowerCase()))
		&& (isRead === 'all' || mail.isRead === isRead ))
	}

	return mails
}

function getById(id) {
	return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
	return storageService.remove(STORAGE_KEY, id)
}

function save(mailToSave) {
	if (mailToSave.id) {
		return storageService.put(STORAGE_KEY, mailToSave)
	} else {
		mailToSave.isOn = false
		return storageService.post(STORAGE_KEY, mailToSave)
	}
}

function createMail(model = '', type = '', batteryStatus = 100) {
	return {
		model,
		batteryStatus,
		type,
	}
}

function getDefaultFilter() {
	return {
		status: '', //'inbox/sent/star/trash'
		txt: '', // no need to support complex text search
		isRead: 'all', //true/false/all
		isStarred: null,
	}
}

function _createMails() {
	const mails = [
		{ id: 'e101e101e101e101e101e101e101e101e101', subject: 'Miss you! Meeting Tomorrow Meeting Tomorrow Meeting Tomorrow Meeting Tomorrow', body: 'Would love to catch up sometime? Would love to catch up sometime? Would love to catch up sometime? Would love to catch up sometime?Would love to catch up sometime?', isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null },
		{ id: 'e102', subject: 'Meeting Tomorrow Meeting Tomorrow Meeting Tomorrow Meeting Tomorrow', body: "Don't forget our meeting tomorrow at 2 PM.", isRead: false, isStarred: true, sentAt: 1694179623863, removedAt: null },
		{ id: 'e103', subject: 'Happy Birthday!', body: 'Wishing you a fantastic birthday filled with joy and laughter.', isRead: false, isStarred: false, sentAt: 1694179621500, removedAt: null },
		{ id: 'e104', subject: 'Job Opportunity', body: 'Exciting job opportunity at our company. Are you interested?', isRead: true, isStarred: true, sentAt: 1626547200000, removedAt: null },
		{ id: 'e105', subject: 'Vacation Plans', body: "Let's plan our vacation for this summer. Any suggestions?", isRead: false, isStarred: false, sentAt: 1692105600000, removedAt: null },
		{ id: 'e106', subject: 'Important Update', body: 'Please review the attached document for an important update.', isRead: true, isStarred: false, sentAt: 1700000000000, removedAt: null },
		{ id: 'e107', subject: 'Dinner Invitation', body: 'Join us for dinner this Friday at 7 PM at your favorite restaurant.', isRead: false, isStarred: true, sentAt: 1714560000000, removedAt: null },
		{ id: 'e108', subject: 'Project Deadline', body: "Reminder: The project deadline is approaching. Let's finish strong!", isRead: false, isStarred: false, sentAt: 1746112000000, removedAt: null },
		{ id: 'e109', subject: 'Thank You', body: 'Just wanted to say thank you for your help and support.', isRead: true, isStarred: false, sentAt: 1787664000000, removedAt: null },
		{ id: 'e110', subject: 'Weekend Getaway', body: "Let's plan a weekend getaway to unwind and relax.", isRead: false, isStarred: true, sentAt: 1819216000000, removedAt: null },
	]

	utilService.saveToStorage(STORAGE_KEY, mails)
}
