import { Typography } from '@mui/material';
import { GiVibratingSmartphone } from 'react-icons/gi';
import { Box } from '../components/App.styled';

const HomeView = () => {
  return (
    <main>
      <Box>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#3493c9',
            marginBottom: '25px',
            textAlign: 'center',
          }}
        >
          WELCOME,
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#3493c9',
            marginBottom: '25px',
            textAlign: 'center',
          }}
        >
          THERE YOU CAN CREATE YOUR OWN PHONEBOOK
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#3493c9',
            marginBottom: '25px',
            textAlign: 'center',
          }}
        >
          <GiVibratingSmartphone />
        </Typography>
      </Box>
    </main>
  );
};

export default HomeView;
