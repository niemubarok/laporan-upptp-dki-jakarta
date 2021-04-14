import { suratCollection } from "src/firebase";
import { ref, onUnmounted } from "vue";

export const getSurat = async (id) => {
  await suratCollection.doc(id).get();
  // console.log(surat.data());
  // return surat.exists ? surat.data() : null;
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

export const useLoadSurat = (id) => {
  console.log(id);
  // const surat = ref([]);
  // const close = suratCollection.doc(id).onSnapshot((snapshot) => {
  //   surat.value = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  // });
  // console.log(surat);
  // onUnmounted(close);
  // return surat;
};

export const detailSurat = (id) => {
  const surat = ref([]);
  const getSurat = suratCollection
    .doc(id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc);
      });
    });
  onUnmounted(getSurat);
};
