import { reactive, ref, toRefs } from "vue";
import { db, storage } from "src/firebase";
import { createSurat, getSurat } from "../db/surat";
import { Notify } from "quasar";

const modelLaporan = reactive({
  // laporan_id: null,
  namaPohon: "",
  namaLatin: "",
  daun: "",
  batang: "",
  akar: "",
  kecepatanAngin: "",
  lokasi: "",
  zona: "",
  segmen: "",
  imageLayer1: [],
  diameterLayer1: "",
  tinggiBatangLayer1: "",
  lingkaranBatangLayer1: "",
  imageLayer2: [],
  diameterLayer2: "",
  tinggiBatangLayer2: "",
  lingkaranBatangLayer2: "",
  hasil: [],
  kesimpulan: "",
  arahan: "",
});

const surat = reactive({
  surat_id: null,
  noSurat: "",
  tglSurat: "",
  kelurahan: "",
  noSPIPP: "",
  namaKaUnit: "",
  alamatPohon: "",
  tanggalTerimaSurat: "",
  jumlahLampiran: "",
  laporan: "",
});

let tempLaporan = ref([]);

// const tempLaporan = [
//   {
//     laporan_id: null,
//     namaPohon: "",
//     namaLatin: "",
//     daun: "",
//     batang: "",
//     akar: "",
//     kecepatanAngin: "",
//     lokasi: "",
//     zona: "",
//     segmen: "",
//     layer1: {
//       image: "",
//       diameter: "10 ",
//       tinggi_batang: "",
//       lingkaran_batang: "",
//     },
//     layer2: {
//       image: "",
//       diameter: "",
//       tinggi_batang: "",
//       lingkaran_batang: "",
//     },
//     hasil: "",
//     kesimpulan: "",
//     arahan: "",
//   },
// ];

// const tempLaporan = {
//   laporan_id: null,
//   namaPohon: "",
//   namaLatin: "",
//   daun: "",
//   batang: "",
//   akar: "",
//   kecepatanAngin: "",
//   lokasi: "",
//   zona: "",
//   segmen: "",
//   imageLayer1: "",
//   diameterLayer1: "",
//   tinggiBatangLayer1: "",
//   lingkaranBatangLayer1: "",
//   imageLayer2: "",
//   diameterLayer2: "",
//   tinggiBatangLayer2: "",
//   lingkaranBatangLayer2: "",
//   hasil: "",
//   kesimpulan: "",
//   arahan: "",
// };

// const tempImageURL = ref([]);

// const tempImage = ref(null);

// const uploader = ref(null);
// const isUploaded = ref(false);

// const resetUploader = () => {
//   uploader.value.removeUploadedFiles();
//   tempImageURL.value.pop();
//   // this.$refs.uploader.reset();
//   // this.tempImageURL.splice(0, this.tempImageURL.length);

//   console.log("resetUploader");
//   // console.log(tempImageURL.value);
// };

const uploadImage = async (layer, tempImage) => {
  const file = layer + "/" + tempImage.value.name;
  const storageRef = storage.ref();
  const imageRef = storageRef.child(file);

  const upload = imageRef.put(tempImage.value);
  return upload;
};

const getImagerURL = async (layer, tempImage) => {
  const file = layer + "/" + tempImage;
  return storage.ref(file).getDownloadURL();
};

const tempImageLayer1 = ref(null);
const tempImageLayer2 = ref(null);
const tempImageHasil = ref(null);

// menambahkan lampiran ke dalam array untuk nanti dipush ke firebase
const simpanLampiran = async () => {
  //upload image ke firebase kemudian ambil urlnya
  if (tempImageLayer1.value !== null) {
    await uploadImage("Layer 1", tempImageLayer1).then((snapshot) => {
      if (snapshot.state == "success") {
        getImagerURL("Layer 1", tempImageLayer1.value.name).then(function (
          url
        ) {
          if (url) {
            // modelLaporan.imageLayer1.splice(0, 1, url);
            modelLaporan.imageLayer1.unshift(url);
          }
        });
        tempImageLayer1.value = null;
      }
    });
  }
  if (tempImageLayer2.value !== null) {
    await uploadImage("Layer 2", tempImageLayer2).then((snapshot) => {
      if (snapshot.state == "success") {
        getImagerURL("Layer 2", tempImageLayer2.value.name).then(function (
          url
        ) {
          if (url) {
            modelLaporan.imageLayer2.splice(0, 1, url);
          }
        });
        tempImageLayer2.value = null;
      }
    });
  }

  if (tempImageHasil.value !== null) {
    await uploadImage("Hasil", tempImageHasil).then((snapshot) => {
      if (snapshot.state == "success") {
        getImagerURL("Hasil", tempImageHasil.value.name).then(function (url) {
          if (url) {
            modelLaporan.hasil.splice(0, 1, url);
          }
        });
        tempImageHasil.value = null;
      }
    });
  }

  //--------- end upload image ----------------//

  //get surat id terakhir dari firebase
  currentId();

  // push modelLaporan / data yang diinput diform ke temporary loporan
  tempLaporan.value.push({ ...modelLaporan });

  //setelah tempLaporan terisi oleh modelLaporan
  //templaporan dimasukan ke surat.laporan
  surat.laporan = tempLaporan.value;
  Notify.create({
    message: "Lampiran Berhasil disimpan",
    color: "green-8",
  });

  //reset form
  modelLaporan.namaPohon = "";
  modelLaporan.namaLatin = "";
  modelLaporan.daun = "";
  modelLaporan.batang = "";
  modelLaporan.akar = "";
  modelLaporan.kecepatanAngin = "";
  modelLaporan.lokasi = "";
  modelLaporan.zona = "";
  modelLaporan.segmen = "";
  modelLaporan.diameterLayer1 = "";
  modelLaporan.tinggiBatangLayer1 = "";
  modelLaporan.lingkaranBatangLayer1 = "";
  modelLaporan.diameterLayer2 = "";
  modelLaporan.tinggiBatangLayer2 = "";
  modelLaporan.lingkaranBatangLayer2 = "";
  modelLaporan.kesimpulan = "";
  modelLaporan.arahan = "";
};

function getPathStorageFromUrl(url) {
  const baseUrl =
    "https://firebasestorage.googleapis.com/v0/b/laporan-upptp.appspot.com/o/";

  let imagePath = url.replace(baseUrl, "");
  const indexOfEndPath = imagePath.indexOf("?");
  imagePath = imagePath.substring(0, indexOfEndPath);
  imagePath = imagePath.replace(/%2F/g, "/");
  imagePath = imagePath.replace(/%20/g, " ");
  return imagePath;
}

const deleteImageFromFirebase = (url) => {
  //check ada url atau tidak
  if (url) {
    // Ambil path gambar dari url firebase storage dengan fungsi
    const imagePath = getPathStorageFromUrl(url);

    // // delete gambar di firebase
    storage
      .ref()
      .child(imagePath)
      .delete()
      .then(function () {
        console.log("image removed");
      });
  }
};

const hapusLampiran = async (index, url) => {
  console.log(url.imageLayer1[0]);
  deleteImageFromFirebase(url.imageLayer1[0]);
  deleteImageFromFirebase(url.imageLayer2[0]);
  deleteImageFromFirebase(url.hasil[0]);

  //delete index laporan
  tempLaporan.value.splice(index, 1);

  Notify.create({
    message: "Lampiran " + (index + 1) + " Berhasil diHapus",
    color: "green-8",
  });
};

let fromDB = ref([]);
// const getSurat = async () => {
//   db.collection("surat")
//     // .where("state", "==", "CA")
//     .onSnapshot((snapshot) => {
//       snapshot.docChanges().forEach((change) => {
//         const data = change.doc.data();
//         if (change.type === "added") {
//           // Object.assign({}, fromDB, change.doc.data());
//           fromDB.value.unshift(data);
//           // fromDB = change.doc.data()
//           // console.log("New city: ", change.doc.data());
//         }
//         if (change.type === "modified") {
//           console.log("Modified city: ", change.doc.data());
//         }
//         if (change.type === "removed") {
//           console.log("Removed city: ", change.doc.data());
//         }
//       });
//     });
// };

//Ambil detail surat sesuai id

const detailSurat = ref([]);
const getDetailSurat = async (docId) => {
  let data = "";
  await getSurat(docId).then((doc) => {
    data = doc;
  });
  return data;
};

//--------Submit Surat ke firebase ----------//
const submitSurat = async () => {
  try {
    //upload surat ke firebase
    await createSurat({ ...surat }).then(() => {
      tempLaporan.value.splice(0, tempLaporan.value.length);
      surat.surat_id = "";
      surat.noSurat = "";
      surat.tglSurat = "";
      surat.kelurahan = "";
      surat.noSPIPP = "";
      surat.namaKaUnit = "";
      surat.alamatPohon = "";
      surat.tanggalTerimaSurat = "";
      surat.jumlahLampiran = "";
    });

    //update surat_id di document count
    db.collection("surat")
      .doc("count")
      .update({
        surat_id: surat.surat_id,
      })
      .then(() => {
        console.log("sukses");
      })
      .catch((e) => {
        console.log(e);
      });

    Notify.create({
      message: "Surat Berhasil disimpan",
      color: "green-8",
    });
  } catch (error) {
    console.log(error);
  }
};

// ambil id terakhir
const currentId = () => {
  const id = db
    .collection("surat")
    .doc("count")
    .onSnapshot((querySnapshot) => {
      const data = {
        surat_id: querySnapshot.data().surat_id + 1,
        // laporan_id: querySnapshot.data().laporan_id + 1,
      };
      surat.surat_id = data.surat_id;
      // surat.laporan.laporan_id = data.laporan_id;
    });
};

export default {
  tempImageLayer1,
  tempImageLayer2,
  tempImageHasil,
  tempLaporan,
  modelLaporan,
  surat,
  detailSurat,
  getDetailSurat,
  uploadImage,
  getPathStorageFromUrl,
  getSurat,
  submitSurat,
  simpanLampiran,
  hapusLampiran,
  currentId,
};

// tempImage,
// tempImageURL,
// fromDB,
// uploader,
// isUploaded,
// resetUploader,
