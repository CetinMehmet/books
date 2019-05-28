<template>
  <div id="detail">
    <br><br>
    <bookinfo></bookinfo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import bookinfo from '@/components/book-info.vue'
// The @Component decorator indicates the class is a Vue component
/* eslint-disable */
export default Vue.extend({
  name: 'detail',
  components: {
    bookinfo
  }
})
</script>
