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
      apiKey: "AIzaSyAYLBodjY7WoOUF-EoUcOc-34v76HlXvfo",
      authDomain: "instagrin-eva.firebaseapp.com",
      databaseURL: "https://instagrin-eva.firebaseio.com",
      projectId: "instagrin-eva",
      storageBucket: "instagrin-eva.appspot.com",
      messagingSenderId: "825489741553",
      appId: "1:825489741553:web:4135d228f5cd7e80143b50"
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