<template>
  <div class="book-component">
    <div v-responsive = "middleSize" class = "books">
      <h1>Books</h1>
      <b-table class = "books" striped hover bordered :items = "items" :fields = "fields" caption-top>
        <template slot = "table-caption">Books about quiting</template>
        <template slot="authors" slot-scope="items">
          <p v-if = "items.item.authors">{{items.item.authors.join(", ")}}</p>
          <p v-else>Authors not available</p>
        </template>
        <template slot="previewLink" slot-scope="items">
          <a :href="items.item.previewLink" target = "_blank">goToImage</a>
        </template>
        <template slot = "pageCount" slot-scope = "items">
          <p v-if = "items.item.pageCount">{{items.item.pageCount}}</p>
          <p v-else>Page not available</p>
        </template>
      </b-table>
    </div>
    <div v-responsive.sm.xs class = "mobile-books">
      <div v-for = "book in items" :key = "book.id" class = "book-card">
        <div class="title"><router-link to='/detail'>{{book.title}}</router-link></div>
        <div class="description">{{book.description}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import responsive from "vue-responsive";

Vue.use(BootstrapVue)
Vue.use(responsive)
/* eslint-disable */
export default Vue.extend({
  name: "books",
  props: {},
  data() {
    return {
      middleSize: ['hidden-all','lg','xl', 'md'],
      items: [],
      fields: [
        {
          key: 'title',
          label: 'Title',
          sortable: true,
        },
        {
          key: 'authors',
          label: 'Authors',
          sortable: true,
        },
        {
          key: 'language',
          sortable: false,
        },
        {
          key: 'pageCount',
          label: 'Pages',
          sortable: true
        },
        {
          key: "previewLink",
          label: 'Link',
          sortable: false,
        },
      ],
      bookName: "quit",
      baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
    };
  },
  mounted() {
    //Make an array of the data objects
    axios.get(this.baseURL + this.bookName).then(
      result => {
        for (var index = 0; index < result.data.items.length; index++) {
          Vue.set(this.items, index, result.data.items[index].volumeInfo)
        }
      },
      error => {
        console.error(error)
      }
    );
  },
  methods: {
  }
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.books {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width:80%;
  margin: auto;
}

.mobile-books {
  width: 100%;
  margin-bottom: 50px;
}
.book-card {
  border-top: 3px solid black;
  padding: 10px;
}

.title {
  border-bottom: 1px solid black;
  font-weight: bold;
  font-size: 1.2em;
}
.title:hover {
  background-color:#0db368;
  color: white;
}

a {
  color: #42b983;
  text-decoration: none;
  cursor: pointer;
}

a:hover {color: #1d9e64;}
</style>
