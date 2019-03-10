import { Component } from '@angular/core';
import {Formulaire} from '../services/formulaire';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyBhMVQLp8-w9bYuTR1JYq-13gQshNLpiMw",
      authDomain: "http-client-demo-13d42.firebaseapp.com",
      databaseURL: "https://http-client-demo-13d42.firebaseio.com",
      projectId: "http-client-demo-13d42",
      storageBucket: "http-client-demo-13d42.appspot.com",
      messagingSenderId: "481953907655"
    };
    firebase.initializeApp(config);
  }



}
