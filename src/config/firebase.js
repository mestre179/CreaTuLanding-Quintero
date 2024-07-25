// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { productos } from "../data/asyncMock";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1DX4NGFqeo6XUPtd01ree8AVsS5nOWHA",
  authDomain: "coderhouseproject-6c268.firebaseapp.com",
  projectId: "coderhouseproject-6c268",
  storageBucket: "coderhouseproject-6c268.appspot.com",
  messagingSenderId: "1072528156338",
  appId: "1:1072528156338:web:b500cda4df07436669cbab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

/*productos.forEach((prod) => {
    addDoc(collection(db, 'productos'), prod)
        .then((data) => console.log(`el producto ${data.id} se subio correctamente`))
        .catch((error) => console.error(error))  
});*/