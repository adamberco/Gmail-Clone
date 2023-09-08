import { useEffect, useState } from "react"

import { MailList } from "../cmps/MailList";

import { mailService } from "../services/mail.service";
import { MailFilter } from './../cmps/MailFilter';

export function MailIndex() {

    const [mails, setMails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        loadMails()
    }, [filterBy])

    function onSetFilter(fieldsToUpdate) {
        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, ...fieldsToUpdate }))
    }

    function onClearFilter() {
        setFilterBy(mailService.getDefaultFilter())
    }

    async function loadMails() {
        try {
            const mails = await mailService.query(filterBy)
            setMails(mails)
        } catch (err) {
            console.log('Had issues loading mails', err);
        }
    }

    async function onRemoveMail(mailId) {
        try {
            console.log('mailId', mailId);
            await mailService.remove(mailId)
            setMails((prevMails) => prevMails.filter(mail => mail.id !== mailId))
        } catch (err) {
            console.log('Had issues loading mails', err);
        }
    }

    console.log('filterBy from index', filterBy);
    if (!mails) return <div>Loading..</div>
    return <section className="mail-index">
        <h1>Welcome! this is our mails</h1>
        {/* <button onClick={onClearFilter}>Clear filter</button> */}
        <MailFilter onSetFilter={onSetFilter} filterBy={filterBy} />
        <MailList mails={mails} onRemove={onRemoveMail} />
    </section>

}
