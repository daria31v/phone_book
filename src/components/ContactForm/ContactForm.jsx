import {Lab, FormAddContacts, ErrorText } from './ContactForm.styled';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Formik, Form,  ErrorMessage, Field} from 'formik';
import { nanoid } from 'nanoid';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/selectors';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';


const FormError = ({ name, number }) => {
  return (
      <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  
   );
};



export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);

  const submitForm = (values, { resetForm }) => {
       
    if (listContacts.some(item => item.name === values.name)) {
      alert(`Contact <${values.name}> has already been added ⛔`)
      return
    }

    if (!values.number.includes("+38")){
      alert(`Number <${values.number}> must start with +38!`)
      return
    }

    dispatch(addContact(values));
    alert(`Contact <${values.name}> was add ✅`)
    resetForm();
  
  };

  const nameInputId = nanoid();
  const telInputId = nanoid();

  return (
    <>
    <Box sx={{display: 'flex'}}>
    <Typography variant="h5" component="h3" sx={{color: '#3493c9', marginBottom: '25px', alignItems: 'center', justifyItems:'center'}}>
        Create new contact 
      </Typography>
      <Icon sx={{ color: 'lightblue', marginLeft: '10px' }}>add_circle</Icon>
      </Box>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={submitForm}
    >
      <Form>
        <FormAddContacts>
          <Lab htmlFor={nameInputId}>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameInputId}
            />
            <FormError name="name" component="span" />
          </Lab>

          <Lab htmlFor={telInputId}>
            Number
            <Field
              type="tel"
              name="number"
              placeholder="+380000000000"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={telInputId}
            />
            <FormError name="number" component="span" />
          </Lab>
        </FormAddContacts>

        <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{marginBottom: '40px'}}>
          <Button type="submit">Add contact</Button>
        </ButtonGroup>
      </Form>
    </Formik>
    </>
  );
};
