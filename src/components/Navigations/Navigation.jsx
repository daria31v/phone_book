import { Box } from '@mui/material';

import { useAuth } from '../../hooks/useAuth';
import { LinkPage } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        maxWidth: '600px',
        height: '100%',
        display: 'flex',
        justifyContent: 'spase-between',
      }}
    >
      <nav>
        <LinkPage to="/"> Home </LinkPage>

        {isLoggedIn && <LinkPage to="/contacts">Phonebook</LinkPage>}
      </nav>
    </Box>
  );
};
