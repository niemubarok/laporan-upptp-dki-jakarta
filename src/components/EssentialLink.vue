<template>
  <q-item
    exact
    clickable
    :to="link"
    class="text-white"
  >
    <!-- style="background-color: rgb(29, 53, 77)" -->
    <q-tooltip
      v-if="miniState == true"
      anchor="center right"
      self="center left"
      :offset="[10, 10]"
      class="q-pa-md bg-dark text-grey-2 text-bold"
    >
      <strong>{{title}}</strong>
    </q-tooltip>
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon
        :name="icon"
        size="3em"
        class="text-white"
      >
      </q-icon>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-light">{{ title }}</q-item-label>
      <q-item-label
        v-if="miniState"
        caption
      >
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },
    miniState: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
</style>
