<template>
    <footer class="footer">
        <router-link class="footer-item" to="/index/home">
            <span class="iconfont icon-shouye"></span>
            <span>首页</span>
        </router-link>
        <router-link class="footer-item" to="/index/bookshelf">
            <span class="iconfont icon-fenleidianjizhuangtai-"></span>
            <span>书架</span>
        </router-link>
        <router-link class="footer-item" to="/index/mine">
            <span class="iconfont icon-wodedianjizhuangtai"></span>
            <span>我的</span>
        </router-link>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #c9c9c9;
    }
    .footer-item{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #999;
    }
    .footer-item>span{
        height: 30px;
        line-height: 30px;
    }
    .footer-item>span:last-child{
        height: 20px;
        line-height: 20px;
        font-size: 12px;
    }
    .router-link-active{
        color: #028ce5;
    }
</style>

