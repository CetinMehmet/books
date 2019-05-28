<template>
  <div id="home">
    <br><br>
    <books></books>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import books from '@/components/books.vue'
// The @Component decorator indicates the class is a Vue component
/* eslint-disable */
export default Vue.extend({
  name: 'home',
  components: {
    books
  }
})
// @Component({
//   components: {
//     books
//   }
// })
// export default class Home extends Vue {}
// </script>
s
