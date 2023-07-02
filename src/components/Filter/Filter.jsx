import { Label } from './Filter.styled';
import { nanoid } from 'nanoid';
import { setFilter } from '../../redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectValueFilter } from '../../redux/selectors';
import PropTypes from 'prop-types';
import { Input } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectValueFilter);
  const idInput = nanoid();

  const changeFilter = e => {
    const value = e.currentTarget.value.toLowerCase();
    dispatch(setFilter(value));
    
  };

  return (
    <>
      <Label htmlFor="idInput">Find contacts by name</Label>
      <Input
        type="text"
        value={value}
        onChange={changeFilter}
        id={idInput}
        sx={{ width: '250px' }}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
}.isRequired;
