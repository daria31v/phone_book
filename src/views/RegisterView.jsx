import { Helmet } from 'react-helmet';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';

const RegisterView = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
};

export default RegisterView;
