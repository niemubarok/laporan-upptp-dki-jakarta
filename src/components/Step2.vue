<template>
  <list-laporan-on-form />

  <!-- <div>{{ tempLaporan[0]}}</div> -->

  <div
    class="row "
    style="margin-top:-25px;"
  >
    <!-- :style="$q.screen.lt.sm ? 'margin-left:5px':''" -->
    <!-- <template v-for="modelLaporan in modelLaporan"> -->
    <q-card
      flat
      class="q-pa-sm"
      :class="$q.screen.lt.sm ? 'full-width q-mt-sm':''"
      style="width:50%"
    >
      <!--
        namaPohon
        -->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="modelLaporan.namaPohon"
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
        v-model="modelLaporan.namaLatin"
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
        v-model="modelLaporan.daun"
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
        v-model="modelLaporan.batang"
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
      class="q-pa-sm"
      style="width:50%"
      :class="$q.screen.lt.sm ? 'full-width q-mt-sm':''"
    >

      <!-- akar-->
      <q-input
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="modelLaporan.akar"
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
        v-model="modelLaporan.kecepatanAngin"
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
        v-model="modelLaporan.lokasi"
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
        v-model="modelLaporan.segmen"
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
        v-model="modelLaporan.zona"
        label="Zona"
        dense
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="bubble_chart" />
        </template>
      </q-input>
    </q-card>

    <!-- <template v-for="(layer1, key) in temp.layer1" -->

    <!-- layer1 -->
    <q-card
      flat
      class="q-pa-sm  q-mt-xs q-ml-x"
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
        <!-- @on-upload="onUpload" -->
        <image-handler
          layer="Layer 1"
          maxWidth="max-width:100%"
        />
      </div>

      <!-- diameter-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="modelLaporan.diameterLayer1"
        label="Diameter"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="trip_origin" />
        </template>
      </q-input>

      <!-- tinggiBatang-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="modelLaporan.tinggiBatangLayer1"
        label="Tinggi Batang"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="arrow_upward" />
        </template>
      </q-input>

      <!-- lingkaranBatang-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="modelLaporan.lingkaranBatangLayer1"
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
      class="q-pa-sm  q-ml-xs q-mt-x"
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
        <!-- @on-upload="onUpload" -->
        <image-handler
          layer="Layer 2"
          maxWidth="max-width:100%"
        />
      </div>
      <div
        class="q-mt-sm"
        v-if="$q.screen.lt.sm"
      >

        <!-- @on-upload="onUpload" -->
        <image-handler
          layer="Hasil"
          maxWidth="max-width:200px"
        />
      </div>

      <!-- diameter-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="modelLaporan.diameterLayer2"
        label="Diameter"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="trip_origin" />
        </template>
      </q-input>

      <!-- tinggiBatang-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="modelLaporan.tinggiBatangLayer2"
        label="Tinggi Batang"
        class="q-mt-sm"
      >
        <template v-slot:prepend>
          <q-icon name="arrow_upward" />
        </template>
      </q-input>

      <!-- lingkaranBatang-->
      <q-input
        dense
        clearable
        standout="bg-blue-10 text-yellow-14"
        v-model="modelLaporan.lingkaranBatangLayer2"
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
      class="q-pa-sm  q-ma-x"
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
        <!-- @on-upload="onUpload" -->
        <image-handler
          layer="Hasil"
          maxWidth="max-width:100%"
        />
      </div>

      <!-- Kesimpulan-->
      <q-input
        clearable
        autogrow
        filled
        v-model="modelLaporan.kesimpulan"
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
        v-model="modelLaporan.arahan"
        label="Instruksi / Arahan"
        class="q-mt-sm"
        type="textarea"
      >
        <template v-slot:prepend>
          <q-icon name="wb_incandescent" />
        </template>
      </q-input>

      <!-- <q-page-sticky
        position="bottom-right"
        :offset="[70, 70]"
        class="z-top"
      >
      </q-page-sticky> -->

      {{tempLaporan}}
      <hr>
      {{modelLaporan.imageLayer2}}
      <hr>
      {{modelLaporan.hasil}}
      <!-- tombol tambah lampiran -->
    </q-card>
    <!-- </template> -->

  </div>

  <q-btn
    v-if="state.step > 1"
    @click="[simpanLampiran(), state.seamless = true]"
    fab
    icon="save"
    color="orange-14"
    style="right:160px;"
    class=" absolute-bottom-right z-top q-mb-sm"
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
  </q-btn>

</template>

<script>
import ImageHandler from './ImageHandler.vue';
import DataSurat from '../global/DataSurat'
import ListLaporanOnForm from 'components/modals/ListLaporanOnForm'
import ComponentState from '../global/ComponentState'

export default {
  components: { ListLaporanOnForm, ImageHandler },

  setup () {

    const { state } = ComponentState
    const {
      tempLaporan,
      modelLaporan,
      laporan,
      simpanLampiran,
      hapusLampiran,
      surat
    } = DataSurat

    return {
      tempLaporan,
      hapusLampiran,
      laporan,
      simpanLampiran,
      state,
      modelLaporan,
      surat

    }
  }

}
</script>

<style>
</style>