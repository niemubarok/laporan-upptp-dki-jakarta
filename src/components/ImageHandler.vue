<template>

  <div>
    <q-file
      standout="bg-primary text-white"
      v-model="tempImageLayer1"
      :label="'Gambar ' +layer"
      max-files="1"
      v-if="layer == 'Layer 1'"
      use-chips
    >
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

export default {
  props: [
    'layer',
    'maxWidth'
  ],
  setup () {

    const { tempImageLayer1,
      tempImageLayer2,
      tempImageHasil, } = DataSurat

    return {
      tempImageLayer1,
      tempImageLayer2,
      tempImageHasil,
    }
  }
}
</script>

<style>
</style>