<template>
  <image-handler
    layer="Layer 1"
    maxWidth="max-width:200px"
    @on-upload="onUpload"
  />

  <p>Layer 1: {{tes.layer1.image}}</p>

  <image-handler
    layer="Layer 2"
    maxWidth="max-width:200px"
    @on-upload="onUpload"
  />
  <p>Layer 1 :{{tes.layer2.image}}</p>

  <image-handler
    layer="Hasil"
    maxWidth="max-width:200px"
    @on-upload="onUpload"
  />

  {{tes.hasil}}
  
</template>

<script>
import ImageHandler from './ImageHandler.vue'
import {reactive } from 'vue'
export default {
  components: {
    ImageHandler

  },
  setup (props) {

    const tes = reactive({
      layer1: {
        image: []
      },
      layer2: {
        image: []
      },
      hasil: []
    })
    const onUpload = (event) => {
        if (event.layer == 'Layer 1'){
          tes.layer1.image.push(event.image[0])

        }else if(event.layer == 'Layer 2') {
          tes.layer2.image.push(event.image[0])

        }else{
          tes.hasil.push(event.image[0])

        }
      // console.log(event[0]);
      console.log('event.layer[0]'+event.layer[0]);
      console.log('event.layer[1]'+event.layer[1]);
      console.log('event.layer'+event.layer);
      // console.log('tes.layer 1:' + tes.layer1.image);
      // console.log('tes.layer 2:' + tes.layer2.image);
      // console.log('tes.hasil:' + tes.hasil);
    }

    return {
      onUpload,
      tes
    }
  }

}
</script>

<style>
</style>