import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateEdit from './pages/create-edit';
import Home from './pages/home';

function App() {

  return (
    <div className="container">
      <Switch>
        <Route path="/create-edit">
          <CreateEdit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
