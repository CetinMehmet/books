<template>
  <div id="Random">
    <br><br>
    <randomizer></randomizer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import randomizer from '@/components/randomizer.vue'
// The @Component decorator indicates the class is a Vue component

export default Vue.extend({
  name: 'Random',
  components: {
    randomizer
  }
})
</script>
