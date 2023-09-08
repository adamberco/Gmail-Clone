import { MailPreview } from "./MailPreview";


export function MailList({ mails, onRemove }) {

    return (
        <ul className="mail-list">
            {
                mails.map(mail => <li key={mail.id}>
                    <MailPreview mail={mail} />
                    <div className="mail-actions">
                        <button onClick={() => onRemove(mail.id)}>X</button>
                    </div>
                </li>)
            }
        </ul>
    )
}
