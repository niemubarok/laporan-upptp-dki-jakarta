<template>
  <!-- <div
    v-if="state.seamless"
    class="q-pa-md q-gutter-sm top-left noprint"
  > -->
  <!-- style="margin-bottom:-30vh" -->

  <q-dialog
    v-model="state.seamless"
    seamless
    position="right"
    class="q-mb-xl"
    v-if="tempLaporan.length !== 0 && state.step == 2"
  >

    <q-card
      style="border-radius:20px 0 0 20px"
      class="q-py-none"
    >

      <q-card-section class="row items-center no-wrap">
        <div>
          <div
            v-for="(laporan, index) in tempLaporan"
            :key="index"
            class="text-grey"
          >

            <!-- v-model="laporan" -->
            <q-chip
              removable
              icon-remove="delete"
              @remove="hapusLampiran(index, laporan)"
              color="primary"
              text-color="white"
              class="q-ml-md"
              style="margin-right:-5px;"
            >
              <!-- icon-right="edit" -->
              Laporan {{index + 1}}
            </q-chip>
          </div>
        </div>
      </q-card-section>
      <q-btn
        flat
        round
        icon="close"
        size="1em"
        v-close-popup
        class="absolute-top"
      />
    </q-card>
  </q-dialog>
  <!-- </div> -->
</template>

<script>
import ComponentState from '../../global/ComponentState'
import DataSurat from '../../global/DataSurat'

export default {
  setup () {
    const { state } = ComponentState
    const {
      tempLaporan,
      hapusLampiran,
    } = DataSurat
    return {
      hapusLampiran,
      tempLaporan,
      state

    }
  }
}
</script>

<style>
</style>