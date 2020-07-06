import React from 'react';

import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/sign-in">Sign In</Link></li>
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/manage/links/create">Create a Link</Link></li>
            <li><Link to="/manage/links/edit">Edit a Link</Link></li>
            <li><Link to="/manage/links">Links</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sign-in">Sign In</Route>
          <Route path="/sign-up">Sign Up</Route>
          <Route path="/manage/links/create">Create a Link</Route>
          <Route path="/manage/links/edit">Edit a Link</Route>
          <Route path="/manage/links">Links</Route>
          <Route path="/">Home</Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
