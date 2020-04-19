import React, { useState, useContext, useEffect } from 'react'
import ContactContext from './../../context/contact/contactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const { addContact, clearCurrentContact,updateContact,setCurrentContact,current  }  = contactContext
        useEffect(() => {
                if(current !== null) {
                        SetContact(current)
                } else {
                    SetContact({
                        name:'',
                        email:'',
                        phone:'',
                        type:'personal',
                    })
                }
        },[contactContext, current])
    const [contact, SetContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal',
    })

    const { name , email, phone , type } = contact;

    const onChange = (e) => {
        SetContact({ ...contact, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
            clearCurrentContact();
        }
        SetContact({
            name:'',
            email:'',
            phone:'',
            type:'personal',
        })
    }

    const clearAll = () => {
        clearCurrentContact()
    }

    return (
       <form  onSubmit={onSubmit}>
           <h2 className="text-primary">{ current ? 'Edit Contact': 'Add contact'}</h2>
           <input type="text" placeholder="Name" 
                  name="name" value={name}
                  onChange={onChange} />

           <input type="email" placeholder="Email" 
                  name="email" value={email}
                  onChange={onChange} />

           <input type="text" placeholder="Phone" 
                  name="phone" value={phone}
                  onChange={onChange} />
         
        <h5>Contact Type </h5>
        <input type="radio" name="type"  value="personal" onChange={onChange}  checked={type === "personal"}/>
        Personal {' '} 

        <input type="radio" name="type"  value="professional" onChange={onChange}  checked={type === "professional"}/>
        Professional {' '}
            <div>
        <input type="submit" 
                value={ current ? 'update Contact': 'Add contact'} 
                className="btn  btn-primary btn-block"/>

            </div>
            { current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll} >Clear</button>
            </div> }
       </form>
    )
}


export default ContactForm;