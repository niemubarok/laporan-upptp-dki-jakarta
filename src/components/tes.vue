<template>
  <q-card class="q-ma-md">
    <!-- <div class="q-pa-md">
      <q-file
        v-model="files"
        label="Pick files"
        outlined
        use-chips
        multiple
        style="max-width: 300px"
      />
    </div> -->

    <q-btn @click="getFiles"> get file</q-btn>
  </q-card>
</template>

<script>
import DataSurat from '../global/DataSurat'
import { onMounted, ref } from 'vue'
import { db } from '../firebase'
export default {

  setup () {
    const { getPathStorageFromUrl } = DataSurat
    // let fromDB = ref([])

    // const files = ref(null)

    const getFiles = () => {

      const files = getPathStorageFromUrl("https://firebasestorage.googleapis.com/v0/b/laporan-upptp.appspot.com/o/Hasil%2FScreenshot_1.png?alt=media&token=04f74614-7af7-4014-9c0d-fa2288c2ac83")

      console.log(files);
    }


    return {
      getPathStorageFromUrl,
      getFiles,
      // fromDB,
      // files
    }
  }

}
</script>

<style>
</style>