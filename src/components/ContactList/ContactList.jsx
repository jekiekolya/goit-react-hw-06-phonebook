import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import {
  ContactsList,
  ContactItem,
  Icon,
  NameContact,
} from './ContactList.styled';

import Button from '../Button';

import { Box } from '../Box';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const deleteContactReducer = contactId => {
    dispatch(deleteContact(contactId));
  };

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
