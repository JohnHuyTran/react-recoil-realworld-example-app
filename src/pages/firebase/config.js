import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQamj74m_1fTK-KbFc98RRGYaLmdCCSYM',
  authDomain: 'ad-control-5911e.firebaseapp.com',
  projectId: 'ad-control-5911e',
  storageBucket: 'ad-control-5911e.appspot.com',
  messagingSenderId: '698590572653',
  appId: '1:698590572653:web:7388819fb6001b37f58f64',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
