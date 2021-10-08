import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyCQe_YdLchAAgyOM5_1dH-vtToJPmGCZsY",
    authDomain: "prodemo-618f2.firebaseapp.com",
    databaseURL: "https://prodemo-618f2-default-rtdb.firebaseio.com",
    projectId: "prodemo-618f2",
    storageBucket: "prodemo-618f2.appspot.com",
    messagingSenderId: "52295299032",
    appId: "1:52295299032:web:80543cc91db7802ae08cad"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
