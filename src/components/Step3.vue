<template>
  <div>
    <q-list>
      <q-item>
        <q-item-section
          top
          thumbnail
          class="q-ml-none"
        >
          <slot></slot>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <slot></slot>
          </q-item-label>
          <q-item-label>
            <slot></slot>
          </q-item-label>
        </q-item-section>
        <q-item-section
          side
          top
        >
          <q-item-label caption>meta</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>