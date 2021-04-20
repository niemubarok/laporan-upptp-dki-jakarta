<template>

  <div>

    <q-file
      :standout="modelLaporan.imageLayer1 ? 'bg-green-9 text-white': 'bg-primary text-white' "
      v-model="tempImageLayer1"
      :label="'Gambar ' +layer"
      max-files="1"
      v-if="layer == 'Layer 1'"
      @change="uploadImageNgetUrl"
      clearable
      @clear="deleteImageFromFirebase('layer 1', modelLaporan.imageLayer1)"
      loading="true"
      :bg-color="modelLaporan.imageLayer1 ? 'green-9 text-white': ''"
    >
      <!-- use-chips -->
      <template v-slot:prepend>
        <q-icon name="folder_open" />
      </template>

    </q-file>

    <q-file
      standout="bg-primary text-white"
      v-model="tempImageLayer2"
      :label="'Gambar ' +layer"
      max-files="1"
      v-if="layer == 'Layer 2'"
      use-chips
    >
      <template v-slot:prepend>
        <q-icon name="folder_open" />
      </template>

    </q-file>

    <q-file
      standout="bg-primary text-white"
      v-model="tempImageHasil"
      :label="'Gambar ' +layer"
      max-files="1"
      v-if="layer == 'Hasil'"
      use-chips
    >
      <template v-slot:prepend>
        <q-icon name="folder_open" />
      </template>

    </q-file>
  </div>

</template>

<script>
import DataSurat from '../global/DataSurat'
import { ref } from 'vue'

export default {
  props: [
    'layer',
    'maxWidth'
  ],
  setup () {

    const isUploaded = ref(false)

    const { tempImageLayer1,
      tempImageLayer2,
      tempImageHasil,
      modelLaporan,
      tempLaporan,
      isImageLayer1Uploaded,
      isImageLayer2Uploaded,
      isImageHasilUploaded,
      deleteImageFromFirebase,
      uploadImageNgetUrl } = DataSurat

    console.log(isImageLayer1Uploaded.value);
    console.log(modelLaporan.imageLayer1);

    return {
      modelLaporan,
      tempLaporan,
      isImageLayer1Uploaded,
      isImageLayer2Uploaded,
      isImageHasilUploaded,
      deleteImageFromFirebase,
      tempImageLayer1,
      tempImageLayer2,
      tempImageHasil,
      uploadImageNgetUrl
    }
  }
}
</script>

<style>
</style>