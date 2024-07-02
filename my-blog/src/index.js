import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyTMPMAx63F82UkTElW9J93sE_-e28ceQ",

  authDomain: "blogs-c0059.firebaseapp.com",

  projectId: "blogs-c0059",

  storageBucket: "blogs-c0059.appspot.com",

  messagingSenderId: "714105464090",

  appId: "1:714105464090:web:bdd77710fa9e145fc0b8a3",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
