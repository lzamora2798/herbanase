
import firebase from 'firebase'
// Your web app's Firebase configuration
const Config = {
    apiKey: "AIzaSyCGi23XBYXEzSR60HotMWbz7-UDeYuQq1c",
    authDomain: "productos-2ad3e.firebaseapp.com",
    databaseURL: "https://productos-2ad3e.firebaseio.com",
    projectId: "productos-2ad3e",
    storageBucket: "productos-2ad3e.appspot.com",
    messagingSenderId: "689978785296",
    appId: "1:689978785296:web:19f1dc4fbf4836b143d495",
    measurementId: "G-KGKYP4EFMD"
};
// Initialize Firebase
const fire = firebase.initializeApp(Config);
export default fire;