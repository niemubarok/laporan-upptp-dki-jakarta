<template>

  <div
    class="row"
    style="margin-top:-35px;"
  >
    <!-- :style="$q.screen.lt.sm ? 'margin-left:5px':''" -->
    <q-card
      flat
      class="q-pa-sm  bg-grey-1"
      :class="$q.screen.lt.sm ? 'full-width q-mt-sm':''"
      style="width:50%"
    >
      <!-- namaPohon -->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.namaPohon"
        label="Nama Pohon"
        dense
        class="q-mt-sm"
        autofocus
      >
        <template v-slot:prepend>
          <q-icon name="park" />
        </template>
      </q-input>

      <!-- namaLatin  -->
      <q-input
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.namaLatin"
        label="Nama Latin"
        dense
        class="q-mt-sm"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="more" />
        </template>
      </q-input>

      <!-- daun -->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.daun"
        label="Daun"
        dense
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="eco" />
        </template>
      </q-input>

      <!-- batang -->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.batang"
        label="Batang"
        dense
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="device_hub" />
        </template>
      </q-input>

    </q-card>

    <q-card
      flat
      class="q-pa-sm  bg-grey-1"
      style="width:50%"
      :class="$q.screen.lt.sm ? 'full-width q-mt-sm':''"
    >

      <!-- akar-->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.akar"
        label="Akar"
        dense
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="gesture" />
        </template>
      </q-input>
      <!-- kecepatanAngin-->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.kecepatanAngin"
        label="Kecepatan Angin"
        dense
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="stacked_line_chart" />
        </template>
      </q-input>

      <!-- lokasi Pohon-->
      <!-- <q-input
        clearable
        filled
        autogrow
        v-model="laporan.lokasi"
        label="Lokasi Pohon"
        class="q-mt-sm"
        type="textarea"
      > -->
      <!-- dense -->
      <!-- <template v-slot:prepend>
          <q-icon name="place" />
        </template>
      </q-input> -->

      <!-- segmen-->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.segmen"
        label="Segmen"
        dense
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="apps" />
        </template>
      </q-input>

      <!-- zona-->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.zona"
        label="Zona"
        dense
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="bubble_chart" />
        </template>
      </q-input>
    </q-card>
    <!-- layer1 -->
    <q-card
      flat
      class="q-pa-sm  q-mt-xs q-ml-xs bg-grey-1"
      :class="$q.screen.lt.sm ? 'full-width q-mt-sm':''"
      style="width:30%;"
    >

      <div class="text-h6 text-primary">
        <div class="row">
          <div style="margin-right:10px;">
            <q-icon name="layers" />
          </div>Layer 1
        </div>
      </div>
      <q-separator class="q-mb-sm" />

      <!-- Image Uploader Layer 1 -->
      <div class="q-mt-sm">
        <image-handler
          layer="Layer 1"
          @on-upload="onUpload"
          maxWidth="max-width:100%"
        />
      </div>

      <!-- diameter-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.layer1.diameter"
        label="Diameter"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="trip_origin" />
        </template>
      </q-input>

      <!-- tinggi_batang-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.layer1.tinggi_batang"
        label="Tinggi Batang"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="arrow_upward" />
        </template>
      </q-input>

      <!-- lingkaran_batang-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.layer1.lingkaran_batang"
        label="Lingkaran Batang"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="circle" />
        </template>
      </q-input>

    </q-card>

    <!-- layer2 -->
    <q-card
      class="q-pa-sm  q-ml-xs q-mt-xs bg-grey-1"
      flat
      :class="$q.screen.lt.sm ? 'full-width' : ''"
      style="width:30%;"
    >

      <div class="text-h6 text-primary">
        <div class="row">
          <div style="margin-right:10px;">
            <q-icon name="layers" />
          </div>Layer 2

        </div>
        <q-separator />

      </div>

      <!-- Image uploader Layer 2 -->
      <div class="q-mt-sm">
        <image-handler
          layer="Layer 2"
          @on-upload="onUpload"
          maxWidth="max-width:100%"
        />
      </div>
      <div
        class="q-mt-sm"
        v-if="$q.screen.lt.sm"
      >

        <image-handler
          layer="Hasil"
          @on-upload="onUpload"
          maxWidth="max-width:200px"
        />
      </div>

      <!-- diameter-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.layer2.diameter"
        label="Diameter"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="trip_origin" />
        </template>
      </q-input>

      <!-- tinggi_batang-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.layer2.tinggi_batang"
        label="Tinggi Batang"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="arrow_upward" />
        </template>
      </q-input>

      <!-- lingkaran_batang-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="laporan.layer2.lingkaran_batang"
        label="Lingkaran Batang"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="circle" />
        </template>
      </q-input>

    </q-card>

    <q-card
      flat
      class="q-pa-sm  q-ma-xs bg-grey-1"
      :style="$q.screen.lt.sm ? 'width:100%':'width:30%'"
    >

      <!-- Hasil -->
      <div class="text-h6 text-primary">
        <div class="row">
          <div style="margin-right:10px;">
            <q-icon name="layers" />
          </div>Hasil
        </div>
      </div>
      <q-separator class="q-mb-sm" />

      <div class="q-mt-sm">
        <image-handler
          layer="Hasil"
          @on-upload="onUpload"
          maxWidth="max-width:100%"
        />
      </div>

      <!-- Kesimpulan-->
      <q-input
        clearable
        autogrow
        filled
        v-model="laporan.kesimpulan"
        label="Kesimpulan"
        class="q-mt-sm"
        type="textarea"
      >
        <template v-slot:prepend>
          <q-icon name="fact_check" />
        </template>
      </q-input>

      <!-- arahan-->
      <q-input
        clearable
        filled
        autogrow
        v-model="laporan.arahan"
        label="Instruksi / Arahan"
        class="q-mt-sm"
        type="textarea"
      >
        <template v-slot:prepend>
          <q-icon name="wb_incandescent" />
        </template>
      </q-input>

      <q-page-sticky
        position="bottom-right"
        :offset="[70, 70]"
      >
        <q-btn
          @click="tambahLampiran()"
          fab
          icon="save"
          color="orange-14"
          class="bottom-right"
          :class="$q.screen.lt.md ? 'fixed-bottom-left q-ml-xl q-mb-sm': ''"
        >
          <q-tooltip
            anchor="top middle"
            self="bottom middle"
            class="bg-indigo"
            :offset="[10, 10]"
          >
            SIMPAN LAMPIRAN
          </q-tooltip>
        </q-btn>
      </q-page-sticky>

      <!-- tombol tambah lampiran -->

    </q-card>

  </div>

</template>

<script>
import { ref, reactive } from "vue";
import { storage } from "src/firebase";
import ImageHandler from './ImageHandler.vue';

export default {
  components: { ImageHandler },

  props: ['scrollInfo'],

  setup (props, { emit }) {
    // const scrollInfo = ref({})
    const jumlahLampiran = ref([1])
    const step = ref(1)
    const sendToParent = []
    const dataLaporan = ref([{
      namaPohon: '',
      namaLatin: '',
      daun: '',
      batang: '',
      akar: '',
      kecepatanAngin: '',
      lokasi: '',
      zona: '',
      segmen: '',
      layer1: {
        image: [],
        diameter: null,
        tinggi_batang: null,
        lingkaran_batang: null
      },
      layer2: {
        image: [],
        diameter: null,
        tinggi_batang: null,
        lingkaran_batang: null
      },
      hasil: [],
      kesimpulan: '',
      arahan: ''
    }])
    // const storageBucketURL = config.storageBucket
    const laporan = reactive({
      namaPohon: '',
      namaLatin: '',
      daun: '',
      batang: '',
      akar: '',
      kecepatanAngin: '',
      lokasi: '',
      zona: '',
      segmen: '',
      layer1: {
        image: [],
        diameter: null,
        tinggi_batang: null,
        lingkaran_batang: null
      },
      layer2: {
        image: [],
        diameter: null,
        tinggi_batang: null,
        lingkaran_batang: null
      },
      hasil: [],
      kesimpulan: '',
      arahan: ''
    })

    //  console.log(props['scrollInfo']);

    const imageUploadURL = async () => {
      storage.child(file).getDownloadURL().then((url) => {
        laporan.layer1.image.push(url)
      })

    }

    const onUpload = (event) => {
      if (event.layer == 'Layer 1') {
        laporan.layer1.image.push(event.image[0])

      } else if (event.layer == 'Layer 2') {
        laporan.layer2.image.push(event.image[0])

      } else {
        laporan.hasil.push(event.image[0])

      }
    }

    const tambahLampiran = () => {
      step.value = step.value + 1
      jumlahLampiran.value.push(jumlahLampiran.value.length + 1)
      dataLaporan.value.push({ ...laporan })
      sendToParent.push({ ...dataLaporan.value })
      emit('tambah-lampiran', sendToParent)

      // console.log('dataLaporan' + dataLaporan.value);
      console.log('sendtoparent:' + sendToParent.value);

      // laporan.namaPohon = ''
      // laporan.namaLatin = ''
      // laporan.daun = ''
      // laporan.batang = ''
      // laporan.akar = ''
      // laporan.kecepatanAngin = ''
      // laporan.lokasi = ''
      // laporan.zona = ''
      // laporan.segmen = ''
      // laporan.layer1.image.splice(0, 1)
      // laporan.layer1.diameter = null
      // laporan.layer1.tinggi_batang = null
      // laporan.layer1.lingkaran_batang = null
      // laporan.layer2.image.splice(0, 1)
      // laporan.layer2.diameter = null
      // laporan.layer2.tinggi_batang = null
      // laporan.layer2.lingkaran_batang = null
      // laporan.hasil.splice(0, 1)
      // laporan.kesimpulan = ''
      // laporan.arahan = ''


    }

    const backButtonPressed = ref(false)

    const nextLampiran = () => {
      step.value = step.value + 1
    }

    const currentLampiran = () => {
      step.value
    }

    const backButton = () => {
      step.value = step.value - 1
    }

    // const scrollPosition = () =>{
    //   scrollInfo.value = 
    // }

    const hapusLampiran = (index) => {
      dataLaporan.value.splice(index, 1)
      // laporan.splice(index, 1)
      // emit('hapus-lampiran', index)
      if (step.value !== 1) {
        step.value = step.value - 1
        console.log('step.value' + step.value);
        // console.log(dataLaporan.length);
      }

      console.log(dataLaporan);
    }

    return {
      // onScroll,
      onUpload,
      dataLaporan,
      // scrollInfo,
      // storageBucketURL,
      hapusLampiran,
      nextLampiran,
      backButtonPressed,
      backButton,
      jumlahLampiran,
      laporan,
      tambahLampiran,
      step

    }
  }

}
</script>

<style>
</style>