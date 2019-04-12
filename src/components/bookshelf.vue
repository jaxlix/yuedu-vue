<template>
    <ul class="ul">
        <li class="li" v-for="(d,i) in data" :key="i">
            <router-link :to="{path: '/bookDetail/' + d.bookInfoId}">
                <img class="img" :src="HOST+'/webphone/bookPhone/downloadImg?fileName='+d.bookImg" alt="">
                <div class="content">
                    <p class="name">{{d.bookName}}</p>
                    <p class="author">{{d.author}}</p>
                    <p class="abs">{{d.abstract}}</p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
import { HOST } from '../common/js/config'

export default {
    props: {
        data: Array
    },
    data(){
        return {
            HOST: HOST
        }
    }
}
</script>

<style scoped>
    .li{
        padding: 1rem;
        border-bottom: 1px solid #f5f5f5;
    }
    .img{
        float: left;
        width: 9rem;
        height: 12rem;
    }
    .content{
        margin-left: 10rem;
    }
    .name{
        height: 4rem;
        line-height: 4rem;
        color: #333;
        font-size: 1.6rem;
    }
    .author{
        height: 2rem;
        line-height: 2rem;
        color: #999;
    }
    .abs{
        height: 6rem;
        line-height: 2rem;
        overflow: hidden;
        color: #333;
        font-size: 1.3rem;
    }
</style>

