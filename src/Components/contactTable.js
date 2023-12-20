import React, { useContext, useEffect, useState } from 'react'
import Card from './card'
import ContactContext from '../context/ContactContext'





const ContactTable = () => {

    const a = useContext(ContactContext);
    const { getContact, contact } = a;
    const [nflag, setNflag] = useState(true);
    const sortName = () => {
        if (nflag) {
            contact.sort(function (a, b) {
                return a.firstname.localeCompare(b.firstname);
            })
            setNflag(false);
        }
        else {
            contact.sort(function (a, b) {
                return b.firstname.localeCompare(a.firstname);
            })
            setNflag(true);
        }
    }


    useEffect(() => {
        getContact();
    }, []);
    console.log(contact);

    return (
        <div>
            <div className="TableHead card-cont">
                <div onClick={sortName}>Name <i class="fa-solid fa-sort" style={{ color: "#000000" }}></i></div>
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