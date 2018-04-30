<template>
  <div id="app">

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <img v-bind:src='"/static/img/planelogo.png"'/>
          <!-- <a class="navbar-brand" href="/">Home</a> -->
          <!-- <router-link to="{ path: '/city' }" replace>
            <span>Home</span>
          </router-link> -->
        </div>
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Home</a>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar-header img {
  height: 40px;
  margin: 5px;
}
</style>
