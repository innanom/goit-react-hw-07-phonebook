import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, TextItem, BtnDelete } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
 
export const ContactItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();
    const onDeleteContact = () => {
        dispatch(deleteContact(id));
    };

    return (
        <ListItem key={id}>
            <TextItem>{name}: {phone}</TextItem>
            <BtnDelete type='button' onClick={(onDeleteContact)}>Delete</BtnDelete>
        </ListItem>
    );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
