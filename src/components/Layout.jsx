import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBar />

      <Suspense
        fallback={
          <div>
            <h4>Loading.....🐌</h4>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
