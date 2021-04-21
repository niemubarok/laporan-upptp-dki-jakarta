<template>
  <div
    class="row"
    style="margin:auto"
  >
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

</template>

<script>
export default {
  props: ['surat', 'state']
}
</script>

<style>
</style>