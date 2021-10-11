import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './pages/form';
import Home from './pages/home';

function App() {

  return (
    <div className="app container d-flex justify-content-center align-items-center text-muted">
      <Switch>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
