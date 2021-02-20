import React, { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Spinner } from '../components/Loader/Loader';

interface ProtectedRouteProps extends RouteProps {
  component: ComponentType<object>;
}

export const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Spinner />,
    })}
    {...args}
  />
);
