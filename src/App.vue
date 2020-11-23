<template>
  <div id="app">
     <nav-bar/>
    <router-view/>
  </div>
</template>


<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App', 
  components: {
    NavBar
  }
}
</script>

<style>
@import './assets/css/base.css';
ul {
margin:0;
padding:0;
text-indent: 30px;
width: 100%;
}

</style>
