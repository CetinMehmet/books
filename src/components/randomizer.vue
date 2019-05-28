<template>
  <div id="randomizer">
    <h1>Random items</h1>
    <button class="myButton" @click="change">Switch</button>

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
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
/* eslint-disable */
var baseURL = 'https://www.googleapis.com/books/v1/volumes?q='

export default Vue.extend({
  name: 'randomizer',
  props: {},
  data () {
    return {
      items: {},
      index: 0
    }
  },
  mounted () {
    // Make an array of the data objects
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
  methods: {
    change: function () {
      this.index = Math.floor(Math.random() * (10))
    }
  }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#randomizer {
  width: 70%;
  margin: auto;
}

h3 {
  text-align: left;
}

ul {
  text-align: left;
}

p {width: 70%; margin: auto;}
img {
  margin: auto;
  width: 70%;
  height: 50%;
}

.myButton {
  background-color: #44c767;
  border-radius: 28px;
  border: 3px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 12px 31px;
  text-decoration: none;
  text-shadow: 0px 0px 0px #2f6627;
}
.myButton:hover {
  background-color: #5cbf2a;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
