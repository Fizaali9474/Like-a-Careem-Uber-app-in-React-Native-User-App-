

import { initializeApp } from "firebase/app";

import {getFirestore, addDoc , collection ,onSnapshot
,orderBy,query,getDocs} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC5z5ZUkG0Wfd-nPfKOwlWnGT_33kP7XI",
  authDomain: "user-rides-f7735.firebaseapp.com",
  databaseURL: "https://user-rides-f7735-default-rtdb.firebaseio.com",
  projectId: "user-rides-f7735",
  storageBucket: "user-rides-f7735.appspot.com",
  messagingSenderId: "341504489290",
  appId: "1:341504489290:web:0ea3cffa7f4a688466b3b3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
 
export async function rideRequest (rideRequest){
    await addDoc(collection(db, "rides"), rideRequest);
}

export async function register(userInfo) {
  
  const { email, password, username, age } = userInfo;
  await createUserWithEmailAndPassword(auth, email, password);

  await addDoc(collection(db, "users"), {
    username,
    age,
    email,
  });

  alert("successfully registered");
} 

export async function login(userInfo) {
  
  const { email, password } = userInfo;
   await signInWithEmailAndPassword(auth, email, password);

  alert("Login successful");
}

export async function getingRides() {
  const querySnapshot = await getDocs(collection(db, "rides"));
  const rides = [];
  querySnapshot.forEach((doc) => {
    rides.push(doc.data());
    // console.log(rides , 'rides in FB')
  });
  return rides;
}

export {
collection,
addDoc,
 getFirestore,
 onSnapshot,
 orderBy,
 query,
 getDocs
}