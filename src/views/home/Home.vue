<template>
  <div class="home">
       <search/>
    <carousel/>
 
    <good-books/>
    <footer-all/>
  </div>
</template>

<script>
import FooterAll from '../../components/FooterAll.vue'

import Carousel from './components/Carousel'
import GoodBooks from './components/GoodBooks.vue'
import Search from './components/Search.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Search,
    GoodBooks,
    FooterAll
  }
}
</script>

<style>
body{
  background-color: rgb(245,245,245);
  
}
</style>