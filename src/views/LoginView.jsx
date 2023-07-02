import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';

const LoginView = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LoginView;
