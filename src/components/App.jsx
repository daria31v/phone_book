import { Box } from './App.styled';
import { Layout } from './Layout';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/auth-operations';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const ProfileView = lazy(() => import('../views/ProfileView'));
const NotFoundView = lazy(() => import('../views/NotFoundView'));
const EditProfileView = lazy(() => import('../views/EditProfileView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginView />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/" component={<ContactsView />} />
            }
          />

          <Route
            path="profile"
            element={
              <PrivateRoute redirectTo="/" component={<ProfileView />} />
            }
          />
          <Route
            path="profile/edit"
            element={
              <PrivateRoute redirectTo="/" component={<EditProfileView />} />
            }
          />

          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Box>
  );
};
