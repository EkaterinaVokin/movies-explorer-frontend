import React from 'react';
import { Redirect } from 'react-router-dom';

export function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Redirect to="/" />;
}