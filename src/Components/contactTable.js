import React, { useContext, useEffect } from 'react'
import Card from './card'
import ContactContext from '../context/ContactContext'





const ContactTable = () => {

    const a = useContext(ContactContext);
    const { getContact, contact } = a;
    useEffect(() => {
        getContact();

    }, []);
    console.log(contact);

    return (
        <div>
            <div className="TableHead card-cont">
                <div>Name </div>
                <div>Phone NO.</div>
                <div>Email</div>
                <div>Creation Date</div>
                <div></div>
            </div>
            <div className="TableData">
                {contact.map((state) => {
                    return <Card key={state._id} state={state} />
                })}

            </div>
        </div>
    )
}

export default ContactTable