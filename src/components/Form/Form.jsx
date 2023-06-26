import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormContacts, LabelForm, InputForm, BtnForm } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { addContact } from 'redux/ContactsSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeName = event => {
      setName(event.currentTarget.value);
  };
  
  const handleChangeNumber = event => {
      setNumber(event.currentTarget.value);
  }
  
  const handleAddContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
      dispatch(addContact(contact));
  };
   
  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }

    handleAddContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
          <FormContacts onSubmit={handleSubmit}>
            <LabelForm>Name
            <InputForm
              type="text"
              name="name"
              placeholder='Enter your name'
              value={name}
              onChange={handleChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
           </LabelForm>
           <LabelForm>Number
              <InputForm
                type="tel"
                name="number"
                placeholder='Enter your telephone number'
                value={number}
                onChange={handleChangeNumber}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
           </LabelForm>
          <BtnForm type='submit'>Add contact</BtnForm>
         </FormContacts>
        );
}



