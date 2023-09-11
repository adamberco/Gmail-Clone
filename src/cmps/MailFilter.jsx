import React, { useEffect, useState } from 'react'

export function MailFilter({ filterBy, onSetFilter }) {
	const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

	useEffect(() => {
		onSetFilter(filterByToEdit)
	}, [filterByToEdit])

	function handleChange(ev) {
		let { value, name: field, type } = ev.target
		value = type === 'number' ? +value : value
		setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
	}

	function onSubmitFilter(ev) {
		ev.preventDefault()
		onSetFilter(filterByToEdit)
	}

	// console.log(filterByToEdit)
	return (
		<form className='mail-filter' onSubmit={onSubmitFilter}>
			<label htmlFor='txt'>Text</label>
			<input type='text' id='txt' placeholder='Search by text' name='txt' onChange={handleChange} value={filterByToEdit.type} />
			<label htmlFor='read/unread'>Read/Unread</label>
			<select id='isRead' placeholder='Search by text' name='isRead' onChange={handleChange} value={filterByToEdit.type}>
                <option value="all">All</option>
                <option value="true">Read</option>
                <option value="false">Unread</option>
            </select>
		</form>
	)
}
