import { suratCollection } from "src/firebase";
import { ref, onUnmounted } from "vue";

export const getSurat = async (id) => {
  const surat = await suratCollection.doc(id).get();
  return surat.exists ? surat.data() : null;
};

// export const getCurrentId = async () => {
//   return suratCollection.doc("count");
//   // return suratCollection.doc("count");
//   // return id.data();
// };

export const createId = async (id) => {
  return suratCollection.doc("count").add(id);
};

export const createSurat = async (letter) => {
  // const docId = id.toString();
  return suratCollection.add(letter);
};

export const editSurat = async (id, Surat) => {
  return suratCollection.doc(id).update(Surat);
};

export const deleteSurat = async (id) => {
  return suratCollection.doc(id).delete();
};

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
