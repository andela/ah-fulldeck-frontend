/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPassword';
import UpdatePassword from './components/auth/UpdatePassword';
import './App.scss';
import AllArticles from './components/articles/AllArticles';
import SingleArticle from './components/articles/SingleArticle';
import CreateArticle from './components/articles/CreateArticle';
import UserProfileComponent from './components/Users/UserProfileComponent';
import EditUserProfileComponent from './components/Users/EditUserProfileComponent';
import CommentsContainer from './components/comments/CommentsContainer';
import Toaster from './components/layout/Toaster';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/auth/PrivateRedirect';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Toaster />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/signup" exact component={SignUp} />

            <Route
              exact
              path="/profile/:username"
              component={UserProfileComponent}
            />
            <Route
              exact
              path="/profile/edit-profile/:username"
              component={EditUserProfileComponent}
            />
            <Route path="/" exact component={AllArticles} />
            <Route path="/createarticle" exact component={CreateArticle} />
            <Route exact path="/password-reset" component={ResetPassword} />
            <Route exact path="/password-update/:token" component={UpdatePassword} />
            <PrivateRoute path="/:slug/comments" component={CommentsContainer} />
            <Route path="/:slug" exact component={SingleArticle} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
