import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/selector';
import { fetchContacts } from 'redux/operations';
import {Form} from '../Form/Form';
import {ContactsList} from '../ContactsList/ContactsList';
import {Filter} from '../Filter/Filter'
import { Container, Title, TitleContacts } from './App.styled';



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
  return (
    <Container>
        <Title>Phonebook</Title>
        <Form/>
        <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </Container>
  );

}