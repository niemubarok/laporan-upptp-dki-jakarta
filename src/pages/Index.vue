<template>
  <q-page>
    <!-- <q-card class="q-pa-xs q-ma-md"> -->
    <surats />
    <!-- <template-laporan /> -->
    <!-- <tes /> -->
    <!-- </q-card> -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Surats from '../components/Surats'

export default defineComponent({
  components: { Surats },
  name: 'PageIndex'
})
</script>
