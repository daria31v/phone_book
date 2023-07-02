import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../redux/auth/auth-operations';
import { useAuth } from '../../hooks/useAuth';
// import { avatar } from './dafaultAvatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  return (
    <Box sx={{ display: 'flex', justifyItems: 'end', alignItems: 'center' }}>
      <img src={"http://localhost:3003/"+ user.avatarURL} alt="" width="45px" />
      <Typography component={'span'}
        sx={{ width: '100%', marginLeft: '10px', marginRight: '10px' }}
      >
        <span>
         Welcome, {user.name}{' '}
        </span>      
      </Typography>
      <Tooltip title="profile">
        <Link to="/profile" style={{ marginRight: '5px'}}>Profile</Link>
      </Tooltip>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button type="button" onClick={() => dispatch(logOut())}>
          LogOut
        </Button>
      </ButtonGroup>
    </Box>
  );
};

UserMenu.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
}.isRequired;
