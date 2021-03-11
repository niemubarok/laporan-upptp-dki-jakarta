<template>
  <q-page>
    <!-- <template-laporan /> -->
    <tes />
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
