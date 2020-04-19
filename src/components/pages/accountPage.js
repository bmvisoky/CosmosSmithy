import React, {Component} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";


class LoginPage extends Component {

authApp() {

const firebaseConfig = {
  apiKey: "AIzaSyAQVplhnDDVCBFA6JwrjYOnJ39k5tj-Xbc",
  authDomain: "cs386cs.firebaseapp.com",
  databaseURL: "https://cs386cs.firebaseio.com",
  projectId: "cs386cs",
  storageBucket: "cs386cs.appspot.com",
  messagingSenderId: "885743696617",
  appId: "1:885743696617:web:f8764a0953664f34a38e78",
  measurementId: "G-BQ32YZFEBB"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Gather elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnSignOut = document.getElementById('btnSignOut');

const loginfunc = () => {
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);

  promise.catch(e => console.log(e.message));
}




//Real time authentication Auth listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
  console.log(firebaseUser);
  btnSignOut.classList.remove('hide');
} else {
  console.log('not currently logged in');
  btnSignOut.classList.add('hide');

}
});

const signOutFunc = () => {
  firebase.auth().signOut();

}



}
 signupfunc(){
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //sign up promise
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

}


render(){
  return (
    <body>

      <div class="container">
        <input type="email" id="txtEmail" placeholder="Email"/>
        <input type="password" id="txtPassword" placeholder="Password"/>
        <button id="btnLogin" class="btn ActionBttn">
          Log In
        </button>

        <button id="btnSignUp" class="btn OtherButton">
          Sign Up
        </button>
        <button id="btnSignOut" class="btn ActionBttn hide">
          Log Out
        </button>
      </div>

    <script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"></script>
     <script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-auth.js"></script>

      <script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-analytics.js"></script>

    </body>
  )
}}
export default LoginPage;
