
import React from 'react';
import { List, Text } from './ContactsList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';

export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
   
    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase().trim();
        return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter),);
    }
    const filteredContacts = getVisibleContacts();
    
    return (
        <List>
            {contacts.length === 0 && <Text>The contact list is empty</Text>}
            {contacts.length !== 0 &&
                filteredContacts.map(({ name, number, id }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}/>
            ))
            }
        </List>
    );
}

