import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { selectUser } from '../../redux/auth/auth-selectors';

export const ProfileForm = () => {
  const user = useSelector(selectUser);
  
  return (
    <Box sx={{ display: 'block' }}>
      <h2> Welcome {user.name}</h2>
      <img
        src={"http://localhost:3003/"+ user.avatarURL}
        alt="avatar"
        width="45px"
        style={{ marginTop: '15px', marginBottom: '15px' }}
      />
      <p>Email: {user.email}</p>
      <p style={{ marginBottom: '15px' }}> Subscription: {user.subscription}</p>
      <Link to="/profile/edit"> Edit profile </Link>
    </Box>
  );
};

ProfileForm.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
}.isRequired;
