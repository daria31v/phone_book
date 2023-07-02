import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import { Label, Form } from './LoginForm.styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Input } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>

        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button type="submit">Log In</Button>
        </ButtonGroup>
      </Form>
    </>
  );
};
