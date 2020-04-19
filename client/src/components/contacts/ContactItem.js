import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from './../../context/contact/contactContext'


const ContactItem = ({ contact,OnDelete }) => {
    const contactContext = useContext(ContactContext);
    
    const { deleteContact,setCurrentContact, clearCurrentContact} = contactContext;

    const { id, name,email, phone, type } = contact;


    // Delete ITEM form UI
    const deletecontact = () => {
        deleteContact(id);  
        clearCurrentContact();
    }


    const upper_case = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  
    

    
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name} { ' '} <span  style={{ float: "right"}} className={
                    'badge ' + 
                    (type === "professional" ? 'badge-success' : 'badge-primary')}>
                        {upper_case(type)}
                </span>
            </h3>

            <ul className="list">
                    { email && ( <li>
                        <i className="fas fa-envelope-open"> { email }</i>
                    </li>)}

                    { phone && ( <li>
                        <i className="fas fa-phone"> { phone }</i>
                    </li>)}
 
                    { email && ( <li>
                        <i className="fas fa-envelope-open"> { email }</i>
                    </li>)}
            </ul>

            <p>
                <button className="btn btn-dark btn-sm" onClick={ () => setCurrentContact(contact)}> Edit</button>
                <button className="btn btn-danger btn-sm" onClick={deletecontact}> Delete</button>
            </p>
        </div>
    )
}


ContactItem.propTypes = {
    contact:PropTypes.object.isRequired,
}

export default ContactItem;
