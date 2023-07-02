import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectError } from '../redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchAllContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/selectors';
import { Typography } from '@mui/material';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Phonebook</title>
      </Helmet>
      <ContactForm />

      <Typography
        variant="h5"
        component="h3"
        sx={{
          color: '#3493c9',
          marginBottom: '25px',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        Your Phonebook :
      </Typography>

      <Filter />
      {isLoading && !error && <p>Please waite the request in progress...🐌</p>}
      {error && !isLoading && <p>Something went wrong... ♫ ♫ ♫ </p>}
      <ContactList />
    </>
  );
};

export default ContactsView;
