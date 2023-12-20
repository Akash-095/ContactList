import React, { useContext } from 'react';
import ContactContext from '../context/ContactContext';

const Card = (props) => {
    const contact = useContext(ContactContext);
    const { deleteContact } = contact;

    const { firstname, cnum, mail, dob } = props.state;

    return (
        <div className='card-cont'>
            <div>{firstname}</div>
            <div>{cnum}</div>
            <div>{mail ? mail : "-"}</div>
            <div>{dob ? dob : "-"}</div>
            <div className='ed'>
                <div><i className="fa-regular fa-pen-to-square fa-xl" style={{ color: '#1764e8' }}></i></div>
                <div><i className="fa-regular fa-trash-can fa-xl" style={{ color: "#f51924" }} onClick={() => { deleteContact(props.state._id) }}></i></div>
            </div>
        </div>
    )
}

export default Card