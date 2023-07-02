import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editAvatar } from 'redux/auth/auth-operations';

const EditProfileView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const onUpload = event => {
    setFile(event.target.files[0]);
  };

  const sendFile = () => {
    dispatch(editAvatar(file));
    navigate('/profile');
  };
  return (
    <>
      <input type="file" onChange={onUpload} />
      <button onClick={sendFile}>
        Upload
      </button>
    </>
  );
};

export default EditProfileView;
