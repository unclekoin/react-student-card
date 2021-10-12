import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Form from './pages/form';
import Home from './pages/home';

function App() {

  return (
    <div className="app container d-flex align-items-center justify-content-center text-muted pt-5">
      <Switch>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect from="/react-student-card/" to="/" />
      </Switch>
    </div>
  );
}

export default App;
