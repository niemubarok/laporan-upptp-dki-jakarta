<template>

  <!-- <Suspense>
      <template #default>
    <div> -->
  <!-- Search -->

  <!-- <div v-for="data in surat">
    {{data.alamatPohon}}
  </div> -->

  <!-- <div v-if="!$q.screen.lt.sm">

    <search />

  </div> -->

  <!-- <div v-else-if="!state.leftDrawerOpen && $q.screen.lt.sm">
    <search />
  </div> -->

  <div
    :class="$q.screen.lt.sm ? 'q-ma-md ':''"
    class="row"
  >

    <!-- SKELETON -->
    <template v-for="index in 10">
      <q-card
        style="width: 200px;"
        class="q-ma-md"
        flat
        v-if="surat.length == 0"
      >
        <q-skeleton
          height="150px"
          square
        />

        <q-card-section>
          <q-skeleton
            type="text"
            class="text-subtitle1"
          />
          <q-skeleton
            type="text"
            width="50%"
            class="text-subtitle1"
          />
          <q-skeleton
            type="text"
            class="text-caption"
          />
        </q-card-section>
      </q-card>
    </template>

    <!-- Jumlah Surat card -->
    <q-card
      class="bg-yellow items-center q-ma-md"
      :class="$q.screen.lt.sm ? 'full-width q-ma-md ':''"
      style="width:200px; border-radius:20px;"
      v-if="surat.length !== 0"
    >
      <q-img
        src="../../public/img/cardbg.jpg"
        class="full-height"
      >
        <div class="row full-height items-center fullwidth text-center transparent">

          <div class="col ">
            <q-chip
              class="text-h6 text-yellow text-bold"
              style="background-color:#5769f9;"
            >
              Jumlah Surat
            </q-chip>

            <q-chip
              style="background-color:#8abee3;"
              class="text-h6 text-dark text-center text-bold"
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
        class="listCard q-ma-md bg-grey-4 rounded-borders "
        :class="$q.screen.lt.sm ? 'full-width q-ma-md q-ml-md':''"
        style="width:30vh; height:35vh;"
        :style="
        $q.screen.lt.sm
        ? 'height:auto; max-height:30vh'
        :''"
      >

        <span
          @click="dataSurat(data.docId)"
          class="listCard material-icons cursor-pointer text-h6 q-ml-sm absolute-bottom-right "
          style="margin-right:45px;"
        >
          launch
          <q-tooltip>detail</q-tooltip>
        </span>

        <q-fab
          style="margin-right:-15px;margin-bottom:-10px;"
          color="primary"
          flat
          icon="more_vert"
          direction="up"
          class="absolute-bottom-right text-h6 "
        >
          <q-fab-action
            @click="onClick"
            color="amber"
            text-color="black"
            icon="edit"
            external-label
            label-position="left"
            label-class="bg-dark"
          >
            <q-tooltip>
              Edit Surat
            </q-tooltip>
          </q-fab-action>
          <q-fab-action
            color="red"
            text-color="black"
            icon="delete"
            @click="onClick"
          />
        </q-fab>

        <q-card-section
          class="bg-secondary"
          style="border-radius:5px 5px 0 0"
        >

          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label
                  class="text-bold text-h6 "
                  style="text-overflow:ellipsis; overflow: hidden;"
                >No.Surat: {{data.noSurat}}</q-item-label>
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

          <q-card-section side>
            <q-chip
              dense
              text-color="white"
              color="dark"
            >
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
      </q-card>
    </template>

  </div>

</template>

<script>
import DataSurat from '../global/DataSurat'
import { onMounted, ref } from 'vue'
import ComponentState from '../global/ComponentState'
import Search from 'src/components/Search.vue'
import { db } from '../firebase'
import { useRouter, useRoute } from 'vue-router'

export default {
  components: { Search },
  setup () {

    const { state } = ComponentState
    const router = useRouter()
    const surat = ref([])
    const namaPohon = ref('')
    const kesimpulan = ref('')
    const diameter = ref('')
    const urlImage = ref('')
    const alamatPohon = ref('alamat')
    const jumlahLampiran = ref(0)
    const idSurat = ref(null)

    const docRef = db.collection("surat")
      .where("noSurat", "!=", '');
    docRef
      .get()
      .then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = {
              docId: doc.id,
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
          });
        })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dataSurat = (id) => {
      const docId = id

      router.replace({
        name: 'detailSurat',
        params: { id: docId }
      })
    }

    return {
      dataSurat,
      idSurat,
      alamatPohon,
      jumlahLampiran,
      urlImage,
      surat,
      state,
      kesimpulan,
      namaPohon,
      diameter
    }

  }

}
</script>

<style>
.listCard:hover {
  transform: scale(1.1);
}
</style>