import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCaMTyqdItAwULILxlXVn-bT4FO4Da6sP0',
	authDomain: 'react-cursos-5bc87.firebaseapp.com',
	databaseURL: 'https://react-cursos-5bc87.firebaseio.com',
	projectId: 'react-cursos-5bc87',
	storageBucket: 'react-cursos-5bc87.appspot.com',
	messagingSenderId: '227675094407',
	appId: '1:227675094407:web:001e2fb4de1fe0e09ae722',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//base de datos de firestore
const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
