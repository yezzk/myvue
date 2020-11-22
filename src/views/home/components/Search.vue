<template>
  <div class="container mt-5">
    <div class="row mt-3 shadow-sm p-3 mb-3 bg-white rounded">
        <div class="col-6 text-center font-weight-bolder my-auto">热搜:   英语 计算机 数学 法律 经济 CET4  </div>
        <div class="input-group flex-nowrap col-5">
          <input type="text" class="form-control" placeholder="请输入书籍名称" aria-label="Username" aria-describedby="addon-wrapping"
           @input="change"
           @keyup.enter="submit">
          <button class="btn btn-outline-primary btn-sm" @click="searchClick">搜索</button>
        </div>
    </div>
    

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Search',
    mounted(){
        // axios({
        //   url:'http://localhost:9090/test'
        // }).then(res => {
        //   console.log(res);
        // })
    },
    data(){
      return{
        book:''
      }
    },
    methods: {
      change(e){
        this.book=e.target.value;
      },
      submit(){
        this.searchClick();
      },
      searchClick(){
        this.$router.push('/search/'+this.book);
      }
    }
}
</script>

<style>
</style>