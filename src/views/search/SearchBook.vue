<template>
<div class="container mt-2">
    <div class="row">
        <div class="clo-3 border mr-4">这是最近出售书籍人和书籍</div>
        <div class="clo-8">
                <div v-if="info==null">没有查找到{{book}}书籍记录</div>
    <div class="card mb-3" style="max-width: 840px; max-height:460px" v-else v-for="item in info">
    <div class="row no-gutters">
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
            info:null,
        }
    },
    created () {
        if(this.book == 'all'){
            axios({
                url:'http://localhost:9090/searchAll'
                }).then(res => {
                this.info=res.data
                console.log(res.data[0].bookname)
            })
        }else{
            axios({
            url:'http://localhost:9090/search/'+this.book
            }).then(res => {
                if(res.data==this.book){
                    this.info=null
                }else{
                    this.info=res.data
                }
            })
        }
    },
    methods:{
        getImgUrl(id){
            return require('@/assets/img/books/book_'+id+'.jpg')
        }
    }
}
</script>

<style>

</style>