import React from 'react';
import { Redirect } from 'react-router-dom';

export function PublicRoute({ isLoggedIn, children }) {
  return !isLoggedIn ? children : <Redirect to="/" />;
}
