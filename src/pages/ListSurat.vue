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
    </q-card>

  </q-page>

</template>

<script>
import { onMounted } from 'vue'
import { dataSurat } from '../global_state/DataSurat'

export default {
  setup () {
    const data = dataSurat()

    onMounted(() => {
      data.getSurat()
    })

    return {
      listSurat: data.listSurat
    }

  }
}
</script>

<style>
</style>