import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SingIn from './pages/SingIn';
import MainPage from './pages/MainPage';
import './styles/index.scss';

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Switch>
        <Route path='/sign-in' component={SingIn} />
        <Route path='/' component={MainPage} />
      </Switch>
    </>
  );
};

export default App;
