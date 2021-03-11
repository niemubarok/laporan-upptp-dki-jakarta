<template>
  <q-page>
    <q-card class="q-ma-xl">

      <table border="1px">

        <tr>
          <th>No. Surat</th>
          <th>Tanggal Surat</th>
          <th>Titik Lokasi</th>
          <th>nama pohon</th>
        </tr>

        <template
          v-for="(surat, index) in listSurat"
          :key="surat.id"
        >

          <template v-for="laporan in surat.laporan">
            <tr>
              <td>{{surat.noSurat}}</td>
              <td>{{surat.tglSurat}}</td>
              <td>{{surat.alamatPohon}}</td>
              <td>{{laporan.namaPohon}}</td>
            </tr>
          </template>
        </template>
      </table>

      <!-- {{laporan}} -->
      <!-- <div> 
        <table>
          <tr>
            <th>No. Surat</th>
            <th>Tanggal Surat</th>
            <th>Titik Lokasi</th>
            <th>nama pohon</th>
          </tr>

          <div
            v-for="{surat} in listSurat"
            :key="surat.id"
          >

          <tr
            v-for="report in laporan"
            :key="report.namaLatin"
          >

            <td>{{lap.noSurat}}</td>
            <td>{{surat.tglSurat}}</td>
            <td>{{report}}</td>

            <td>{{laporan.namaPohon}}</td>
          </tr>
          <tr
              v-for="(index,lapor) in laporan"
              :key="index"
            >
              <td>{{lapor.namaPohon}}</td>
            </tr>
          </div>
        </table>
      </div> -->
    </q-card>

  </q-page>

</template>

<script>
import { getSurat } from 'src/db/surat'
import { db } from 'src/firebase'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    let listSurat = ref([])

    const listLaporan = []

    onMounted(() => {
      db.collection('surat').get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {

          //   console.log(doc.data());
          const data = {
            'id': doc.id,
            'surat_id': doc.data().surat_id,
            'noSurat': doc.data().noSurat,
            'tglSurat': doc.data().tglSurat,
            'kelurahan': doc.data().kelurahan,
            'noSPIPP': doc.data().noSPIPP,
            'namaKaUnit': doc.data().namaKaUnit,
            'alamatPohon': doc.data().alamatPohon,
            'tanggalTerimaSurat': doc.data().tanggalTerimaSurat,
            'jumlahLampiran': doc.data().jumlahLampiran,
            'laporan': doc.data().laporan,
          }

          listLaporan.push(data.laporan)
          listSurat.value.push(data)
        })
        // console.log(listSurat.laporan);
      })
    })
    // console.log(laporan);

    return {
      listSurat,
      listLaporan
      // data,
      //   test
    }

  }
}



</script>

<style>
</style>