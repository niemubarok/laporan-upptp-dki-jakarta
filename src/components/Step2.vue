<template>
  <div>
    <q-stepper
      vertical
      v-model="step"
      flat
      color="primary"
      animated
      ref="stepper"
      style="margin-top:-40px;margin-left:-20px;"
      header-nav
      alternative-labels
      
    >

      <!-- lampiran 1 -->
      <div
        v-for="(lampiran, index) in jumlahLampiran"
        :key="index"
      >

        <q-step
          :name="(index +1)"
          :title="'Lampiran ' + (index +1)"
          icon="attachment"
          :done="step > (index +1)"
          
        >
          <!-- prefix="1" -->
          <div
            class="row items-center"
            :style="[$q.screen.gt.xs ? 'padding-left:100px; '
            : '' , $q.screen.lt.sm ? 'margin-left:-40px; '
            : '' ]"
          >
            <!-- style="margin-left:-120px" -->
            <div
              class="
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

              <!-- Image Uploader Layer 1 -->
              <div>
                <image-handler
                  layer="Layer 1"
                  @on-upload="onUpload"
                  maxWidth="max-width:200px"
                />
              </div>

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

              <!-- Image uploader Layer 2 -->
              <div>
                <image-handler
                  layer="Layer 2"
                  @on-upload="onUpload"
                  maxWidth="max-width:200px"
                />
              </div>

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

          </div>

          <div class="row justify-start  ">

          </div>

          <q-stepper-navigation>
            <div
              class="row flex no-wrap "
              style="flex-wrap:nowrap"
            >

              <div class="
              col-6">

                {{step > jumlahLampiran.length ?(index):''}}
                <q-btn
                  v-show="jumlahLampiran.length >= step"
                  flat
                  @click="backButton()"
                  :color="step !== 1 ? 'blue-10' : 'grey-3'"
                  :style=" step !== 1 ? '': 'pointer-events:none'"
                  align="left"
                  icon="navigate_before"
                />

                <q-btn
                  v-show="jumlahLampiran.length >= step"
                  flat
                  @click="nextLampiran()"
                  :color="backButtonPressed && jumlahLampiran.length > step ? 'blue-10' : 'grey-3'"
                  :style=" backButtonPressed && jumlahLampiran.length > step? '': 'pointer-events:none'"
                  icon="navigate_next"
                />
                {{step < jumlahLampiran.length ? (index +2):''}}

                <!-- Hapus Lampiran -->
                <span
                  v-show="jumlahLampiran.length !== 1 && step !== 1"
                  @click="hapusLampiran(index)"
                  icon="delete"
                  class="text-red-8 q-ml-md q-mt-md cursor-pointer"
                >
                  <q-icon name="delete">
                  </q-icon>
                  Hapus Lampiran {{(index + 1)}}

                </span>
                <!-- {{laporan}}

                {{nama_pohon}} -->
                <!-- label="Lampiran Selanjutnya" -->

              </div>
              <div class="col-md-6 col-xs-2">
                <div class="column sefl-end">
                  <!-- v-show="step == jumlahLampiran.length" -->
                  <q-btn
                    @click="tambahLampiran()"
                    color="orange-14"
                    :label="$q.screen.lt.md || $q.screen.lt.sm  ? '' : 'Tambah Lampiran'"
                    icon="add"
                    rounded
                  />
                </div>

              </div>

            </div>

          </q-stepper-navigation>

          <q-separator class="q-mt-md " />
        </q-step>

      </div>

    </q-stepper>
  </div>

</template>

<script>
import { ref, reactive } from "vue";
import { storage } from "src/firebase";
import ImageHandler from './ImageHandler.vue';

export default {
  components: { ImageHandler },

  setup (props, { emit }) {
    const jumlahLampiran = ref([1])
    const step = ref(1)
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

    const imageUploadURL = async () => {
      storage.child(file).getDownloadURL().then((url) => {
        laporan.layer1.image.push(url)
      })

    }

    const onUpload = (event) => {
      if (event.layer == 'Layer 1'){
          laporan.layer1.image.push(event.image[0])

        }else if(event.layer == 'Layer 2') {
          laporan.layer2.image.push(event.image[0])

        }else{
          laporan.hasil.push(event.image[0])

        }
    }

    const tambahLampiran = () => {
      step.value = step.value + 1
      jumlahLampiran.value.push(jumlahLampiran.value.length + 1)
      emit('tambah-lampiran', laporan)

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
      backButtonPressed.value = true
    }


    const hapusLampiran = (index) => {
      jumlahLampiran.value.splice(index, 1)
      // laporan.splice(index, 1)
      emit('hapus-lampiran', index)
      if (step.value >= jumlahLampiran.value.length) {
        backButton()
        console.log('backbutton');
      }
    }

    return {
      onUpload,
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