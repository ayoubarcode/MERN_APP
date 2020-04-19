import React,{ useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import contactReducer from './contactReducer';
import ContactContext from './contactContext';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
} from './../types'



const ContactState = props => {
     const initialState = {
         contacts:[
            {
                id:1,
                name:"ayoub",
                email:"ayoub@gmail.com",
                phone:"0643412815",
                type:"professional",
            },
            {
                id:2,
                name:"chaymaa",
                email:"ayoub@gmail.com",
                phone:"0643412815",
                type:"personal",
            },
            {
                id:3,
                name:"Khalil",
                email:"ayoub@gmail.com",
                phone:"0643412815",
                type:"personal",
            },
        ],
         current:null, 
         filtered:null
     }


     const [state, dispatch] = useReducer(contactReducer, initialState);


     // Add contact 
     const addContact = contact => {
          contact.id =uuidv4()
          console.log(contact);
          
          dispatch({ type: ADD_CONTACT, payload: contact});
     }

     // Delete Contact
     const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload:id})
     }

     // Set Current Contact

     const setCurrentContact = contact => {
         dispatch({type: SET_CURRENT, payload: contact})
     }

     // clear Current Contact
     const clearCurrentContact = contact => {
        dispatch({type: CLEAR_CURRENT})
    }

     // Update Contact
     const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact});

    }

    // Filter Contact

    const filterContact = text => {
        dispatch({type:FILTER_CONTACT, payload:text})
    }

    // Clear Filter
    const clearFilterContacts = () => {
        dispatch({type:CLEAR_FILTER})
    }

     // Get all contacts

     

     // Clear Filter


     return <ContactContext.Provider
            value={{
                 contacts: state.contacts,
                 current: state.current,
                 filtered:state.filtered,
                 addContact,
                 deleteContact,
                 setCurrentContact,
                 clearCurrentContact,
                 updateContact,
                 filterContact,
                clearFilterContacts
                 
            }}>
         { props.children }
     </ContactContext.Provider>

}


export default ContactState;