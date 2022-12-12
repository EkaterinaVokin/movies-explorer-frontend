import React, { useState } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Main } from '../Main/Main.js';
import { Footer } from '../Footer/Footer.js';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute.js';
import { PublicRoute } from '../PublicRoute/PublicRoute.js';
import { Register } from '../Register/Register.js';
import { Login } from '../Login/Login.js';
import { Header } from '../Header/Header.js';
import { Movies } from '../Movies/Movies.js';
import { SavedMovies } from '../SavedMovies/SavedMovies.js';
import { Profile } from '../Profile/Profile.js';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip.js';
import './App.css';

function App() {

  const { pathname } = useLocation();

  const history = useHistory();

  const [stateIsLogin, setStateIsLogin] = useState({ isLoggedIn: false });
  const [isError, setIsError] = useState(false); // пер.состония ошибки тултипа
  const [hasInfoTooltip, setHasInfoTooltip] = useState(false); // пер.состояния видимости тултипа

  function closePopup() {
    setHasInfoTooltip(false)
  }

  function handleLogout() {
    history.push('/');
  }

  return (
    <>
    {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile" ? <Header isLoggedIn={stateIsLogin.isLoggedIn}/> : ''}
    <Switch>
      <Route exact path="/">
        <Main />
        <Footer />
      </Route>  
      <PublicRoute path="/signup" isLoggedIn={stateIsLogin.isLoggedIn}>
        <Register />
      </PublicRoute>  
      <PublicRoute path="/signin" isLoggedIn={stateIsLogin.isLoggedIn}>
        <Login />
      </PublicRoute>  
      <ProtectedRoute path="/movies" isLoggedIn={stateIsLogin.isLoggedIn}>
        <Movies />
        <Footer />
      </ProtectedRoute>
      <ProtectedRoute path="/saved-movies" isLoggedIn={stateIsLogin.isLoggedIn}>
        <SavedMovies />
        <Footer />
      </ProtectedRoute>
      <ProtectedRoute path="/profile" isLoggedIn={stateIsLogin.isLoggedIn}>
        <Profile onClick={handleLogout}/>
      </ProtectedRoute>
      <Route path='*'>
        <PageNotFound/>
      </Route>
    </Switch>
    <InfoTooltip
      // isOpen={openPopup} 
      text={isError} 
      onClose={closePopup} 
    />

    </>
  )
}


export default App;