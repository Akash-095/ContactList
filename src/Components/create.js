import React, { useContext, useState } from 'react'
import ContactContext from '../context/ContactContext'

const Create = ({ onClose }) => {
    const contact = useContext(ContactContext);
    const { addContact, getContact } = contact;



    const [cont, setCont] = useState({
        firstname: "",
        lastname: "",
        dob: new Date(),
        marital: "",
        Prof: "",
        gender: "",
        cnum: "",
        mail: "",
        lang: "",
        add: "",
        zip: "",
        city: "",
        state: "",
        country: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(cont.firstname, cont.cnum, cont.Prof, cont.city, cont.country, cont.dob.toISOString, cont.gender, cont.lang, cont.lastname, cont.mail, cont.marital, cont.state, cont.zip);
        onClose();
        getContact();

        setCont({
            firstname: "", lastname: "", dob: "", marital: "", Prof: "", gender: "", cnum: "", mail: "", lang: "", add: "", zip: "", city: "", state: "", country: ""
        })

    }
    const onChange = (e) => {

        setCont({ ...cont, [e.target.name]: e.target.value })

    }


    return (
        <div className='create-cont'>
            <div className="cr-nav">
                <div><h3>Create Customer</h3></div>
                <div><i onClick={onClose} class="fa-sharp fa-solid fa-x"></i></div>
            </div>
            <form>
                <div className="detail-cont">

                    <h3 className='item'>Basic Info</h3>

                    <div>
                        <label htmlFor='firstname' className='required'>First Name</label>
                        <input type='text' required onChange={onChange} name='firstname' id='firstname' />
                    </div>
                    <div>
                        <label htmlFor='lastname'>Last Name</label>
                        <input type='text' onChange={onChange} name='lastname' id='lastname' />
                    </div>
                    <div>
                        <label htmlFor='dob'>Date of Birth</label>
                        <input type='date' onChange={onChange} name='dob' id='dob' />
                    </div>
                    <div>
                        <label htmlFor='marital'>Marital Status</label>
                        <select name='marital'  >
                            <option value="">---Select Marital Status---</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                        </select>

                    </div>
                    <div>
                        <label htmlFor='prof'>Profession</label>
                        <select name='prof' >
                            <option value="">---Select Profession---</option>
                            <option value="Employed">Employed</option>
                            <option value="Unemployed">Unemployed</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='gender'>Gender</label>
                        <select name='gender' >
                            <option value="">---Select an Option---</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='cnum' className='required'>Contact Number</label>
                        <input type='tel' required onChange={onChange} name='cnum' />
                    </div>
                    <div>
                        <label htmlFor='mail'>Email Id</label>
                        <input type='email' onChange={onChange} name='mail' />
                    </div>
                    <div>
                        <label htmlFor='lang'>Native Language</label>
                        <input type='text' onChange={onChange} name='lang' />
                    </div>
                    <div className='item1'>
                        <label htmlFor='lang'>Full Address</label>
                        <input type='text' onChange={onChange} name='lang' />
                    </div>
                    <div>
                        <label htmlFor='zip'>Zip Code</label>
                        <input type='number' onChange={onChange} name='lang' />
                    </div>
                    <div>
                        <label htmlFor='city'>City</label>
                        <input type='text' onChange={onChange} name='city' />
                    </div>
                    <div>
                        <label htmlFor='state'>State</label>
                        <input type='text' onChange={onChange} name='state' />
                    </div>
                    <div>
                        <label htmlFor='country'>Country</label>
                        <input type='text' onChange={onChange} name='country' />
                    </div>
                </div>
                <div className='cr-foot'>
                    <div className='cancel' onClick={onClose}><i class="fa-light fa-x" style={{ color: "#54d3f2" }}></i>  Cancel</div>
                    <div className='save' onClick={handleSubmit}><i class="fa-solid fa-floppy-disk" style={{ color: "#ffffff" }} ></i>Save</div>
                </div>
            </form>
        </div >
    )
}

export default Create;