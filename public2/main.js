import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi41PPIiWcMEzJZ0tB6yHQF1KtPKTRalQ",
  authDomain: "fir-profile-kapil.firebaseapp.com",
  projectId: "fir-profile-kapil",
  storageBucket: "fir-profile-kapil.appspot.com",
  messagingSenderId: "960649716392",
  appId: "1:960649716392:web:bfb3009e9be7aaaf5e589d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const getElemValues = (id) => {
//   return document.getElementById(id).value;
// };

//on signup click sending data to db
const onSignUpClick = async (e) => {
  e.preventDefault();
  let nameElem = document.getElementById("name").value;
  let surNameElem = document.getElementById("surName").value;
  let mobEmailElem = document.getElementById("mob-email").value;
  let passElem = document.getElementById("password").value;
  let dobElem = document.getElementById("date").value;
  let gendersElem = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  try {
    const docRef = await addDoc(collection(db, "users"), {
      firstName: nameElem,
      lastName: surNameElem,
      mobileEmail: mobEmailElem,
      dateOfBirth: dobElem,
      gender: gendersElem,
      password: passElem,
    });
    console.log("Document written with ID: " + docRef.id);
    document.getElementById("signUpForm").reset();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

let signUpFormElem = document.getElementById("signUpForm");
signUpFormElem.addEventListener("submit", onSignUpClick);
