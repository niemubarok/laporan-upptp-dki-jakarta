<template>

  <div>
    <!-- {{tempImageURL}} -->
  </div>
  <q-uploader
    label="Auto Uploader"
    auto-upload
    :factory="onUpload"
    :headers="headerCORS"
    @removed="removeImage"
    hide-upload-btn
    @rejected="removeImage"
    max-files="1"
    flat
    :style="maxWidth"
    ref="uploader"
    :color="tempImageURL.length !== 0 ? 'positive' : 'grey-7 text-grey-3'"
  >
    <!-- bordered -->
    <!-- multiple -->
    <template v-slot:header="scope">
      <div class="row no-wrap items-center q-ml-sm q-pa-sm q-gutter-xs">
        <!-- :class="tempImageURL.length == 1 ? 'bg-green-8' : ''" -->
        <!-- style="border-radius:5px 5px 0 0 ;" -->
        <div class="col">

          <div class="q-uploader__title">
            <q-icon name="perm_media"></q-icon>
            Gambar {{layer}}
          </div>
          <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} </div> -->
        </div>

      </div>
    </template>

    <template v-slot:list="scope">
      <q-list separator>

        <q-btn
          v-if="tempImageURL.length == 0"
          type="a"
          icon-right="add"
          class="full-width"
          color="grey-8"
          label="Ambil Gambar"
        >
          <!-- <q-item side>Ambil Gambar</q-item> -->
          <q-uploader-add-trigger />
          <q-tooltip>Ambil Gambar</q-tooltip>

        </q-btn>
        <q-item
          v-for="file in scope.files"
          :key="file.name"
        >

          <q-item-section
            v-if="file.__img"
            class="gt-xs"
          >
          </q-item-section>

          <q-item-section
            v-if="file.__img"
            thumbnail
            class="gt-xs"
            side
          >
            <img :src="file.__img.src">
            {{ file.name }}
            <q-badge
              floating
              align="bottom"
            >
              {{ file.__sizeLabel }}
            </q-badge>

          </q-item-section>

          <q-item-section side>

            <q-btn
              class="gt-xs text-red"
              size="12px"
              flat
              dense
              round
              icon="delete"
              @click="[scope.removeFile(file), buttonDeletePressed = true]"
            />
            <q-btn
              class="gt-xs text-red"
              size="12px"
              flat
              dense
              round
              icon="delete"
              @click="resetUploader"
            >reset</q-btn>
          </q-item-section>
        </q-item>

      </q-list>
    </template>
  </q-uploader>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { storage } from 'src/firebase'
import DataSurat from '../global/DataSurat'

export default {
  props: [
    'layer',
    'maxWidth'
  ],
  setup (props) {
    const buttonDeletePressed = false
    // const tempImageURL = ref([])

    const { modelLaporan, resetUploader, uploader, tempImageURL } = DataSurat

    const headerCORS = [
      {
        "origin": ["* "],
        "method": ["POST"],
        "maxAgeSecond": 3600
      }]

    const onUpload = (files) => {
      try {
        const file = props.layer + '/' + files[0].name
        const storageRef = storage.ref()
        const imageRef = storageRef.child(file)

        imageRef.put(files[0]).then((snapshot) => {
          if (snapshot.state == 'success') {

            tempImageURL.value.push(1)
            // console.log(snapshot.state == 'success');
            storage.ref(file).getDownloadURL().then(function (url) {

              if (props.layer == 'Layer 1') {
                modelLaporan.imageLayer1 = url

              } else if (props.layer == 'Layer 2') {
                modelLaporan.imageLayer2 = url

              } else {
                modelLaporan.hasil = url
              }
              // console.log(tempImageURL.value)
            })
          }
        })

      } catch (error) {
        console.log(error);
      }
    }

    const removeImage = async (files) => {
      const file = props.layer + '/' + files[0].name
      storage.ref().child(file).delete().then(function () {
        console.log('image removed')
      })

      try {
        tempImageURL.value.pop()
        if (props.layer == 'Layer 1') {
          delete modelLaporan.imageLayer1
        } else if (props.layer == 'Layer 2') {
          delete modelLaporan.imageLayer2
        } else {
          delete modelLaporan.hasil
        }
      } catch (e) {
        console.log(e);
      }
    }



    onMounted(() => {
      // console.log(props.layer == 'Layer 1');
      // console.log(props.layer == 'Layer 2');
      // console.log('layer:' + props.layer);
    })


    return {
      uploader,
      resetUploader,
      buttonDeletePressed,
      tempImageURL,
      // tempLaporan,
      removeImage,
      headerCORS,
      // getImageUrl,
      onUpload,
      // laporan
    }
  }
}
</script>

<style>
</style>