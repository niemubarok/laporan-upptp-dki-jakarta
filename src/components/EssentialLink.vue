<template>
  <q-item
    exact
    clickable
    :to="link"
  >
    <q-tooltip
      v-if="miniState == true"
      anchor="center right"
      self="center left"
      :offset="[10, 10]"
    >
      <strong>{{title}}</strong>
    </q-tooltip>
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon">
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
