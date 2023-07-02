import { Helmet } from 'react-helmet';
import { ProfileForm } from "../components/ProfileForm/ProfileForm"

const ProfileView = () => {
  return (
    <div>
      <Helmet>
        <title>Your`s profile</title>
      </Helmet>
      <ProfileForm/>
    </div>
  );
};

export default ProfileView;
