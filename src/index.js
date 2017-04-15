import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Signup, Login, Header,Welcome,Donor } from './components'
import './index.css';
import confStore from './store/store';

const store = confStore();


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCHuzHqxIlzxAooNZCtxTwAAGpdOLohh68",
  authDomain: "bloodbankapp-5f438.firebaseapp.com",
  databaseURL: "https://bloodbankapp-5f438.firebaseio.com",
  projectId: "bloodbankapp-5f438",
  storageBucket: "bloodbankapp-5f438.appspot.com",
  messagingSenderId: "966527552173"
};
firebase.initializeApp(config);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Header}/>
        <Route path="/welcome" component={Welcome} />
        <Route path="/donor" component={Donor} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
