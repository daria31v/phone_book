import PropTypes from 'prop-types';
import { WrapItem, Wrap, Item } from './ContactItems.styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { GiRotaryPhone } from 'react-icons/gi';
import { useState } from 'react';
import { existContacts } from '../../redux/contacts/operations';

export const ContactItems = ({ id, name: nameValue, number: numberValue }) => {
  
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);

  const handleDelete = () => {
    dispatch(deleteContact(id))
    alert("Contact deleted")
    return;    
  };
  
  const handleChangeMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      dispatch(existContacts({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };

  return (
    <Wrap>
      <WrapItem>
        <GiRotaryPhone /> 
        {isEdit ? (
          <Input type="text" value={name} name='name' onChange={handleChange} />
        ) : (
          <Item>{name}:</Item>
        )}
        {isEdit ? (
          <Input
            type="text"
            value={number}
            name='number'
            onChange={handleChange}
          />
        ) : (
          <Item>{number}</Item>
        )}
      </WrapItem>

      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleChangeMode}>
          {isEdit ? 'Save' : 'Edit'}
        </Button>
        </ButtonGroup>
      </Box>
    </Wrap>
  );
};

ContactItems.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
}.isRequired;
