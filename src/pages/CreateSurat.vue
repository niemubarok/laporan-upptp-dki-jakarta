<template>

  <q-form
    @submit="submitSurat"
    class="q-gutter-sm"
  >
    <div style="height:30vh;margin-top:4vh;">
      <q-card
        class="bg-grey-4"
        style="border-radius:20px;"
        :class="$q.screen.lt.sm ? 'q-ma-sm':'q-ma-xl'"
      >
        <q-stepper
          v-model="state.step"
          ref="stepper"
          color="secondary"
          animated
          done-color="green-10"
          active-color="orange-14"
          keep-alive
          :contracted="$q.screen.lt.sm"
          flat
          dense
          bordered
          class="fullwidth full-height z-top"
          header-class="bg-secondary text-white"
        >
          <!-- style="margin-bottom:-150px" -->
          <!-- header-class="bg-orange-14" -->
          <!-- class="absolute-full" -->
          <!-- active-icon="add" -->
          <q-step
            :name="1"
            title="Detail Surat"
            icon="assignment"
            :done="state.step > 1"
          >
            <!-- caption="Lengkapi detail surat berikut" -->

            <div
              class="row"
              style="margin:auto"
            >
              <!-- style="margin-top:-20px;" -->
              <div
                style="width:30%"
                class="q-gutter-sm q-mr-md"
                :class="$q.screen.lt.sm ? 'full-width':''"
              >

                <!-- no surat -->
                <q-input
                  clearable
                  standout="bg-blue-10 text-yellow-14"
                  v-model="surat.noSurat"
                  label="Nomor Surat"
                  class="q-mt-sm "
                  autofocus
                >
                  <template v-slot:prepend>
                    <q-icon name="tag" />
                  </template>
                </q-input>

                <!-- tanggal Surat -->
                <q-input
                  standout="bg-blue-10 text-yellow-14"
                  v-model="surat.tglSurat"
                  :shadow-text="surat.tglSurat == '' ? '< Klik ikon kalender untuk pilih tanggal' : '' "
                  label-slot
                  clearable
                  class="q-mt-sm cursor-pointer"
                >
                  <template v-slot:label>
                    Tanggal Surat / Pemeriksaan Pohon
                  </template>

                  <template v-slot:prepend>
                    <q-icon
                      name="event"
                      class="cursor-pointer"
                    >
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="surat.tglSurat"
                          :locale="state.localDate"
                          mask="DD MMMM YYYY"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>

                </q-input>

                <!-- kelurahan -->
                <q-input
                  clearable
                  standout="bg-blue-10 text-yellow-14"
                  v-model="surat.kelurahan"
                  label="Kelurahan PMPTSP"
                  class="q-mt-sm q-ml-sm"
                  :class="$q.screen.lt.sm ? 'q-mb-sm':''"
                >
                  <template v-slot:prepend>
                    <q-icon name="home_work" />
                  </template>
                </q-input>
              </div>

              <div
                style="width:30%"
                class="q-gutter-sm q-mr-lg"
                :class="$q.screen.lt.sm ? 'full-width':''"
              >
                <!-- no spipp -->
                <q-input
                  clearable
                  standout="
            bg-blue-10
            text-yellow-14"
                  v-model="surat.noSPIPP"
                  label="No. Surat  Permohonan Izin Penebangan Pohon"
                  class="q-mt-sm"
                >
                  <template v-slot:prepend>
                    <q-icon name="tag" />
                  </template>
                </q-input>

                <!-- Tanggal Terima -->
                <q-input
                  standout="bg-blue-10 text-yellow-14"
                  v-model="surat.tanggalTerimaSurat"
                  :shadow-text="surat.tanggalTerimaSurat == '' ? '< Klik ikon kalender untuk pilih tanggal' : '' "
                  label-slot
                  clearable
                  class="q-mt-sm"
                >
                  <template v-slot:label>
                    Tanggal Terima Surat
                  </template>

                  <template v-slot:prepend>
                    <q-icon
                      name="event"
                      class="cursor-pointer"
                    >
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="surat.tanggalTerimaSurat"
                          :locale="state.localDate"
                          mask="DD MMMM YYYY"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>

                </q-input>

                <!-- //nama ka unit -->
                <q-input
                  clearable
                  standout="bg-blue-10 text-yellow-14"
                  v-model="surat.namaKaUnit"
                  label="Nama Ka Unit"
                  class="q-mt-sm q-mb-md"
                >
                  <template v-slot:prepend>
                    <q-icon name="account_box" />
                  </template>
                </q-input>
              </div>
              <div
                style="width:30%"
                class="q-gutter-sm"
                :class="$q.screen.lt.sm ? 'full-width q-ml-md':''"
              >

                <!-- lokasiPohon -->
                <q-input
                  clearable
                  filled
                  v-model="surat.alamatPohon"
                  label="Alamat Pemohon / Lokasi Pohon"
                  class="q-mt-sm"
                  type="textarea"
                >
                  <template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                </q-input>

              </div>
            </div>

          </q-step>

          <q-step
            :name="2"
            title="Detail Lampiran"
            icon="create_new_folder"
            :done="state.step > 2"
          >
            <!-- caption="Masukan detail laporan" -->
            <div class="z-top">

              <step-2 />
            </div>
            <!-- :scroll-info="scrollInfo" -->

          </q-step>

          <q-step
            :name="3"
            title="Finish"
            caption="Download Laporan"
            icon="download"
          >

            <!-- <q-btn @click="submitSurat">
              submit
            </q-btn> -->
            <step-3>
            </step-3>
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <div class="column">
                <div class="q-gutter-sm self-end text-secondary">
                  <q-btn
                    @click="nextStep"
                    color="primary"
                    text-color="secondary"
                    :label="state.step === 3 ? 'Submit' : 'Selanjutnya'"
                    rounded
                    class=" fixed-bottom-right z-top q-mb-md"
                    :class="!$q.screen.lt.md ? 'absolute-bottom-right' : '' "
                    :disable="modelLaporan.namaPohon !== '' && modelLaporan.kesimpulan !== '' &&state.step == 2 || Object.keys(tempLaporan).length == 0 && state.step == 2"
                  >
                    <!-- :disable="Object.keys(tempLaporan).length == 0 && state.step == 2" -->
                    <q-icon
                      v-if="state.step !== 3"
                      name="navigate_next"
                    />

                    <!-- self="top" -->
                    <q-tooltip
                      class="bg-red text-center"
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                      v-if="Object.keys(tempLaporan).length == 0 && state.step == 2"
                    >
                      Silahkan isi minimal 1 lampiran / klik simpan terlebih dahulu
                    </q-tooltip>

                    <q-tooltip
                      class="bg-red"
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                      v-else-if="modelLaporan.namaPohon !== '' && modelLaporan.kesimpulan !== '' &&state.step == 2"
                    >
                      Silahkan save terlebih dahulu laporan yang telah diisi
                    </q-tooltip>
                  </q-btn>

                  <!-- <q-btn
                    v-if="state.step > 1"
                    @click="[simpanLampiran(), state.seamless = true]"
                    fab
                    icon="save"
                    color="orange-14"
                    style="right:160px"
                    class=" fixed-bottom-right z-top q-mb-sm"
                    :class="!$q.screen.lt.md ? 'absolute-bottom-right' : '' "
                  >
                    <q-tooltip
                      anchor="top middle"
                      self="bottom middle"
                      class="bg-indigo"
                      :offset="[10, 10]"
                    >
                      SIMPAN LAMPIRAN
                    </q-tooltip>
                  </q-btn> -->

                  <q-btn
                    v-if="state.step > 1"
                    color="blue-10"
                    @click="$refs.stepper.previous()"
                    icon="navigate_before"
                    size="sm"
                    rounded
                    style="right:220px"
                    class=" fixed-bottom-right z-top q-mb-md"
                    :class="!$q.screen.lt.md ? 'absolute-bottom-right' : '' "
                  />
                  <!-- label="Kembali" -->

                  <!-- </q-page-sticky> -->
                </div>
                <div>
                </div>

              </div>
            </q-stepper-navigation>
          </template>

        </q-stepper>

        <q-img
          src="../../public/img/cardbg.jpg"
          style="width:100%; height:10vh; z-index:1 "
        >
        </q-img>
      </q-card>
    </div>
  </q-form>

</template>
<script>
import { useQuasar } from 'quasar'
import { computed, onBeforeMount } from 'vue'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'
import DataSurat from '../global/DataSurat'
import ComponentState from '../global/ComponentState'

export default {
  components: {
    Step2,
    Step3,
    DataSurat
  },
  setup () {
    const { state } = ComponentState
    const $q = useQuasar()
    const {
      modelLaporan,
      surat,
      tempLaporan,
      tempImageURL,
      // simpanLampiran,
      submitSurat,
      currentId, } = DataSurat

    onBeforeMount(() => {
      currentId()
    })

    const nextStep = computed(() => {
      if (state.step <= 2) {
        state.step = state.step + 1
      } else if (state.step == 3) {
        submitSurat()
      }
    })

    return {
      modelLaporan,
      surat,
      tempLaporan,
      tempImageURL,
      // simpanLampiran,
      // onSubmit,
      submitSurat,
      // currentId,
      state,
      nextStep


    }
  }
}
</script>

<style>
</style>


 // const tambahLaporan = async () => {
    //   await createLetters({ ...letters })
    //   id = ''
    //   surat_id = ''
    //   noSurat = ''
    //   tglSurat = ''
    //   kelurahan = ''
    //   noSPIPP = ''
    //   namaKaUnit = ''
    //   alamatPohon = ''
    //   tanggalTerimaSurat = ''
    //   jumlahLampiran = ''
    // }
        // const noSurat = ref('')
        // const tglSurat = ref('')
        // const kelurahan = ref('')
        // const noSPIPP = ref('')
        // const tanggalTerimaSurat = ref('')
        // const namaKaUnit = ref('')
        // const lokasiPohon = ref('')
        // const tanggalTerimaSurat = ref('')
        // const jumlahLampiran = ref('')