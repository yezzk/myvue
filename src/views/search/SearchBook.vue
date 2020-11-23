<template>
<div class="container mt-2">
    <div v-if="info==null">没有查找到{{book}}书籍记录</div>
    <div class="row" v-else>
        <div class="clo-3 border mr-4 " style="height:480px">这是最近出售书籍人和书籍</div>
        <div class="clo-8">
                
                <!-- <div v-if="book='all'">这是全部书籍</div> -->
    <div class="card mb-3" style="max-width: 840px; max-height:420px"  v-for="item in dataShow" >
        
    <div class="row no-gutters" >
        <div class="col-md-4 my-auto">
        <img :src=getImgUrl(item.id) class="card-img carousel-inner img-responsive img-rounded" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">{{item.id}} . {{item.bookname}}<small class="pt-3 font-weight-bold  text-right d-block">作者：{{item.author}} </small></h5>
            <p class="card-text d-inline-block text-truncate text-wrap overflow-auto" style="height:200px">{{item.synopsis}}</p>
            <p class="card-text"><div class="text-muted text-left">价格：{{item.price}}￥</div></p>
        </div>
        </div>
    </div>
    </div>
        <nav aria-label="Page navigation example mr--4" v-if="info!=null">
  <ul class="pagination justify-content-end" >
       <li class="page-item">
      <button class="page-link" @click="last" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>   
    <li class="page-item" v-for="(item,index) in pageNum"><button class="page-link text-center" @click="jump(index)">{{index+1}}</button></li>
    <li class="page-item">
      <button class="page-link" @click="next" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name:'SearchBook',
    data(){
        return{
            book:this.$route.params.book,
            //books总数据
            info:null,
            // 总页数
            pageNum:null,
            // 每页显示的个数
            pageSize:4,
            // 当前页
            currentPage:0,
            // 当前显示的数据
            dataShow:null
        }
    },
    created () {
        if(this.book == 'all'){
            axios({
                url:'http://localhost:9090/searchAll'
                }).then(res => {
                this.info=res.data
                this.showDataPull();
            })
        }else{
            axios({
            url:'http://localhost:9090/search/'+this.book
            }).then(res => {
                if(res.data.length==0){
                    this.info=null
                }else{
                    this.info=res.data
                    this.showDataPull();
                }
            })
        }
        
    },
    methods:{
        getImgUrl(id){
            return require('@/assets/img/books/book_'+id+'.jpg')
        },
        showDataPull(){
            this.dataShow=this.info.slice(this.currentPage*this.pageSize,this.currentPage*this.pageSize+this.pageSize)
            this.pageNum=Math.ceil(this.info.length/this.pageSize);
        },
        last(){
            if(this.currentPage>=1){
                this.currentPage-=1;
                this.showDataPull()
            }else{
                alert('这是第一页!')
            }
        },
        next(){
            if(this.currentPage<this.pageNum-1){
                this.currentPage+=1;
                this.showDataPull()
            }else{
                alert('这是最后一页！')
            }
        },
        jump(index){
            this.currentPage=index
            this.showDataPull()
        }
    }
}
</script>

<style>

</style>