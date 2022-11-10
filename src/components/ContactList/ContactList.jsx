import {
  ContactsList,
  ContactItem,
  Icon,
  NameContact,
} from './ContactList.styled';

import Button from '../Button';

import { Box } from '../Box';
import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const deleteContactReducer = contactId => {
    dispatch(deleteContact(contactId));
  };

  // const triggerToSetLocalStorage = useRef(true);

  // useMemo(() => {
  //   if (triggerToSetLocalStorage.current) {
  //     triggerToSetLocalStorage.current = false;
  //     return;
  //   }

  //   localStorage.setItem('listContacts', JSON.stringify(contacts));
  // }, [contacts]);

  const filterContacts = contacts.filter(item => {
    return item.name.toLocaleLowerCase().includes(filterValue);
  });

  return (
    <Box>
      <ContactsList>
        {filterContacts.map(contact => {
          return (
            <ContactItem key={contact.id}>
              <Icon />
              <NameContact>
                {contact.name}: {contact.number}
              </NameContact>
              <Button
                type="button"
                name="Delete"
                onClick={() => deleteContactReducer(contact.id)}
              />
            </ContactItem>
          );
        })}
      </ContactsList>
    </Box>
  );
}

export default ContactList;
