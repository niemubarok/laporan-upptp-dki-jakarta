import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
  // apikey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,

  apikey: "AIzaSyAcRdcDP_yye1kDjpPSQonwEMD4zrf9bIk",
  authDomain: "laporan-upptp.firebaseapp.com",
  projectId: "laporan-upptp",
  storageBucket: "laporan-upptp.appspot.com",
  messagingSenderId: "354290903611",
  appId: "1:354290903611:web:bec8af5b9e7dbe6dbe4a1e",
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();

const suratCollection = db.collection("surat");
const laporanCollection = db.collection("laporan");

// const test = db.doc("surat/DrANOcjxGoMEB3Pw2ERz");

export const useLoadSurat = () => {
  const surat = ref([]);
  const close = suratCollection.onSnapshot((snapshot) => {
    surat.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  // console.log(doc);
  onUnmounted(close);
  return surat;
};

export { db, suratCollection, laporanCollection };
