import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { RegistForm, RegistLabel } from './RegistrationForm.styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Input } from '@mui/material';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <RegistForm onSubmit={handleSubmit} autoComplete="off">
        <RegistLabel>
          Name
          <Input type="text" name="name" />{' '}
        </RegistLabel>
        <RegistLabel>
          Email
          <Input type="email" name="email" />{' '}
        </RegistLabel>
        <RegistLabel>
          Password
          <Input type="password" name="password" />{' '}
        </RegistLabel>

        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button type="submit">Create profile</Button>
        </ButtonGroup>
      </RegistForm>
    </div>
  );
};
