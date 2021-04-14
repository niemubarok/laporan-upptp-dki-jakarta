<template>
  <q-img
    src="../../public/img/tree.png"
    class="fixed-top"
    style="opacity:1;z-index:-10;height:50vh"
  ></q-img>

  <q-img
    src="../../public/img/cardbg.jpg"
    class="fixed-bottom"
    style="opacity:0.4;z-index:-10;height:50vh"
  ></q-img>

  <!-- v-bind:class="{absolute:miniState }" -->

  <q-layout view="lHh Lpr lFf">

    <q-header
      class="bg-primary"
      style="opacity:0.8;height:10.3vh"
    >

      <q-toolbar>
        <q-btn
          flat
          icon="menu"
          color="warning"
          aria-label="Menu"
          @click="[state.miniState = !state.miniState, state.leftDrawerOpen = !state.leftDrawerOpen ]"
          v-if="!$q.screen.lt.md"
        />

        <q-btn
          flat
          icon="menu"
          color="warning"
          aria-label="Menu"
          @click="state.leftDrawerOpen = !state.leftDrawerOpen"
          v-else="!$q.screen.lt.md"
        />

        <!-- SearchBox -->
        <!-- <div v-if="this.$route.fullPath == 'surat'"> -->

        <!-- <q-input
          standout="bg-dark text-primary"
          label="Search"
          class="full-width"
          label-color="yellow"
          input-class="text-black "
          input-style="border = 1px solid grey"
          type="search"
        >
          <template v-slot:append>
            <q-icon
              v-if="state.text === ''"
              name="search"
              color="yellow"
            />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="state.text = ''"
            />
          </template>
        </q-input> -->
        <!-- </div> -->
        <!-- <q-page-sticky
          position="top-left"
          :offset="[-50, 200]"
          class="index-top addButton"
        > -->
        <add-button />
        <!-- </q-page-sticky> -->

        <div class="fit row inline wrap justify-end items-start content-start">
          <img
            src=" /img/logojakarta.png"
            style="width:50px; height:60px;margin-right:5px;margin-top:10px;"
          />

          <div class="col-* q-mr-sm q-mt-sm">
            <q-toolbar-title class="text-orange-14 text-h4 text-bold">

              <span v-if="!$q.screen.lt.md"> UPPTP DKI Jakarta</span>
              <span v-else="!$q.screen.lt.sm"> UPPTP</span>

              <div class="row justify-end q-mb-xs">

                <q-badge
                  color="white"
                  outline
                  v-if="!$q.screen.lt.md"
                >UNIT PENGELOLA PENGEMBANGAN TANAMAN PERKOTAAN</q-badge>
              </div>
            </q-toolbar-title>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <div
      style="height:40vh;opacity:0.8;margin-top:10.3vh"
      class="row bg-primary fixed-top"
    >
    </div>

    <q-drawer
      show-if-above
      v-model="state.leftDrawerOpen"
      :width="200"
      :mini="state.miniState"
      :mini-width="70"
      class="q-pt-xl bg-dark z-top"
      :overlay="$q.screen.lt.md"
    >
      <div
        v-if="state.miniState == false"
        class="q-mini-drawer-hide absolute"
        style="z-index:10;bottom: 100px; right: -17px"
      >
        <q-btn
          dense
          unelevated
          round
          color="primary"
          icon="chevron_left"
          @click="state.miniState = true"
          v-if="state.miniState == false"
        />
      </div>

      <div
        v-if="state.miniState == true"
        class="q-mini-drawer-hide absolute"
        style="z-index:10;bottom: 100px; right: 1px"
      >
        <q-btn
          dense
          unelevated
          round
          color="primary"
          icon="chevron_left"
          @click="state.miniState = false"
          v-if="state.miniState == true"
        />
      </div>

      <div
        class="q-ma-sm"
        style="border-radius:10px;background-color:rgb(43, 103, 171, 0.3)"
      >
        <div :class="{margintop:state.miniState}">

          <q-list style="margin-top:27px">

            <EssentialLink
              v-for="link in state.essentialLinks"
              :key="link.title"
              v-bind="link"
              :miniState="state.miniState"
            />
          </q-list>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
      <!-- <keep-alive> -->
      <router-view v-slot="{ Component }">
        <!-- <suspense> -->
        <component :is="Component" />
        <!-- </suspense> -->
      </router-view>
      <!-- </keep-alive> -->

    </q-page-container>

  </q-layout>

</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import AddButton from 'src/components/AddButton.vue'
import ComponentState from '../global/ComponentState'
// import {ref} from 'vue'

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
    AddButton
    // EssentialLink: () => import('components/EssentialLink.vue'),
    // AddButton: () => import('src/components/AddButton')
  },
  setup () {
    const { state } = ComponentState
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

/* @media screen and (min-width: 767px) {
  .q-footer {
    display: none;
  }
} */

.q-drawer .q-drawer--left .q-drawer--standard {
  border-radius: 0 20px 20px 0;
}

/* .q-toolbar{
  border-bottom:1px solid white;
} */

.q-item.q-item-type.q-router-link--exact-active {
  /* background-color: #f5d16c; */
  /* border-radius: 5px; */
  /* margin-left: 10px;
  margin-right: 10px; */
  /* margin-top: 20px; */
  /* border:1px 0 solid grey; */
  height: 5px;
}

/* background-color: #fb7715; */
.q-link.cursor-pointer {
  /* border-radius: 5px; */
  /* margin-left: 15px;
  margin-right: 15px; */
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
