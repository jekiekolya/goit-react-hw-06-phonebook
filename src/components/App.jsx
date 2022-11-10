import { Box } from './Box';
import { MainTitle, SecondaryTitle } from './App.styled';

import { ContactForm, ContactList, Filter } from '../components';

export function App() {
  return (
    <Box bg="mainBg" color="text" padding="30px">
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Box>
  );
}
