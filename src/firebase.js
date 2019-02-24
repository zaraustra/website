import firebase from "firebase"
const config = {
    apiKey: "AIzaSyB-MJTaeNlt2irWoSrkxLc4XlmwNI_82Rg",
    authDomain: "personal-website-161aa.firebaseapp.com",
    databaseURL: "https://personal-website-161aa.firebaseio.com",
    projectId: "personal-website-161aa",
    storageBucket: "personal-website-161aa.appspot.com",
    messagingSenderId: "197242332398"
}
firebase.initializeApp(config)
export default firebase