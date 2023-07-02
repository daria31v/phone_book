import { LinkPage } from './Navigation.styled';

export const AuthNav = () => {
  return (
    
    <div>
      <LinkPage to="/register">
      Registration
      </LinkPage>
      <LinkPage to="/login">
      Login
      </LinkPage>
    </div>
  );
};
