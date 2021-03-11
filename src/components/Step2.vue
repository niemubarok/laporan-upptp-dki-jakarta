<template>
  <div>
    <q-stepper
      v-model="step"
      flat
      vertical
      color="primary"
      animated
      ref="stepper"
      style="margin-top:-40px;"
      header-nav
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
          <div
            class="row"
            style="margin-top:-20px;"
          >
            <div class="col-4">
              <!-- style="margin-top:-50px;" -->

              <!-- namaPohon -->
              <q-input
                clearable
                standout="bg-blue-10 text-yellow-14"
                v-model="namaPohon"
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
                v-model="namaLatin"
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
                v-model="daun"
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
                v-model="batang"
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
                v-model="akar"
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
                v-model="kecepatanAngin"
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
                v-model="lokasi"
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
                v-model="segmen"
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
                v-model="zona"
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
            <div class="col q-ml-md">

              <div class="text-h6 text-primary">
                <div class="row">
                  <div style="margin-right:10px;">
                    <q-icon name="layers" />
                  </div>Layer 1
                </div>
              </div>
              <q-separator class="q-mb-sm" />

              <q-file
                color="teal"
                filled
                v-model="imagelayer1"
                label="Pilih Gambar"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>

              <!-- diameter-->
              <q-input
                clearable
                standout="bg-blue-10 text-yellow-14"
                v-model="layer1.diameter"
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
                v-model="layer1.tinggi_batang"
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
                v-model="layer1.lingkaran_batang"
                label="Lingkaran Batang"
                dense
                class="q-mt-sm"
              >
                <template v-slot:prepend>
                  <q-icon name="circle" />
                </template>
              </q-input>

            </div>

            <div class="col-4 q-ml-md">
              <!-- layer2 -->
              <div class="text-h6 text-primary">
                <div class="row">
                  <div style="margin-right:10px;">
                    <q-icon name="layers" />
                  </div>Layer 2
                </div>

              </div>
              <q-separator class="q-mb-sm" />

              <q-file
                color="teal"
                filled
                v-model="imagelayer1"
                label="Pilih Gambar"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>

              <!-- diameter-->
              <q-input
                clearable
                standout="bg-blue-10 text-yellow-14"
                v-model="layer1.diameter"
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
                v-model="layer1.tinggi_batang"
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
                v-model="layer1.lingkaran_batang"
                label="Lingkaran Batang"
                dense
                class="q-mt-sm"
              >
                <template v-slot:prepend>
                  <q-icon name="circle" />
                </template>
              </q-input>

            </div>

          </div>

          <div
            class="row justify-end q-ml-sm"
            style="margin-top:-180px;"
          >
            <!-- Kesimpulan-->
            <div class="col-4 q-pa-sm q-pr-md">
              <q-input
                clearable
                filled
                v-model="lokasi"
                label="Kesimpulan"
                class="q-mt-sm"
                type="textarea"
              >
                <template v-slot:prepend>
                  <q-icon name="fact_check" />
                </template>
              </q-input>
            </div>

            <!-- arahan-->
            <div class="col-4 q-mt-sm">
              <q-input
                clearable
                filled
                v-model="lokasi"
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
                  />
                </div>

              </div>

            </div>

          </q-stepper-navigation>

          <q-separator class="q-mt-md" />
        </q-step>

      </div>

    </q-stepper>
  </div>

</template>

<script>
import { ref } from "vue";
import { useQuasar } from 'quasar'

export default {
  // props: [nama_pohon],
  setup () {
    const $q = useQuasar()
    const lampiran = ref([])
    const jumlahLampiran = ref([1])
    const step = ref(1)
    const namaPohon = ref('')
    const namaLatin = ref('')
    const daun = ref('')
    const batang = ref('')
    const akar = ref('')
    const kecepatanAngin = ref('')
    const lokasi = ref('')
    const zona = ref('')
    const segmen = ref('')
    const imagelayer1 = ref(null)
    const layer1 = {
      image: ref(null),
      diameter: null,
      tinggi_batang: null,
      lingkaran_batang: null
    }

    const backButtonPressed = ref(false)
    const layer2 = {
      image: ref(null),
      diameter: '',
      tinggi_batang: 0,
      lingkaran_batang: 0
    }

    const hasil = ref('')

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
    const tambahLampiran = () => {
      step.value = step.value + 1
      jumlahLampiran.value.push(jumlahLampiran.value.length + 1)
      // console.log(jumlahLampiran.value.length);
      // console.log(step.value);

    }

    const hapusLampiran = (index) => {
      jumlahLampiran.value.splice(index, 1)
      if (step.value >= jumlahLampiran.value.length) {
        backButton()
        console.log('backbutton');
      }
    }

    return {
      hapusLampiran,
      nextLampiran,
      backButtonPressed,
      backButton,
      jumlahLampiran,
      lampiran,
      tambahLampiran,
      namaPohon,
      namaLatin,
      daun,
      batang,
      akar,
      kecepatanAngin,
      lokasi,
      zona,
      segmen,
      layer1,
      layer2,
      hasil,
      imagelayer1,
      step

    }
  }

}
</script>

<style>
</style>