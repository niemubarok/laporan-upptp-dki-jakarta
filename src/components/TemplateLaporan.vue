<template>
  <div
    id="content"
    style="width:90%;margin:auto;margin-top:50px;"
  >
    <!-- :style="{'height':contentHeight}" -->
    <div class="row justify-start">
      <div
        class="col-2"
        style="margin-left:-20px;"
      >

        <img
          src="img/logojakarta.png"
          style="width:110px;height:120px;margin-left:15px"
          ref="img"
        />
      </div>
      <div class="col q-ml-lg">
        <p style="text-align:center;font-size:14pt;line-height:1.2">
          PEMERINTAH PROVINSI DAERAH KHUSUS IBUKOTA JAKARTA
          <br> DINAS PERTAMANAN DAN HUTAN KOTA <br />
          <span class="text-bold">
            UNIT PENGELOLA PENGEMBANGAN TANAMAN PERKOTAAN
          </span>
          <br>
          <small>Jalan Aipda KS.Tubun Nomor 1 Telp. 021- 22129232 Faksimile 021-22129232
            <br> E-mail: upptpdishut@gmail.com Kode Pos 10260</small>
          <br>
          JAKARTA
        </p>
      </div>
    </div>
    <hr style="margin-top:-15px;">
    <div class="row justify-between q-mt-lg">
      <div class="col-4">
        <p style="font-size:11pt;">
          Nomor &ensp; &ensp;: {{letters.noSurat}}<br />
          Sifat &emsp; &emsp;: Penting<br />
          <!-- Lampir &emsp; : {{dataSurat.id1.jumlahLampiran}} lembar<br /> -->
          Perihal &emsp; : Laporan Hasil <br>
          <span style="margin-left:75px;">Pemeriksaan Pohon</span><br />
        </p>
      </div>
      <div class="col-4">
        <!-- <p style="text-align:right"> {{dataSurat.tglSurat}}</p> -->
      </div>
    </div>
    <div
      class="column"
      style="margin-top:-55px;margin-right:50px;"
    >
      <div class="col self-end">
        <p style="font-size:11pt;">
          Kepada Yth,<br />
          Ketua Tim Pemantau, <br>
          Perlindungan
          Dan Pelestarian Pohon <br>
          Dinas Pertamananan Dan Hutan Kota<br>
          Provinsi DKI Jakarta<br>
          Di<br>
          Jakarta
        </p>

      </div>
    </div>
    <div style="margin-left:100px;">
      <p style="font-size:11pt;text-align:justify">
        &emsp;&emsp;Bersama ini disampaikan laporan hasil pemeriksaan kesehatan pohon, sehubungan dengan surat permohonan izin penebangan Pohon dari Ka Unit PMPTSP Kelurahan {{dataSurat.kelurahan}} No.{{dataSurat.noSPIPP}} tanggal {{dataSurat.tglSPIPP}} a.n. {{dataSurat.namaKaUnit}} di {{dataSurat.alamatPMPTSP}} Kota Administrasi Jakarta Selatan, pada tanggal {{dataSurat.tanggalTerimaSurat}} sebanyak {{dataSurat.jumlahLampiran}} pohon sebagai berikut, (hasil terlampir):
      </p>
    </div>
    <div class="row">
      <table
        id="tableHeight"
        border="1px"
        style="margin-left:100px;"
      >

        <tr>
          <th class="q-px-md">No</th>
          <th class="q-px-md">Titik Lokasi</th>
          <th class="q-px-md">Jenis Pohon</th>
          <th class="q-px-md">Ø Batang Cm</th>
          <th class="q-px-md">Keterangan</th>
        </tr>
        <tr
          v-for="(row, key) in dataTable"
          :key="key"
        >
          <td>{{row.no}}</td>
          <td>{{row.titikLokasi}}</td>
          <td>{{row.jenisPohon}}</td>
          <td>{{row.Batang}}</td>
          <td>{{row.Keterangan}}</td>
        </tr>
        <!-- <tr>
                <td>{{table.id2.no}}</td>
                <td>{{table.id2.titikLokasi}}</td>
                <td>{{table.id2.jenisPohon}}</td>
                <td>{{table.id2.Batang}}</td>
                <td>{{table.id2.Keterangan}}</td>
              </tr> -->

      </table>
    </div>
    <div
      class="row"
      style="margin-left:100px;"
    >
      <p style="font-size:11pt;text-align:justify;margin-top:5px;">
        &emsp;&emsp;Demikian hasil pemeriksaan kesehatan pohon tersebut diatas untuk dapat ditindaklanjuti sesuai ketentuan. Atas perhatiannya diucapkan terima kasih.
      </p>
    </div>
    <!-- <div v-if="tableHeight() > 300 && tableHeight() < 400">
      <span class="column html2pdf__page-break"> </span>
      <p>page break</p>
    </div> -->

    <div class="column">
      <div
        id="ttd"
        class="col self-end text-center q-mr-xl"
      >
        <!-- <span :class="tableHeight > 151 ? 'html2pdf__page-break' : ''"> </span>
        <p>{{tableHeight > 151}}</p>
        <p>{{contentHeight}}</p> -->

        Kepala Unit Pengelola <br>
        Pengembangan Tanaman Perkotaan <br>
        Dinas Pertamanan dan Hutan Kota <br>
        Provinsi DKI Jakarta
        <br>
        <br>
        <br>
        Dwi.S. Ponangsera, S.P. <br>
        NIP 197912292006042005
      </div>
    </div>
    <div class="column">
      <div class="col self-start">
        Tembusan: <br>
        1.Kepala Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta.<br>
        2.Kepala Subbag Tata Usaha UPPTP Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta.
      </div>
    </div>
  </div>
  <q-separator class="q-mt-md " />
  <q-separator class="q-mt-md" />
  <!-- </q-card> -->
  <arborsonic />

  <q-btn
    class="fixed-bottom"
    @click="generateReport"
  >createPDF</q-btn>

</template>

<script>
import html2pdf from 'html2pdf.js'
import Arborsonic from './Arborsonic.vue'
import { useQuasar } from 'quasar'
import { reactive, computed } from 'vue';
// import { getLetters } from 'src/firebase'
import { useStore } from 'vuex'

export default {
  components: { Arborsonic },

  setup () {
    const letters = reactive({
      noSurat: ''
    })
    const store = useStore()
    const $q = useQuasar()
    const generateReport = () => {
      const arborsonic = document.getElementById('arborsonic')
      const content = document.getElementById('content')

      const opt = {
        margin: [0.5, 0, 0.5, 0],
        filename: 'header.pdf',
        pagebreak: { mode: ['css', 'avoid-all'] },
        image: { type: 'jpeg', quality: 1 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      }
      const createPdf = html2pdf().set(opt).from(content).toContainer().toCanvas().toPdf().get('pdf').then(function (pdf) {
        pdf.addPage();
      }).from(arborsonic).toContainer().toCanvas().toPdf()

      $q.loading.show({
        message: 'Sedang membuat PDF, Mohon Tunggu...',
      })
      setTimeout(() => {

        createPdf.save()
        $q.loading.hide()
      }, 5000)
    }

    const dataSurat = async () => {
      const letters = await getLetters('0trQkNqGeEAEDDmIfUvl')
      letters.value = letters.nomorSurat
    }
    return {
      letters,
      dataSurat,
      dataTable: computed(() => {
        const dataSurat = store.state.laporanTpa.dataSurat
        let data = []
        Object.keys(dataSurat).forEach((key) => {
          data = dataSurat[key].table
        })
        return data
      }),

      generateReport,
    }
  }

}
</script>

<style scoped>
table {
  width: 85%;
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  text-align: center;
  vertical-align: middle;
}
/* @media print {
  body,
  page {
    margin: 0;
    box-shadow: 0;
  }
} */
</style>

// data () {
  //   return {
  //     // tableHeight: 0,
  //     // contentHeight: 0,
  //     // noSurat: '1',
  //     // tglSurat: '06 Maret 2021',
  //     // kelurahan: 'pisangan',
  //     // noSPIPP: 'noSPIPP', //SPIPP -> surat  permohonan izin penebangan Pohon
  //     // tglSPIPP: 'tglSPIPP',
  //     // namaKaUnit: 'namaKaUnit',
  //     // alamatPMPTSP: 'alamatPMPTSP',
  //     // tanggalTerimaSurat: 'tanggalTerimaSurat',
  //     // jumlahLampiran: 'jumlahLampiran',
  //     // table: {
  //     //   id1: {
  //     //     no: '1',
  //     //     titikLokasi: 'Jl.Pelita Kel.Cipete Utara Kec.Kebayoran baru',
  //     //     jenisPohon: 'Palem',
  //     //     Batang: '60,3',
  //     //     Keterangan: 'Berdasarkan hasil pemeriksaan, pohon keropos, lapuk, dan proses pelapukan 4%'
  //     //   },
  //     //   id2: {
  //     //     no: '2',
  //     //     titikLokasi: 'Jl. Asrama Putera UIN',
  //     //     jenisPohon: 'jati',
  //     //     Batang: '60,3',
  //     //     Keterangan: 'Berdasarkan hasil pemeriksaan, pohon keropos, lapuk, dan proses pelapukan 4%'
  //     //   },
  //     //   id3: {
  //     //     no: '3',
  //     //     titikLokasi: 'Jl. Asrama Putera UIN',
  //     //     jenisPohon: 'jati',
  //     //     Batang: '60,3',
  //     //     Keterangan: 'Berdasarkan hasil pemeriksaan, pohon keropos, lapuk, dan proses pelapukan 4%'
  //     //   },
  //     //   id4: {
  //     //     no: '4',
  //     //     titikLokasi: 'Jl. Asrama Putera UIN',
  //     //     jenisPohon: 'jati',
  //     //     Batang: '60,3',
  //     //     Keterangan: 'Berdasarkan hasil pemeriksaan, pohon keropos, lapuk, dan proses pelapukan 4%'
  //     //   },
  //     //   id5: {
  //     //     no: '5',
  //     //     titikLokasi: 'Jl. Asrama Putera UIN',
  //     //     jenisPohon: 'jati',
  //     //     Batang: '60,3',
  //     //     Keterangan: 'Berdasarkan hasil pemeriksaan, pohon keropos, lapuk, dan proses pelapukan 4%'
  //     //   },
  //     // id6: {
  //     //   no: '6',
  //     //   titikLokasi: 'Jl. Asrama Putera UIN',
  //     //   jenisPohon: 'jati',
  //     //   Batang: '60,3',
  //     //   Keterangan: 'Berdasarkan hasil pemeriksaan, pohon keropos, lapuk, dan proses pelapukan 4%'
  //     // }



  //   }

  // }

// },