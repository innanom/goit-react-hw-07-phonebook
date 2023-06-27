import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormContacts, LabelForm, InputForm, BtnForm } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { addContact } from 'redux/operations';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeName = event => {
      setName(event.currentTarget.value);
  };
  
  const handleChangePhone = event => {
      setPhone(event.currentTarget.value);
  }
  
  const handleAddContact = (name, phone) => {
    const contact = {
      id: nanoid(),
      name,
      phone,
    };
      dispatch(addContact(contact));
  };
   
  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }

    handleAddContact(name, phone);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
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
           <LabelForm>Phone
              <InputForm
                type="tel"
                name="phone"
                placeholder='Enter your telephone phone'
                value={phone}
                onChange={handleChangePhone}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
           </LabelForm>
          <BtnForm type='submit'>Add contact</BtnForm>
         </FormContacts>
        );
}



