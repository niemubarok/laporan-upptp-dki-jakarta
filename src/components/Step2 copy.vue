<template>
  <!-- <div style="margin:auto"> -->
  <q-stepper
    vertical
    v-model="step"
    flat
    color="primary"
    animated
    ref="stepper"
    header-nav
    style="margin-top:-40px;margin-left:-20px;"
  >
    <!-- alternative-labels -->

    <!-- lampiran 1 -->
    <div
      v-for="(laporan, index) in dataLaporan"
      :key="index"
      style="margin:auto;"
      class="container relative-position"
    >
      <!-- <div
        v-for="laporan in dataLaporan"
        :key="laporan.namaPohon"
      > -->

      <q-step
        :name="(index +1)"
        :title="'Lampiran ' + (index +1)"
        :prefix="(index +1)"
      >
        <!-- :done="step > (index +1)" -->
        <!-- icon="attachment" -->
        <div
          class="row relative-position"
          :style="[$q.screen.gt.sm ? 'padding-left:100px; '
            : '' , $q.screen.lt.sm ? 'margin-left:-40px; '
            : '' ]"
        >

          <!-- style="margin-left:-120px" -->
          <div
            class="
            q-gutter-sm
            gt-xl"
            :class="$q.screen.lt.sm ? 'full-width':''"
          >
            <!-- style="margin-top:-50px;" -->

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
            <q-input
              clearable
              filled
              autogrow
              v-model="laporan.lokasi"
              label="Lokasi Pohon"
              dense
              class="q-mt-sm"
              type="textarea"
            >
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-input>

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

          </div>

          <!-- layer1 -->
          <div
            class="gt-xl q-ml-lg"
            :class="$q.screen.lt.sm ? 'full-width q-mt-sm':''"
            :style="$q.screen ? 'fullscreen q-mt-sm':''"
          >

            <div class="text-h6 text-primary">
              <div class="row">
                <div style="margin-right:10px;">
                  <q-icon name="layers" />
                </div>Layer 1
              </div>
            </div>
            <q-separator class="q-mb-sm" />

            <!-- <q-file
                color="teal"
                filled
                v-model="laporan.layer1.image"
                label="Pilih Gambar"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file> -->

            <!-- diameter-->
            <q-input
              clearable
              standout="bg-blue-10 text-yellow-14"
              v-model="laporan.layer1.diameter"
              label="Diameter"
              dense
              class="q-mt-sm"
            >
              <template v-slot:prepend>
                <q-icon name="trip_origin" />
              </template>
            </q-input>

            <!-- tinggi_batang-->
            <q-input
              clearable
              standout="bg-blue-10 text-yellow-14"
              v-model="laporan.layer1.tinggi_batang"
              label="Tinggi Batang"
              dense
              class="q-mt-sm"
            >
              <template v-slot:prepend>
                <q-icon name="arrow_upward" />
              </template>
            </q-input>

            <!-- lingkaran_batang-->
            <q-input
              clearable
              standout="bg-blue-10 text-yellow-14"
              v-model="laporan.layer1.lingkaran_batang"
              label="Lingkaran Batang"
              dense
              class="q-mt-sm"
            >
              <template v-slot:prepend>
                <q-icon name="circle" />
              </template>
            </q-input>

            <!-- Image Uploader Layer 1 -->
            <div class="q-mt-sm">
              <image-handler
                layer="Layer 1"
                @on-upload="onUpload"
                maxWidth="max-width:200px"
              />
            </div>

            <q-separator class="q-mt-sm" />

            <!-- Hasil -->
            <div
              class="q-mt-sm"
              v-if="$q.screen.gt.xs"
            >

              <image-handler
                layer="Hasil"
                @on-upload="onUpload"
                maxWidth="max-width:200px"
              />
            </div>

          </div>

          <!-- layer2 -->
          <div
            class="gt-xl q-ml-lg"
            :class="$q.screen.lt.sm ? 'full-width' : ''"
          >
            <div class="text-h6 text-primary">
              <div class="row">
                <div style="margin-right:10px;">
                  <q-icon name="layers" />
                </div>Layer 2
              </div>

            </div>
            <q-separator class="q-mb-sm" />

            <!-- diameter-->
            <q-input
              clearable
              standout="bg-blue-10 text-yellow-14"
              v-model="laporan.layer2.diameter"
              label="Diameter"
              dense
              class="q-mt-sm"
            >
              <template v-slot:prepend>
                <q-icon name="trip_origin" />
              </template>
            </q-input>

            <!-- tinggi_batang-->
            <q-input
              clearable
              standout="bg-blue-10 text-yellow-14"
              v-model="laporan.layer2.tinggi_batang"
              label="Tinggi Batang"
              dense
              class="q-mt-sm"
            >
              <template v-slot:prepend>
                <q-icon name="arrow_upward" />
              </template>
            </q-input>

            <!-- lingkaran_batang-->
            <q-input
              clearable
              standout="bg-blue-10 text-yellow-14"
              v-model="laporan.layer2.lingkaran_batang"
              label="Lingkaran Batang"
              dense
              class="q-mt-sm"
            >
              <template v-slot:prepend>
                <q-icon name="circle" />
              </template>
            </q-input>

            <!-- Image uploader Layer 2 -->
            <div class="q-mt-sm">
              <image-handler
                layer="Layer 2"
                @on-upload="onUpload"
                maxWidth="max-width:200px"
              />
            </div>

            <q-separator class="q-mt-sm" />
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
            <!-- Kesimpulan-->
            <div class="gt-xl">
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
              <div class="gt-xl">
                <q-input
                  clearable
                  autogrow
                  filled
                  v-model="laporan.arahan"
                  label="Instruksi / Arahan"
                  class="q-mt-sm"
                  type="textarea"
                >
                  <template v-slot:prepend>
                    <q-icon name="wb_incandescent" />
                  </template>
                </q-input>
              </div>
            </div>

          </div>

          <!-- <div>
            <template v-for="(data, index) in dataLaporan">
              <q-input
                clearable
                autogrow
                filled
                v-model="data.namaPohon"
                label="tes Nama Pohon"
                class="q-mt-sm"
                type="textarea"
              >
                <template v-slot:prepend>
                  <q-icon name="wb_incandescent" />
                </template>
              </q-input>
              <p>{{data.namaPohon}}</p>
            </template>
          </div> -->

        </div>

        <q-stepper-navigation>
          <div
            class="row flex no-wrap "
            style="flex-wrap:nowrap"
          >

            <div class="
              col-6">

              {{step !== 1  ?(index):''}}
              <q-btn
                v-show="dataLaporan.length >= step"
                flat
                @click="backButton()"
                :color="step !== 1 ? 'blue-10' : 'grey-3'"
                :style=" step !== 1 ? '': 'pointer-events:none'"
                align="left"
                icon="navigate_before"
              />

              <q-btn
                v-show="dataLaporan.length >= step"
                flat
                @click="nextLampiran()"
                :color=" dataLaporan.length > step ? 'blue-10' : 'grey-3'"
                :style="  dataLaporan.length > step? '': 'pointer-events:none'"
                icon="navigate_next"
              />
              {{step < dataLaporan.length ? (index +2):''}}

              <!-- Hapus Lampiran -->
              <span
                v-show="dataLaporan.length !== 1 && step !== 1"
                @click="hapusLampiran(index)"
                icon="delete"
                class="text-red-8 q-ml-md q-mt-md cursor-pointer"
              >
                <q-icon name="delete">
                </q-icon>
                Hapus Lampiran {{(index + 1)}}

              </span>
            </div>

            <!-- <q-page-sticky
              position="bottom-center"
              :offset="[500, 18]"
            > -->

            <!-- :label="$q.screen.lt.md || $q.screen.lt.sm  ? '' : 'Tambah Lampiran'" -->
            <q-btn
              @click="tambahLampiran()"
              fab
              icon="add"
              color="orange-14"
              :class="$q.screen.lt.md ? 'fixed-bottom-left q-ml-xl q-mb-sm': ''"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                class="bg-indigo"
                :offset="[10, 10]"
              >
                TAMBAH LAMPIRAN
              </q-tooltip>
              <!-- <q-tooltip>Tambah Lampiran</q-tooltip> -->
            </q-btn>
            <!-- </q-page-sticky> -->
            <!-- v-show="step == jumlahLampiran.length" -->
            <!-- <div class="col-md-6 col-xs-2">
                <div class="column sefl-end">
                  <q-btn
                    @click="tambahLampiran()"
                    color="orange-14"
                    :label="$q.screen.lt.md || $q.screen.lt.sm  ? '' : 'Tambah Lampiran'"
                    icon="add"
                    rounded
                  />
                </div>

              </div> -->
            <!-- {{laporan.namaPohon}} -->

          </div>

        </q-stepper-navigation>

        <!-- <q-separator class="q-mt-md " /> -->
      </q-step>

      <!-- </div> -->
    </div>

  </q-stepper>
  <!-- </div> -->

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