import React, { useState } from "react";
import ContactContext from "./ContactContext";

const ContactState = (props) => {
    const host = "http://localhost:8080"
    const initial = []
    const [contact, setContact] = useState(initial);

    //fetch all Contact
    const getContact = async () => {
        const response = await fetch(`${host}/api/contact/fetchall`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },

        });
        const json = await response.json();
        setContact(json);
    }

    //Add contact
    const addContact = async (firstname, cnum, mail) => {
        const response = await fetch(`${host}/api/contact/createcontact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname, cnum, mail })
        });
        const ans = await response.json();
        setContact(contact.concat(ans));
    }


    //Delete Contact
    const deleteContact = async (id) => {
        console.log("deleting " + id);
        const response = await fetch(`${host}/api/contact/deletecontact/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        const json = await response.json();
        console.log(json);


        const newNotes = contact.filter((note) => { return note._id !== id })
        setContact(newNotes)
    }

    //Edit Contact
    const editContact = async (id, firstname, cnum, mail) => {

        const response = await fetch(`${host}/api/contact/updatecontact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, cnum, mail })
        });
        const json = await response.json();
        console.log(json);

        let newContact = JSON.parse(JSON.stringify(contact))
        //logic to edit in client
        for (let index = 0; index < newContact.length; index++) {
            const element = newContact[index];
            if (element._id === id) {
                newContact[index].firstname = firstname;
                newContact[index].cnum = cnum;
                newContact[index].mail = mail;
                break;
            }
        }
        console.log(id, contact);
        setContact(newContact);
    }




    return (
        <ContactContext.Provider value={{ getContact, addContact, deleteContact, editContact, contact }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;