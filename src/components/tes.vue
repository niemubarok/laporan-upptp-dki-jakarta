<template>
  <q-page>

    <div style="width:500px; margin:auto">
      <q-card class="q-pa-xl q-mt-xl">

        {{surat.nomor}}

        <form>
          <q-input v-model="surat.nomor"></q-input>
          <q-input v-model="surat.tanggal"></q-input>
        </form>
        <q-btn @click.prevent="onSubmit()">create</q-btn>
      </q-card>
    </div>
  </q-page>

</template>

<script>
// import { detailSurat } from 'src/store/surat/getters'; 
import { reactive } from 'vue'
import { createSurat } from 'src/db/surat'

export default {
  setup () {
    const surat = reactive({
      nomor: '',
      tanggal: ''
    })

    const onSubmit = async () => {
      try {
        await createSurat({ ...surat })
        surat.nomor = ''
        surat.tanggal = ''
      } catch (error) {
        console.log(error);
      }


    }

    return {
      surat,
      onSubmit
    }
  }

}

  // setup () {

  //   // const store = useStore()

  //   const fetchSurat = computed(() => {
  //     // store.dispatch('surat/fetchSurat')
  //     // console.log(store.state.surat);
  //     root.$store.dispatch('surat/fetchSurat')
  //   })
  //   console.log(fetchSurat);

  //   return {
  //     fetchSurat,
  //   }
  // }

</script>

<style>
</style>