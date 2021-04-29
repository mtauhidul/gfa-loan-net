import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const admin = require('firebase-admin');

const serviceAccount = require('./gfa-loan-network-firebase-adminsdk-6de22-e1862440b0.json');

const config = {
    apiKey: 'AIzaSyCqkgqQ-9tfgQkJHQPUDpVzcsSfsP41hdA',
    authDomain: 'gfa-loan-network.firebaseapp.com',
    databaseURL: 'https://gfa-loan-network.firebaseapp.com',
    projectId: 'gfa-loan-network',
    storageBucket: 'gfa-loan-network.appspot.com',
    messagingSenderId: '123018289530',
    appId: '1:123018289530:web:ca3447493a2e03acc776c3',
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://gfa-loan-network.firebaseapp.com',
});

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
