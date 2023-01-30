// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
class Fire {
  constructor() {
    this.init();
  }
  init = () => {
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: "AIzaSyBvq9QJa0kLoj-Gkl5r8PE-Op3zP2oIYgw",
        authDomain: "ngochqhihi.firebaseapp.com",
        projectId: "ngochqhihi",
        storageBucket: "ngochqhihi.appspot.com",
        messagingSenderId: "953315144608",
        appId: "1:953315144608:web:949c73dafdd7bc2199aac5",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
    }
  };
  uploadImage = async (file: any) => {
    console.log(file);
    
    const storage = getStorage();
    const storageRef = ref(storage, `/images/${file.name}`)
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };
}
export default Fire
