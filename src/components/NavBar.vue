<template>
<div class=".container-{breakpoint}">
<nav class="navbar navbar-expand bg-dark navbar-dark">
    <ul class="navbar-nav">
        <li class="nav-item active">
            <a href="/home" class="nav-link">首页</a>
        </li>
        <li class="nav-item">
            <a href="/free" class="nav-link">免费书籍</a>
        </li>
        <li class="nav-item">
            <a href="/charge" class="nav-link">收费书籍</a>
        </li>
        <li class="nav-item">
            <a href="/sell" class="nav-link">出售书籍</a>
        </li>    
        <li class="nav-item">
            <a href="/profile" class="nav-link">个人中心</a>
        </li> 
    </ul>
</nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .navbar{
    min-width:1000px;
} */
</style>
