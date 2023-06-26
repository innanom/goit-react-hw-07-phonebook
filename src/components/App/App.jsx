// import React, { useEffect, useState } from 'react';
'use client'
import {Form} from '../Form/Form';
import {ContactsList} from '../ContactsList/ContactsList';
import {Filter} from '../Filter/Filter'
import { Container, Title, TitleContacts } from './App.styled';


export const App = () => {
 
  return (
      <Container>
        <Title>Phonebook</Title>
        <Form/>
        <TitleContacts>Contacts</TitleContacts>
        <Filter/>
        <ContactsList />
      </Container>
  );

}