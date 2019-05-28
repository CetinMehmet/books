<template>
  <div id="book-info">
    <div v-responsive.lg.md>
      <h2>Description and details about <b>{{items.title}}</b></h2>
      <nav class = "bookName" v-for = "(book, index) in items" :key = "book.id">
        <a @click="pick(index)">{{book.title}}</a>
      </nav>
      <ul v-for = "(value, propertyName) in items[this.index]" :key = "value.id">
        <li v-if="propertyName === 'industryIdentifiers' | propertyName === 'readingModes' | propertyName === 'panelizationSummary'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> Data too raw to display
        </li>
        <li v-else-if="propertyName === 'imageLinks'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> <a :href="value.smallThumbnail" target="_blank"> goImage</a>
        </li>
        <li v-else-if="propertyName === 'previewLink'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> <a :href="value" target="_blank"> goPreview</a>
        </li>
        <li v-else-if="propertyName === 'infoLink'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> <a :href="value" target="_blank"> goInfo</a>
        </li>
        <li v-else-if="propertyName === 'canonicalVolumeLink'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> <a :href="value" target="_blank"> canonical</a>
        </li>
        <li v-else-if="Array.isArray(value)">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> {{value.join(' and ')}}
        </li>
        <li v-else>
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> {{value}}
        </li>
      </ul>
    </div>
    <!-- mobile part -->
    <div v-responsive="['hidden-all','xs']">
      <h2>Description and details about <b>{{items.title}}</b></h2>
      <nav class = "bookName" v-for = "(book, index) in items" :key = "book.id">
        <a @click="pick(index)">{{book.title}}</a>
      </nav>
      <ul v-for = "(value, propertyName) in items[this.index]" :key = "value.id">
        <li v-if="propertyName === 'industryIdentifiers' | propertyName === 'readingModes' | propertyName === 'panelizationSummary'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> Data too raw to display
        </li>
        <li v-if="propertyName === 'description'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> Available only on desktop
        </li>
        <li v-else-if="propertyName === 'imageLinks'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> <a :href="value.smallThumbnail" target="_blank"> goImage</a>
        </li>
        <li v-else-if="propertyName === 'previewLink'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> <a :href="value" target="_blank"> goPreview</a>
        </li>
        <li v-else-if="propertyName === 'infoLink'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> <a :href="value" target="_blank"> goInfo</a>
        </li>
        <li v-else-if="propertyName === 'canonicalVolumeLink'">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> <a :href="value" target="_blank"> canonical</a>
        </li>
        <li v-else-if="Array.isArray(value)">
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> {{value.join(' and ')}}
        </li>
        <li v-else>
          <b>{{propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}}:</b> {{value}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import responsive from "vue-responsive"

Vue.use(responsive)
var baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
export default Vue.extend({
  name: 'book-info',
  props: {
    book: Number
  },
  data () {
    return {
      items: [],
      index: 0
    }
  },
  mounted () {
    axios.get(baseURL + 'quit').then(
      result => {
        for (var index = 0; index < result.data.items.length; index++) {
          Vue.set(this.items, index, result.data.items[index].volumeInfo)
        }
      },
      error => {
        console.error(error)
      }
    )
  },
  // eslint-disable-next-line
  /* eslint-disable */
  methods: {
    pick: function(bookIndex) {
      this.index = bookIndex
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #book-info {
    width: 80%;
    margin: auto;
  }

  .bookName:hover {
    cursor: pointer;
    background-color: #42b983;
    color: white;
  }

  .bookName {

    border: 1px solid black;
    padding: 3px;
    border-radius: 5px;
  }

  ul {
    text-align: left;
    margin-top: 3%;
  }
</style>
