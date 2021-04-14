<template>
  <q-input
    standout="bg-dark text-primary"
    label="Search"
    label-color="yellow"
    input-class="text-black "
    input-style="border = 1px solid grey"
    type="search"
    style="width:40%; margin-left:15%"
    class="absolute-top z-max q-mt-sm"
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
  </q-input>
</template>

<script>

import ComponentState from '../global/ComponentState'
export default {

  setup () {
    const { state } = ComponentState

    return {
      state
    }
  }

}
</script>

<style>
</style>