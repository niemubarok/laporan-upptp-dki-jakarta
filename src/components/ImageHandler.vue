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
      clear-icon="delete"
      @clear="deleteImageFromFirebase('layer 1', modelLaporan.imageLayer1)"
      loading="true"
      :bg-color="bgColor(modelLaporan.imageLayer1, errorUpload.layer1)"
    >
      <template v-slot:prepend>
        <q-circular-progress
          v-if="uploading.layer1"
          indeterminate
          size="30px"
          :thickness="0.4"
          font-size="50px"
          color="orange-14"
          track-color="grey-3"
          center-color="grey-8"
          class="q-ma-md"
        />

        <q-icon
          v-if="!modelLaporan.imageLayer1 && !uploading.layer1"
          name="folder_open"
        />
        <span
          v-if="modelLaporan.imageLayer1"
          class="material-icons text-grey-3"
        >
          cloud_done
        </span>
      </template>

    </q-file>

    <!-- //Layer2 -->

    <q-file
      :standout="modelLaporan.imageLayer2 ? 'bg-green-9 text-white': 'bg-primary text-white' "
      v-model="tempImageLayer2"
      :label="'Gambar ' +layer"
      max-files="1"
      v-if="layer == 'Layer 2'"
      @change="uploadImageNgetUrl"
      clearable
      clear-icon="delete"
      @clear="deleteImageFromFirebase('layer 2', modelLaporan.imageLayer2)"
      loading="true"
      :bg-color="modelLaporan.imageLayer2 ? 'green-9 text-white': ''"
    >
      <!-- use-chips -->
      <template v-slot:prepend>
        <q-circular-progress
          v-if="uploading.layer2"
          indeterminate
          size="30px"
          :thickness="0.4"
          font-size="50px"
          color="orange-14"
          track-color="grey-3"
          center-color="grey-8"
          class="q-ma-md"
        />
        <q-icon
          v-if="!modelLaporan.imageLayer2 && !uploading.layer2"
          name="folder_open"
        />
        <span
          v-if="modelLaporan.imageLayer2"
          class="material-icons text-grey-3"
        >
          cloud_done
        </span>
      </template>

    </q-file>

    <q-file
      :standout="modelLaporan.hasil ? 'bg-green-9 text-white': 'bg-primary text-white' "
      v-model="tempImageHasil"
      :label="'Gambar ' +layer"
      max-files="1"
      v-if="layer == 'Hasil'"
      @change="uploadImageNgetUrl"
      clearable
      clear-icon="delete"
      @clear="deleteImageFromFirebase('hasil', modelLaporan.hasil)"
      :bg-color="bgColor(modelLaporan.hasil, errorUpload.hasil)"
    >
      <!-- use-chips -->
      <template v-slot:prepend>
        <q-circular-progress
          v-if="uploading.hasil"
          indeterminate
          size="30px"
          :thickness="0.4"
          font-size="50px"
          color="orange-14"
          track-color="grey-3"
          center-color="grey-8"
          class="q-ma-md"
        />

        <q-icon
          v-if="!modelLaporan.hasil && !uploading.hasil"
          name="folder_open"
        />
        <span
          v-if="modelLaporan.hasil"
          class="material-icons text-grey-3"
        >
          cloud_done
        </span>
      </template>

    </q-file>
  </div>

</template>

<script>
import DataSurat from '../global/DataSurat'
import { ref, computed } from 'vue'

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
      uploadImageNgetUrl,
      uploading,
      errorUpload } = DataSurat

    const bgColor = (model, error) => {
      console.log(model);
      if (model) {
        return 'green-9 text-white'
      } else if (error) {
        return 'red-9 text-white'
      } else {
        return ''
      }

    }

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
      uploadImageNgetUrl,
      uploading,
      bgColor,
      errorUpload
    }
  }
}
</script>

<style>
</style>