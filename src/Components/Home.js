import React, { useState } from 'react';
import ContactTable from './contactTable';
import Create from './create';


const Home = () => {
    const [bool, setBool] = useState(false);
    const onClick = () => {
        setBool(true);
    }


    return (
        <div className='container'>
            <div className="nav">
                <h2>List of Customers</h2>
                <div className="createButton" onClick={onClick}>Create Contact</div>
            </div>
            <div style={!bool ? { display: 'none' } : {}}><Create onClose={() => setBool(false)} /></div>

            <div className="midBar">
                <div className="searchBar"><input type="search" placeholder='Search by name..' /></div>
                <div className='featureBar'>
                    <div className="filterBar">
                        <input type="radio" name='time' /> This Month
                        <input type="radio" name='time' /> This Week
                        <input type="radio" name='time' /> custom
                        Start Date <input type="date" />
                        End Date <input type="date" />
                        <div className="apply">Apply</div>
                    </div>
                    <div><i className="fa-solid fa-download fa-xl" style={{ color: "#f6f93e" }}></i></div>
                </div>
            </div>


            <div className="contactConatainer">
                <ContactTable />
            </div>


        </div>
    )
}

export default Home