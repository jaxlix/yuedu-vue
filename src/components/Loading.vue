<template>
    <div class="loading">
        <div class="img-box">
            <img class="img" src="../assets/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
    }
    .img-box{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60px;
        height: 60px;
    }
    .img{
        position: relative;
        bottom: 30px;
        right: 30px;
        width: 100%;
        height: 100%;
    }
</style>

