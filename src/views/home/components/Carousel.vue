<template>
<div class="container" id="carousel">
    <div class="row">
        <!-- 左侧内容 -->
        <div id="leftMain" class="col-4">
             <span>图书分类</span>
                <ul v-for="item in books">
                    <li><a href="">{{item}}</a></li>
                </ul>
        </div>

        <!-- 右侧轮播图 开始-->
        <div id="carouselExampleIndicators" class="carousel slide col-8" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="@/assets/img/carousel/carousel_1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="@/assets/img/carousel/carousel_2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="@/assets/img/carousel/carousel_3.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
        </div>
        <!-- 右侧轮播图 结束-->

    </div>  
</div>
    
</template>

<script>
export default {
    name:'Carousel',
    data(){
        return{
            books:['计算机与电子信息','理工','经管与人文','法律与艺术','语言','科普与少儿'
                    ,'辞书工具书学术书','考试书','基础与职业教育']
            
        }
    }
}
</script>

<style>
    #carousel{
        /* width: 60%;   */
        margin-top: 16px;
        min-width:1000px;
        max-width:1200px;
    }
    #leftMain{
        background-color:#f6f6f6;
    }
    span{
        display: block;
        height: 28px;
        font-size: 26px;
        margin-top: 16px;
        margin-bottom: 16px;
    }
li {
font-size: 20px;
line-height: 150%;
color: #333333;
text-decoration: none;
list-style:none;
margin-top: 14px;
padding-top: 0px;
}
ul {
margin:0;
padding:0;
text-indent: 30px;
width: 100%;
}
a {
    text-decoration:none;
    color: black;
}
</style>