import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//config firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXWGbff01VBvZ9QjGso_Hyg7oyadIMEzY",
  authDomain: "proyecto-final-react-cod-c21ca.firebaseapp.com",
  projectId: "proyecto-final-react-cod-c21ca",
  storageBucket: "proyecto-final-react-cod-c21ca.appspot.com",
  messagingSenderId: "581980427535",
  appId: "1:581980427535:web:bb2f1821ba42bd8fa7da7a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
