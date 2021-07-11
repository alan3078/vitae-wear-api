import { debug } from 'debug';
import firebase from 'firebase';
import config from './config';

const admin = firebase.initializeApp(config.firebaseConfig);
const db = admin.firestore()

export default db 
