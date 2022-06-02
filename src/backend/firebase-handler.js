import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import{ getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBVL8TCSYw5SPzwrwWDhHKQ8oc_urRMPvg",
  authDomain: "new-sample-react.firebaseapp.com",
  databaseURL: "https://new-sample-react-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "new-sample-react",
  storageBucket: "new-sample-react.appspot.com",
  messagingSenderId: "490581952010",
  appId: "1:490581952010:web:f18fb64c5541e52c2c01f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDatabase= getDatabase(app);
export const firebaseAuth = getAuth(app);
