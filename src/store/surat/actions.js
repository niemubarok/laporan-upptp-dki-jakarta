import * as fb from "src/firebase";

export const fetchSurat = async ({ commit }) => {
  let detailSurat = [];
  const query = await fb.suratCollection.get().then((querySnapshot) => {
    querySnapshot.docs.map((doc) => {
      detailSurat = {
        id: doc.id,
        ...doc.data(),
      };
    });
    console.log(query);
    commit("fetchSurat", detailSurat);
  });
};

export const addSurat = async () => {
  await fb.suratCollection.add({
    noSurat: "",
    tglSurat: "06 Maret 2021",
    kelurahan: "pisangan",
    noSPIPP: "noSPIPP", //SPIPP -> surat  permohonan izin penebangan Pohon
    tglSPIPP: "tglSPIPP",
    namaKaUnit: "namaKaUnit",
    alamatPMPTSP: "alamatPMPTSP",
    tanggalTerimaSurat: "tanggalTerimaSurat",
    jumlahLampiran: "jumlahLampiran",
  });
};

export const editSurat = async ({ commit }, id) => {
  console.log("editSurat");
};

//   detailSurat = document;
