<template>
  <q-card
    id="content"
    v-if="detail[0]"
    class="q-pa-md no-shadow q-ma-md"
  >
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
          Nomor &ensp; &ensp;: {{detail[0].noSurat}}<br />
          Sifat &emsp; &emsp;: Penting<br />
          Lampir &emsp; : {{detail[0].laporan.length}} lembar<br />
          Perihal &emsp; : Laporan Hasil <br>
          <span style="margin-left:75px;">Pemeriksaan Pohon</span><br />
        </p>
      </div>
      <div class="col-4">
        <p style="text-align:right"> {{detail[0].tglSurat}}</p>
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
        &emsp;&emsp;Bersama ini disampaikan laporan hasil pemeriksaan kesehatan pohon, sehubungan dengan surat permohonan izin penebangan Pohon dari Ka Unit PMPTSP Kelurahan {{detail[0].kelurahan}} No.{{detail[0].noSPIPP}} tanggal {{detail[0].tglSurat}} a.n. {{detail[0].namaKaUnit}} di {{detail[0].alamatPMPTSP}} Kota Administrasi Jakarta Selatan, pada tanggal {{detail[0].tanggalTerimaSurat}} sebanyak {{}} pohon sebagai berikut, (hasil terlampir):
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
          v-for="(row, key) in detail[0].laporan"
          :key="key"
          :is="detail[0]"
        >
          <td>{{(key + 1)}}</td>
          <td>

            {{detail[0].alamatPohon}}
          </td>
          <td>{{row['namaPohon']}}</td>
          <td>{{row['diameterLayer2']}}</td>
          <td>{{row['kesimpulan']}}</td>
        </tr>

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

    <div class="column">
      <div
        id="ttd"
        class="col self-end text-center q-mr-xl"
      >

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
  </q-card>
  <div class="pagebreak"></div>
  <template
    v-if="detail[0]"
    v-for="laporan in detail[0].laporan "
  >
    <arborsonic
      :data="laporan"
      :surat='detail[0]'
    />

  </template>

  <!-- SKELETON -->
  <div v-if="!state.loaded">
    <q-card
      class="q-ma-sm"
      data-html2canvas-ignore="true"
    >
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton
        height="200px"
        square
      />
      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
        <q-item-label caption>
          <q-skeleton type="text" />
        </q-item-label>
      </q-item-section>

      <q-card-actions
        align="right"
        class="q-gutter-md"
      >
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>

  </div>

  <q-btn
    id="print-button"
    class="noprint fixed-bottom-right bg-primary text-white q-mb-md q-mr-md"
    @click="print"
  >Buat PDF</q-btn>
</template>

<script>
import Arborsonic from './Arborsonic.vue'
import { useQuasar } from 'quasar'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { suratCollection } from "src/firebase";
import ComponentState from 'src/global/ComponentState';

export default {
  components: { Arborsonic },
  setup () {
    const route = useRoute()
    const docId = route.params.id
    const detail = ref([])
    const imageUrl = ref('')
    const { state } = ComponentState

    onMounted(() => {
      suratCollection.doc(docId).get().then(doc => {
        let url = doc.data().laporan[0].imageLayer1[0]

        imageUrl.value = url
        detail.value.push(doc.data())
        state.loaded = true
      })
    })

    const print = () => {
      let restorepage = document.body.innerHTML
      // window.open('', 'content', 'height=400,width=600')
      let printContent = document.getElementById('content').outerHTML

      // document.getElementsByTagName('table')[0].setAttribute('style', 'widt  h:142%')

      // document.getElementById('print-button').style.visibility = 'hidden'
      document.body.innerHTML = printContent
      window.print()
      // document.body.innerHTML = printContent
      document.body.innerHTML = restorepage
      // document.getElementById('print-button').style.visibility = 'visible'
      window.location.reload()
      // window.close()
      return false
    }


    // const generateReport = () => {
    //   const arborsonic = document.getElementById('arborsonic')
    //   const content = document.getElementById('content')

    //   const opt = {
    //     margin: [0.2, 0, 0.2, 0],
    //     filename: 'header.pdf',
    //     pagebreak: { mode: ['css', 'avoid-all'] },
    //     image: { type: 'jpeg', quality: 1 },
    //     canvas: {},
    //     jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    //   }
    //   const createPdf = html2pdf().set(opt).from(content).toContainer().toCanvas().toPdf().get('pdf').then(function (pdf) {
    //     pdf.addPage();
    //   }).from(arborsonic).toContainer().toCanvas().toPdf()

    //   $q.loading.show({
    //     message: 'Sedang membuat PDF, Mohon Tunggu...',
    //   })
    //   setTimeout(() => {

    //     createPdf.save()
    //     $q.loading.hide()
    //   }, 2000)
    // }


    return {
      detail,
      state,
      print,
      imageUrl,
      // generateReport,
    }
  }

}
</script>

<style scoped>
@media print {
  .pagebreak {
    clear: both;
    page-break-after: always;
  }

  .noprint {
    display: none;
  }
  body {
    transform: scale(0.5);
  }
  table {
    page-break-inside: avoid;
  }
}
table {
  width: 85%;
  border: 1px solid black;
  border-collapse: collapse;
  page-break-inside: avoid;
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
