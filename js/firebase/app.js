  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQta3PV6UPxdJ3Rx5G3pL0ZSCBvtPJNQs",
    authDomain: "ded-form-project.firebaseapp.com",
    projectId: "ded-form-project",
    storageBucket: "ded-form-project.appspot.com",
    messagingSenderId: "151877009762",
    appId: "1:151877009762:web:372ea128e0fe82fa8a2c3b",
    measurementId: "G-P2CJN7W52H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;