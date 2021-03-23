<template>

  <!-- Search -->

  <!-- <div v-for="data in surat">
    {{data.alamatPohon}}
  </div> -->

  <div v-if="!$q.screen.lt.sm">

    <search />

  </div>

  <div v-else-if="!state.leftDrawerOpen && $q.screen.lt.sm">
    <search />
  </div>

  <div
    :class="$q.screen.lt.sm ? 'q-ma-md ':''"
    class="row"
  >

    <!-- Jumlah Surat card -->
    <q-card
      class="bg-yellow items-center q-ma-md"
      :class="$q.screen.lt.sm ? 'full-width q-ma-md ':''"
      style="width:30vh; border-radius:20px;"
    >
      <q-img
        src="../../public/img/cardbg.jpg"
        class="full-height"
      >
        <div class="row full-height items-center fullwidth text-center transparent">

          <div class="col ">
            <q-chip
              class="text-h5 text-yellow text-bold"
              style="background-color:#5769f9"
            >
              Jumlah Surat
            </q-chip>

            <q-chip
              style="background-color:#8abee3"
              class="text-h5 text-dark text-center text-bold"
            >
              {{surat.length}}
            </q-chip>
          </div>
        </div>
      </q-img>
    </q-card>

    <!-- surat card -->
    <template
      v-for="(data, index) of surat"
      :key="data.surat_id"
    >
      <q-card
        class="listCard q-ma-md bg-grey-4 rounded-borders cursor-pointer"
        :class="$q.screen.lt.sm ? 'full-width q-ma-md q-ml-md':''"
        style="width:30vh; height:35vh;display:relative"
        :style="$q.screen.lt.sm ? 'height:auto; max-height:30vh':''"
      >

        <q-fab
          style="margin-right:-15px;margin-bottom:-10px"
          color="primary"
          flat
          icon="more_vert"
          direction="up"
          class="absolute-bottom-right text-h6"
        >
          <q-fab-action
            color="amber"
            text-color="black"
            @click="onClick"
            icon="edit"
            label="Edit Surat"
            external-label
            label-position="left"
            label-class="bg-dark"
          />
          <q-fab-action
            color="red"
            text-color="black"
            @click="onClick"
            icon="delete"
          />
        </q-fab>

        <!-- <q-img
          :src="urlImage"
          style="border-radius:4px 4px 0 0;max-height:150px;"
        >
          <div
            class="fixed-bottom text-white q-pl-sm"
            style="background-color:rgba(43, 103, 171, 0.4)"
          >
            {{namaPohon}}
          </div>
        </q-img> -->

        <q-card-section
          class="bg-secondary"
          style="border-radius:5px 5px 0 0"
        >
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold text-h6">No.Surat: {{data.noSurat}}</q-item-label>
                <q-item-label>Ka.Unit: {{data.namaKaUnit}}</q-item-label>
              </q-item-section>

            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section>

          <div class="row no-wrap items-center q-mb-sm">

            <div class="col-auto text-grey-6 items-center">
              <div class="row no-wrap items-start">
                <q-icon
                  size="20px"
                  name="place"
                  style="margin-top:-5px;"
                />
                <q-item-label
                  lines="1"
                  style="margin-left:-3px;"
                >
                  {{data.alamatPohon}}
                </q-item-label>
              </div>

            </div>
          </div>
          <q-separator stretch />
        </q-card-section>

        <div class="row no-wrap absolute-bottom-left items-start fullwidth">
          <!-- <q-card-section>
            <q-chip
              dense
              text-color="white"
              color="dark"
              outline
            >
              <q-tooltip>
                diameter
              </q-tooltip>
              <q-avatar text-color="white">
                <q-icon
                  name="album"
                  color="grey-10"
                />
              </q-avatar>
              {{diameter}}
            </q-chip>
          </q-card-section> -->

          <q-card-section side>
            <!-- style="margin-left:-10px;" -->
            <q-chip
              dense
              text-color="white"
              color="dark"
            >
              <!-- class="q-pr-md" -->
              <!-- outline -->
              <!-- class="absolute-bottom" -->
              <!-- style="margin-left:-10px;" -->
              <q-tooltip>
                Jumlah Lampiran
              </q-tooltip>
              <q-avatar
                color="orange-14"
                text-color="white"
              >
                <span class="text-bold"> {{data.laporan.length}} </span>
              </q-avatar>
              Lampiran
            </q-chip>
          </q-card-section>
        </div>

        <!-- <q-separator class="q-mt-sm" /> -->
        <!-- {{data.laporan.imageLayer2}} -->
      </q-card>
      <!-- </template> -->
    </template>

  </div>

</template>

<script>
import DataSurat from '../global/DataSurat'
import { onMounted, ref } from 'vue'
import ComponentState from '../global/ComponentState'
import Search from 'src/components/Search.vue'
import { db } from '../firebase'

export default {
  components: { Search },
  setup () {
    // const { surat } = DataSurat
    const { state } = ComponentState

    const surat = ref([])
    const namaPohon = ref('')
    const kesimpulan = ref('')
    const diameter = ref('')
    const urlImage = ref('')
    const alamatPohon = ref('alamat')
    const jumlahLampiran = ref(0)
    const idSurat = ref(null)

    onMounted(() => {

      console.log('mounted');
      const docRef = db.collection("surat")
        .where("noSurat", "!=", '');
      docRef.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = {
              alamatPohon: doc.data().alamatPohon,
              kelurahan: doc.data().kelurahan,
              noSurat: doc.data().noSurat,
              namaKaUnit: doc.data().namaKaUnit,
              noSurat: doc.data().noSurat,
              tglSurat: doc.data().tglSurat,
              tglTerimaSurat: doc.data().tglTerimaSurat,
              laporan: doc.data().laporan
            }
            surat.value.push(data)
            // console.log(data.laporan);
          });
        })
        .catch((error) => {
          // console.log("Error getting documents: ", error);
        });

    })

    return {
      idSurat,
      alamatPohon,
      jumlahLampiran,
      urlImage,
      surat,
      state,
      kesimpulan,
      namaPohon,
      diameter,
      // // fromDB,

      // contentStyle: {
      //   backgroundColor: 'rgba(0,0,0,0.02)',
      //   color: '#555'
      // },

      // contentActiveStyle: {
      //   backgroundColor: '#eee',
      //   color: 'black'
      // },

      // thumbStyle: {
      //   right: '2px',
      //   borderRadius: '5px',
      //   backgroundColor: '#027be3',
      //   width: '5px',
      //   opacity: 0.75
      // }
    }

  }

}
</script>

<style>
.listCard:hover {
  transform: scale(1.1);
}
</style>