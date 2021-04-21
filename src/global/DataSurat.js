import { reactive, ref, toRefs } from "vue";
import { db, storage } from "src/firebase";
import { createSurat, getSurat } from "../db/surat";
import { Notify, useQuasar } from "quasar";

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
  imageLayer1: null,
  diameterLayer1: "",
  tinggiBatangLayer1: "",
  lingkaranBatangLayer1: "",
  imageLayer2: null,
  diameterLayer2: "",
  tinggiBatangLayer2: "",
  lingkaranBatangLayer2: "",
  hasil: null,
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

const tempImageLayer1 = ref(null);
const tempImageLayer2 = ref(null);
const tempImageHasil = ref(null);
const isImageLayer1Uploaded = ref(false);
const isImageLayer2Uploaded = ref(false);
const isImageHasilUploaded = ref(false);
const saved = ref(false);

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

const uploading = reactive({
  layer1: false,
  layer2: false,
  hasil: false,
});

const errorUpload = reactive({
  layer1: false,
  layer2: false,
  hasil: false,
});

const uploadImageNgetUrl = async () => {
  //upload image ke firebase kemudian ambil urlnya
  if (tempImageLayer1.value !== null && !isImageLayer1Uploaded.value) {
    uploading.layer1 = true;
    setTimeout(() => {
      if (!modelLaporan.imageLayer1 && !saved) {
        uploading.layer1 = false;
        errorUpload.layer1 = true;
        tempImageLayer1.value = null;
        Notify.create({
          message: "Gagal Upload Gambar Layer 1",
          caption: "Cek koneksi Internet anda",
          color: "red-8",
          position: "top",
        });
      }
    }, 10000);

    await uploadImage("Layer 1", tempImageLayer1).then((snapshot) => {
      if (snapshot.state == "success") {
        getImagerURL("Layer 1", tempImageLayer1.value.name).then(function (
          url
        ) {
          if (!url) {
            Notify.create({
              message: "Gagal Upload Gambar Layer 1",
              color: "red-8",
              position: "top",
            });
            uploading.layer1 = false;
          } else {
            modelLaporan.imageLayer1 = url;
            isImageLayer1Uploaded.value = true;
            uploading.layer1 = false;
          }
        });
        // tempImageLayer1.value = null;
      } else {
        Notify.create({
          message: "Gagal Upload Gambar Layer 1",
          color: "red-8",
          position: "top",
        });
      }
    });
  }

  //image Layer 2
  if (tempImageLayer2.value !== null && !isImageLayer2Uploaded.value) {
    uploading.layer2 = true;
    setTimeout(() => {
      if (!modelLaporan.imageLayer2 && !saved) {
        uploading.layer2 = false;
        errorUpload.layer2 = true;
        tempImageLayer2.value = null;
        Notify.create({
          message: "Gagal Upload Gambar Layer 2",
          caption: "Cek koneksi Internet anda",
          color: "red-8",
          position: "top",
        });
      }
    }, 10000);
    await uploadImage("Layer 2", tempImageLayer2).then((snapshot) => {
      if (snapshot.state == "success") {
        getImagerURL("Layer 2", tempImageLayer2.value.name).then(function (
          url
        ) {
          if (url) {
            modelLaporan.imageLayer2 = url;
            isImageLayer2Uploaded.value = true;
            uploading.layer2 = false;
          }
        });
        // tempImageLayer1.value = null;
      }
    });
  }
  //image Hasil

  if (tempImageHasil.value !== null && !isImageHasilUploaded.value) {
    uploading.hasil = true;
    setTimeout(() => {
      if (!modelLaporan.hasil && !saved) {
        uploading.hasil = false;
        errorUpload.hasil = true;
        tempImageHasil.value = null;
        Notify.create({
          message: "Gagal Upload Gambar Hasil",
          caption: "Cek koneksi Internet anda",
          color: "red-8",
          position: "top",
        });
      }
    }, 10000);
    await uploadImage("Hasil", tempImageHasil).then((snapshot) => {
      if (snapshot.state == "success") {
        getImagerURL("Hasil", tempImageHasil.value.name).then(function (url) {
          if (url) {
            modelLaporan.hasil = url;
            isImageHasilUploaded.value = true;
            uploading.hasil = false;
          }
        });
        // tempImageLayer1.value = null;
      }
    });
  }
};

const resetForm = () => {
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
  modelLaporan.imageLayer1 = null;
  isImageLayer1Uploaded.value = false;
  modelLaporan.imageLayer2 = null;
  isImageLayer2Uploaded.value = false;
  modelLaporan.hasil = null;
  isImageHasilUploaded.value = false;
  tempImageLayer1.value = null;
  tempImageLayer2.value = null;
  tempImageHasil.value = null;
};

// menambahkan lampiran ke dalam array untuk nanti dipush ke firebase
const simpanLampiran = async () => {
  //get surat id terakhir dari firebase
  currentId();

  //cek imagenya sudah ada belum
  // push modelLaporan / data yang diinput diform ke temporary loporan
  tempLaporan.value.push({ ...modelLaporan });

  //setelah tempLaporan terisi oleh modelLaporan
  //templaporan dimasukan ke surat.laporan
  surat.laporan = tempLaporan.value;

  if (surat.laporan) {
    Notify.create({
      message: "Lampiran Berhasil disimpan",
      color: "green-8",
      position: "top-right",
    });
    saved.value = true;
    console.log(surat.laporan);
    resetForm();
  }
  // }
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

const deleteImageFromFirebase = (layer, url) => {
  // console.log(url);
  // check ada url atau tidak
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
        if (layer == "layer 1") {
          modelLaporan.imageLayer1 = null;
          isImageLayer1Uploaded.value = false;
        }
        if (layer == "layer 2") {
          modelLaporan.imageLayer2 = null;
          isImageLayer2Uploaded.value = false;
        }
        if (layer == "hasil") {
          modelLaporan.hasil = null;
          isImageHasilUploaded.value = false;
        }
      });
  }
};

const hapusLampiran = async (index, url) => {
  // console.log(url);

  if (url.imageLayer1 !== null) {
    deleteImageFromFirebase(url.imageLayer1);
  }
  if (url.imageLayer2 !== null) {
    deleteImageFromFirebase(url.imageLayer2);
  }
  if (url.hasil !== null) {
    deleteImageFromFirebase(url.hasil);
  }

  //delete index laporan
  tempLaporan.value.splice(index, 1);

  Notify.create({
    message: "Lampiran " + (index + 1) + " Berhasil diHapus",
    color: "green-8",
    position: "top-right",
  });
};
const detailSurat = ref([]);
const getDetailSurat = async (docId) => {
  let data = "";
  await getSurat(docId).then((doc) => {
    data = doc;
  });
  return data;
};

//--------Submit Surat ke firebase ----------//
const submitted = ref(false);
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
        submitted.value = true;
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
  submitted,
  uploading,
  isImageLayer1Uploaded,
  isImageLayer2Uploaded,
  isImageHasilUploaded,
  tempImageLayer1,
  tempImageLayer2,
  tempImageHasil,
  tempLaporan,
  modelLaporan,
  surat,
  detailSurat,
  errorUpload,
  uploadImageNgetUrl,
  deleteImageFromFirebase,
  getDetailSurat,
  uploadImage,
  getPathStorageFromUrl,
  getSurat,
  submitSurat,
  simpanLampiran,
  hapusLampiran,
  currentId,
};
