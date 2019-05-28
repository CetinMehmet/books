<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/detail">Detail</router-link> |
      <router-link to="/random">Random</router-link>
    </div>
    <router-view/>
    <footer class="footer">
        <router-link to="/">Home</router-link> |
        <router-link to="/detail">Detail</router-link> |
        <router-link to="/random">Random</router-link> |
        <a href="https://github.com/toddmotto/public-apis" target="_blank">Public-Api</a> |
        <a href="https://www.en.d-tt.nl/" target="_blank">DTT</a>
    </footer>
  </div>
</template>

<style>
.footer {
  position: fixed;
  width: 100%;
  /* Set the fixed height of the footer here */
  background-color: #2c3e50;
  font-size: 20px;
  bottom: 0%;
  margin-bottom: 0px;
  margin-top: 100%;
}

.footer a {
  color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background-color: #2c3e50;
  position: fixed;
  margin: auto ;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  z-index: 3;
}

#nav a:hover {
  color:#42b983;
}
#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: auto;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
