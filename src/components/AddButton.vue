    <!-- :class="!state.miniState" -->
<template>
  <div style="border-radius"></div>
  <q-btn
    color="amber"
    round
    class="addButton q-pa-sm index-top shadow-5"
    glossy
    to="/surat/create"
  >
    <!-- :round="state.miniState" -->
    <!-- v-if="this.$route.fullPath !== '/surat'" -->

    <div class="row">
      <q-tooltip
        v-if="state.miniState == true"
        anchor="center right"
        self="center left"
        :offset="[10, 10]"
      >
        <strong>Buat Surat Baru</strong>
      </q-tooltip>
      <div class="col">

        <q-icon
          color="grey-9"
          name="add"
          size="3em"
        ></q-icon>
        <!-- class="q-ml-sm" -->
      </div>
      <div
        class="col"
        style="margin-top:10px;"
      >

        <!-- <label
          class="text-grey-9"
          v-if="!state.miniState"
        >Tambah</label> -->
      </div>
    </div>
  </q-btn>
</template>

<script>
import ComponentState from '../global/ComponentState'
import { useQuasar } from 'quasar'
export default {

  setup () {
    const $q = useQuasar()
    const { state, step } = ComponentState
    return {
      state, step
    }
  }
}
</script>

<style>
.addButton:hover {
  transform: scale(1.1);
}
</style>