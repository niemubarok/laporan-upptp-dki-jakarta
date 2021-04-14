<template>
  <q-card class="q-py-lg q-ma-md">
    <div id="content">
      <template-laporan />
    </div>

  </q-card>

  <q-btn
    class="fixed-bottom-right bg-primary text-white q-mb-md q-mr-md"
    @click="generateReport"
  >Buat PDF</q-btn>
</template>

<script>
import TemplateLaporan from 'src/components/TemplateLaporan.vue'
import html2pdf from 'html2pdf.js'

import { useQuasar } from 'quasar'

export default {
  components: { TemplateLaporan },
  setup () {

    const $q = useQuasar()
    const generateReport = () => {
      // const arborsonic = document.getElementById('arborsonic')
      const content = document.getElementById('content')

      const opt = {
        margin: [0.5, 0, 0.5, 0],
        filename: 'laporan.pdf',
        pagebreak: { mode: ['css', 'avoid-all'] },
        image: { type: 'jpeg', quality: 1 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      }
      const createPdf = html2pdf().set(opt).from(content).toContainer().toCanvas().toPdf()
      // .then(function (pdf) {
      //   pdf.addPage();
      // }).from(arborsonic).toContainer().toCanvas().toPdf()

      $q.loading.show({
        message: 'Sedang membuat PDF, Mohon Tunggu...',
      })
      setTimeout(() => {
        createPdf.save()
        $q.loading.hide()
      }, 1000)
    }

    return {
      generateReport
    }
  }
}
</script>
