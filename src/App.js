import 'antd/dist/antd.css';
import './App.css';
import React from "react";
import ListUser from './User/ListUser';
import Details from './User/DetailUser';

import {Switch,
  Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <ListUser />
      </Route>
      <Route exact path="/user/:slug">
        <Details />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
