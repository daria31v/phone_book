import { useAuth } from '../../hooks/useAuth';
import { Navigation } from '../Navigations/Navigation';
import { AuthNav } from '../Navigations/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
