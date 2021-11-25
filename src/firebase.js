import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBNhJXi1dex3qbiqSN7DzhxMsFyzaE0A1E",
  authDomain: "group-project-cde19.firebaseapp.com",
  projectId: "group-project-cde19",
  storageBucket: "group-project-cde19.appspot.com",
  messagingSenderId: "1005714463649",
  appId: "1:1005714463649:web:093dbf699f107e119c89e0"
});

export const auth = getAuth(firebaseApp)