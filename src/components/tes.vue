<template>
  <div>
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >

      <h2>tes</h2>

    </transition>

    <q-input
      type="date"
      v-model="date"
      placeholder="select date"
    />

    {{state.miniState}}

    <q-btn
      @click="state.miniState = !state.miniState "
      label="minState"
    />
  </div>
</template>

<script>
import gsap from 'gsap'
import ComponentState from '../global/ComponentState'

export default {
  setup () {
    const { state } = ComponentState
    const date = ''
    const beforeEnter = (el) => {
      console.log('initial state');
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0

    }

    const enter = (el) => {
      console.log('enter');
      gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1
      })

    }
    return {
      beforeEnter,
      enter,
      date,
      state

    }
  }

}
</script>

<style>
</style>