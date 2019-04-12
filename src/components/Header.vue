<template>
    <header class="header">
        <div class="header-left">
            <a href="javascript:void(0)" @click="goBack" v-show="left">
                <span class="iconfont icon-fanhuiicon"></span>
            </a>
        </div>
        <h3 class="header-title">{{ title }}</h3>
        <div class="header-right" v-html="right"></div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        left: String,
        right: String
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #028ce5;
    }
    .header-left, .header-right{
        width: 40px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        color: #fff;
    }
    .header-title{
        flex: 1;
        height: 48px;
        line-height: 48px;
        color: #fff;
        text-align: center;
    }
</style>

