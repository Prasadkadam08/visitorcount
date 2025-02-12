// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getFirestore, doc, getDoc, setDoc, updateDoc 
} from "firebase/firestore"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoSPWRdNH9GnaAiFaG7sCB2o1I8bFpFfY",
  authDomain: "visitor-35ad1.firebaseapp.com",
  projectId: "visitor-35ad1",
  storageBucket: "visitor-35ad1.appspot.com", // Corrected
  messagingSenderId: "816178306627",
  appId: "1:816178306627:web:aaf224a06bff7c7671bef6",
  measurementId: "G-JJGD309QVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

// Function to add data to Firestore
const addUser = async () => {
  try {
    await setDoc(doc(db, "users", "user1"), {
      name: "John Doe",
      age: 25,
    });
    console.log("User added successfully!");
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

// Function to get data from Firestore
const getUser = async () => {
  try {
    const docRef = doc(db, "users", "user1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("User Data:", docSnap.data());
    } else {
      console.log("No such user!");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

// Run Firestore operations
addUser();
getUser();

// Export Firestore-related functions
export { db, doc, getDoc, setDoc, updateDoc };
