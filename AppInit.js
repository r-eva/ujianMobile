import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import MainStack from './src/components/MainStack';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from './src/actions';

class AppInit extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBoY9TDk4acZ222kvOPunwz_jdeSJrP9-E",
      authDomain: "instagrin-jc-10-26475.firebaseapp.com",
      databaseURL: "https://instagrin-jc-10-26475.firebaseio.com",
      projectId: "instagrin-jc-10-26475",
      storageBucket: "instagrin-jc-10-26475.appspot.com",
      messagingSenderId: "474268220244",
      appId: "1:474268220244:web:9a568790eec751ae6ce6c1"
    };
    // Initialize Firebase
    //console.log('Isi Firebase Apps', firebase.apps)
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
      <MainStack />
    )
  }
}

export default connect(null, { notLoginYet, alreadyLogin })(AppInit);