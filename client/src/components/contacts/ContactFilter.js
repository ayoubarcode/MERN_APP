import React,{ useContext, useRef, useEffect } from 'react'
import ContactContext from './../../context/contact/contactContext';

export const ContactFilter = () => {
    const contactContext = useContext(ContactContext)
    const { filterContact,clearFilterContacts,filtered } = contactContext
    const text = useRef('');

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    }, [])

    const onChange = (e) => {
        e.preventDefault()
        if(text.current.value !== '') {
            filterContact(text.current.value)
        } else {
            clearFilterContacts()
        }
    }
    return (
        <form >
            <input ref={text} type="text" name="" 
                    id="" placeholder="Filter contacts"
                    onChange={onChange}
                    />
        </form>
    )
}

export default ContactFilter;
