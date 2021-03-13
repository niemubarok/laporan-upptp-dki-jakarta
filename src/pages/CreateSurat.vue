<template>
  <!-- <div>

    <q-card class="q-ma-lg">
      <li>{{surat.laporan}}</li>
      <q-input v-model="laporan.namaPohon"></q-input>
      <q-input v-model="laporan.namaLatin"></q-input>
      <q-btn @click="tambahLampiran()">tes</q-btn>
    </q-card>

  </div> -->
  <!-- <q-card class="q-pa-md"> -->
  <q-form
    @submit="onSubmit"
    class="q-gutter-sm"
  >
    <q-stepper
      v-model="step"
      ref="stepper"
      color="secondary"
      animated
      done-color="green-10"
      keep-alive
      :contracted="$q.screen.lt.sm"
    >
      <q-step
        :name="1"
        title="Detail Surat"
        icon="assignment"
        :done="step > 1"
      >
        <!-- caption="Lengkapi detail surat berikut" -->

        <div class="row">
          <div
            class="q-gutter-sm q-mr-md"
            :class="$q.screen.lt.sm ? 'full-width':''"
          >

            <!-- no surat -->
            <q-input
              clearable
              standout="bg-blue-10 text-yellow-14"
              v-model="surat.noSurat"
              label="Nomor Surat"
              dense
              class="q-mt-sm "
              autofocus
            >
              <template v-slot:prepend>
                <q-icon name="tag" />
              </template>
            </q-input>

            <!-- jumlahLampiran  -->
            <!-- <q-input
              standout="bg-blue-10 text-yellow-14"
              v-model="surat.jumlahLampiran"
              label="Jumlah Lampiran"
              dense
              class="q-mt-sm"
              clearable
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-input> -->

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
                      :locale="localDate"
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
              dense
              class="q-mt-sm q-ml-sm"
              :class="$q.screen.lt.sm ? 'q-mb-sm':''"
            >
              <template v-slot:prepend>
                <q-icon name="home_work" />
              </template>
            </q-input>
          </div>

          <div
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
              dense
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
                      :locale="localDate"
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
              dense
              class="q-mt-sm q-mb-md"
            >
              <template v-slot:prepend>
                <q-icon name="account_box" />
              </template>
            </q-input>
          </div>
          <div
            class="q-gutter-sm"
            :class="$q.screen.lt.sm ? 'full-width q-ml-md':''"
          >

            <!-- lokasiPohon -->
            <q-input
              clearable
              filled
              v-model="surat.alamatPohon"
              label="Alamat Pemohon / Lokasi Pohon"
              dense
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
        :done="step > 2"
      >
        <!-- caption="Masukan detail laporan" -->
        <step-2
          @tambah-lampiran="tambahLampiran"
          @hapus-lampiran="hapusLampiran"
        />

      </q-step>

      <q-step
        :name="3"
        title="Finish"
        caption="Download Laporan"
        icon="download"
      >

        <q-btn @click="submitSurat">
          submit
        </q-btn>
        <!-- <step-3>
        </step-3> -->
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <div class="column">
            <div class="q-gutter-sm self-end text-secondary">
              <!-- @click="next()" -->
              <!-- , submitSurat() -->
              <q-btn
                @click="[$refs.stepper.next()
                 ]"
                color="primary"
                text-color="secondary"
                :label="step === 3 ? 'Selesai' : 'Selanjutnya'"
              >
                <!-- icon-right="navigate_next" -->
                <q-icon
                  v-if="step !== 3"
                  name="navigate_next"
                />
              </q-btn>
              <q-btn
                v-if="step > 1"
                flat
                color="primary"
                @click="$refs.stepper.previous()"
                label="Kembali"
                class="q-ml-sm"
              />
            </div>

            <!-- v-for="letter in surat"
              :key="letter" -->
            <div>
              <!-- <template v-for="report in letter">
              {{letter}}
              </template> -->

              <!-- {{surat.laporan}} -->

            </div>

          </div>
        </q-stepper-navigation>
      </template>

    </q-stepper>

  </q-form>
  <!-- </q-card> -->
</template>
<script>
import { useQuasar } from 'quasar'
import { reactive, ref, onBeforeMount } from 'vue'
import { createSurat } from 'src/db/surat'
import { db } from "src/firebase";
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'

export default {
  components: {
    Step2,
    Step3
  },
  setup () {

    const $q = useQuasar()
    // const laporan_id = ''

    // const laporan = reactive({
    //   namaPohon: '',
    //   namaLatin: '',
    //   daun: '',
    //   batang: '',
    //   akar: '',
    //   kecepatanAngin: '',
    //   lokasi: '',
    //   zona: '',
    //   segmen: '',
    //   layer1: {
    //     image: ref(null),
    //     diameter: null,
    //     tinggi_batang: null,
    //     lingkaran_batang: null
    //   },
    //   layer2: {
    //     image: ref(null),
    //     diameter: null,
    //     tinggi_batang: null,
    //     lingkaran_batang: null
    //   }
    // })

    const surat = reactive({
      surat_id: null,
      noSurat: '',
      tglSurat: '',
      kelurahan: '',
      noSPIPP: '',
      namaKaUnit: '',
      alamatPohon: '',
      tanggalTerimaSurat: '',
      jumlahLampiran: '',
      laporan: [],
      hasil: '',
      kesimpulan: ''
    })

    const lampiran = ref([])

    // menambahkan lampiran ke dalam array untuk nanti dipush ke firebase
    const tambahLampiran = async (event) => {
      // lampiran.value.push({ ...laporan })
      surat.laporan.push({ ...event })
    }

    const hapusLampiran = async (event) => {
      surat.laporan.splice(event, 1)
      console.log(event);
    }


    // ambil id terakhir
    const currentId = () => {
      const id = db.collection('surat').doc('count')
        .onSnapshot((querySnapshot => {

          const data = {

            surat_id: querySnapshot.data().surat_id + 1,
            laporan_id: querySnapshot.data().laporan_id + 1,
          }
          surat.surat_id = data.surat_id
          // laporan_id = data.laporan_id
          console.log(surat.surat_id);
        }))
      // return id
    }

    // setTimeout(() => {
      console.log(surat.surat_id);

    // }, 3000


    // )


    // console.log(laporan_id);

    const submitSurat = async () => {
      try {
        await createSurat({ ...surat })
        db.collection('surat').doc('count').update({
          surat_id: surat.surat_id,
          // laporan_id: laporan_id.value

          
        }).then(() => {
          console.log('sukses');
        }).catch((e) => {
          console.log(e);
        })

        $q.notify('berhasil disimpan')

        // surat.surat_id = ''
        // surat.noSurat = ''
        // surat.tglSurat = ''
        // surat.kelurahan = ''
        // surat.noSPIPP = ''
        // surat.namaKaUnit = ''
        // surat.alamatPohon = ''
        // surat.tanggalTerimaSurat = ''
        // surat.jumlahLampiran = ''
      } catch (error) {
        console.log(error);
      }
    }

    const onSubmit = async () => {
      try {
        await createSurat({ ...surat })
        surat.id = ''
        surat.surat_id = ''
        surat.noSurat = ''
        surat.tglSurat = ''
        surat.kelurahan = ''
        surat.noSPIPP = ''
        surat.namaKaUnit = ''
        surat.alamatPohon = ''
        surat.tanggalTerimaSurat = ''
        surat.jumlahLampiran = ''
      } catch (error) {
        console.log(error);
      }


    }

    onBeforeMount(() => {
      currentId()
    })

    return {
      lampiran,
      // laporan,
      hapusLampiran,
      tambahLampiran,
      surat,
      onSubmit,
      step: ref(1),
      submitSurat,
      currentId,

      localDate: {
        /* starting with Sunday */
        days: 'Minggu_Senin_Selasa_Rabu_Kamis_Jum\'at_Sabtu'.split('_'),
        daysShort: 'Minggu_Senin_Selasa_Rabu_Kamis_Jum\'at_Sabtu'.split('_'),
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        firstDayOfWeek: 1
      },
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