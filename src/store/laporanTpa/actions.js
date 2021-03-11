export const tambahLaporan = ({ commit }, payload) => {
  commit("tambahLaporan", payload);
};

export const getLetters = ({ commit }) => {
  commit("getLetters");
};

// export const getAll = async () => {
//   return lettersCollection.get();
// };

// export const searchLetters = async (key, string) => {
//   return lettersCollection.where(key, "array-contains", string);
// };

// export const getLetters = async (id) => {
//   const letters = await lettersCollection.doc(id).get();
//   return letters.exists ? letters.data() : null;
// };

// export const createLetters = async (letter) => {
//   return lettersCollection.add(letter);
// };

// export const editLetters = async (id, letters) => {
//   return lettersCollection.doc(id).update(letters);
// };

// export const deleteLetters = async (id) => {
//   return lettersCollection.doc(id).delete();
// };

// export const useLoadLetters = () => {
//   const letters = ref([]);
//   const close = lettersCollection.onSnapshot((snapshot) => {
//     letters.value = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//   });
//   onUnmounted(close);
//   return letters;
// };
