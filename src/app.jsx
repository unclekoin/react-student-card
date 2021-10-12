import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './pages/form';
import Home from './pages/home';

function App() {

  return (
    <div className="app container d-flex align-items-center justify-content-center text-muted pt-5">
      <Switch>
        <Route path="/react-student-card/form">
          <Form />
        </Route>
        <Route path="/react-student-card/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
