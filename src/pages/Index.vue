<template>
  <q-page>
    <q-card class="q-pa-xs q-ma-md">

      <!-- <template-laporan /> -->
      <!-- <tes /> -->
    </q-card>
  </q-page>
</template>

<script>
import TemplateLaporan from 'src/components/TemplateLaporan.vue';
import Tes from 'src/components/tes.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TemplateLaporan, Tes },
  name: 'PageIndex'
})
</script>
