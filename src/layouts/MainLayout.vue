<template>
  <q-img
    src="../../public/img/treebg.jpg"
    class="fixed-top"
    style="opacity:0.5;z-index:-10;height:50vh"
  ></q-img>

  <!-- v-bind:class="{absolute:miniState }" -->

  <q-layout view="HHh Lpr lFf">

    <q-header
      class="bg-primary glossy"
      style="opacity:0.9;height:10.3vh"
    >

      <add-button />

      <q-toolbar>

        <q-btn
          v-if="!$q.screen.lt.md"
          flat
          icon="menu"
          color="warning"
          aria-label="Menu"
          @click="miniState = !miniState"
        />

        <div class="fit row inline wrap justify-end items-start content-start">
          <img
            src=" /img/logojakarta.png"
            style="width:50px; height:60px;margin-right:5px;margin-top:10px;"
          />

          <div class="col-* q-mr-sm q-mt-sm">
            <q-toolbar-title class="text-orange-14 text-h4 text-bold">

              <span v-if="!$q.screen.lt.sm"> UPPTP DKI Jakarta</span>
              <span v-else="!$q.screen.lt.sm"> UPPTP</span>

              <div class="row justify-end q-mb-xs">

                <q-badge
                  color="white"
                  outline
                  v-if="!$q.screen.lt.sm"
                >UNIT PENGELOLA PENGEMBANGAN TANAMAN PERKOTAAN</q-badge>
              </div>
            </q-toolbar-title>
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <!-- Button tambah -->

    <!-- :breakpoint="767" -->

    <div
      style="height:40vh;opacity:0.9;margin-top:10.3vh"
      class="row bg-primary fixed-top"
    >
    </div>
    <!-- <q-footer class="bg-primary">

    </q-footer> -->

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :width="200"
      :mini="miniState"
      :mini-width="60"
      class="bg-primary q-pt-xl"
    >
      <div
        v-if="miniState == false"
        class="q-mini-drawer-hide absolute"
        style="z-index:10;top: 300px; right: -17px"
      >
        <q-btn
          dense
          unelevated
          color="warning"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
      <div v-bind:class="{margintop:miniState}">

        <q-list style="margin-top:27px">

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
            :miniState="miniState"
          />
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />

    </q-page-container>

  </q-layout>

</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import AddButton from 'src/components/AddButton.vue'
import ComponentState from '../global/ComponentState'
// import {ref} from 'vue'

const linksData = [
  {
    title: 'Daftar Surat',
    caption: '',
    icon: 'list',
    link: '/surat'
  },
  {
    title: 'Settings',
    caption: '',
    icon: 'settings',
    link: '/setting'
  }

]

const nextMorphStep = {
  btn: 'card1',
  card1: 'btn'
}

export default {
  name: 'MainLayout',
  components: { EssentialLink, AddButton },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      drawer: false,
      miniState: false,
      tambahText: '',
      text: '',
      autofocus: false,
      morphGroupModel: 'btn'
    }
  },
  methods: {
    nextMorph () {
      this.morphGroupModel = nextMorphStep[this.morphGroupModel]
    }
  },

  setup () {
    const { state } = ComponentState
    console.log(state);

    return {
      state
    }
  }


}
</script>
<style scoped>
/* .treebg {
  background-image: url("../../public/img/treebg.jpg");
  /* background-color:red;" */
/* opacity: 0.5;
} */

@media screen and (min-width: 767px) {
  .q-footer {
    display: none;
  }
}

.q-drawer .q-drawer--left .q-drawer--standard {
  border-radius: 0 20px 20px 0;
}

/* .q-toolbar{
  border-bottom:1px solid white;
} */

.q-item.q-item-type.q-router-link--exact-active {
  background-color: #f5d16c;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  /* margin-top: 20px; */
  /* border:1px 0 solid grey; */
  height: 5px;
}

.q-link.cursor-pointer {
  background-color: #fb7715;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
}

/* .margintop {
  margin-top: 109px;
} */
.q-drawer .q-drawer-container {
  border-radius: 0 20px 0 0;
}

.none {
  display: none;
}
</style>
