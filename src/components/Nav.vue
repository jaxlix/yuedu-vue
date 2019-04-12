<template>
    <nav class="nav-scroll">
        <div class="nav-scroll-box">
            <span :class="type===i?'nav-this':''" v-for="(d,i) in items" :key="i" :data-type="i" @click="choose">{{ d }}</span>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            items: ['全部','小说','名著','散文','历史','哲学','传记','经济','科技'],
            type: 0
        }
    },
    computed: {
        checked(e){
            console.log(this)
            // return this.type === e.target.getAttribute('data-type') ? 'nav-this' : ''
        }
    },
    methods: {
        choose(e){
            this.type = e.target.getAttribute('data-type')
        }
    }
}
</script>

<style scoped>
    .nav-scroll {
        width: 100%;
        position: fixed;
        top: 48px;
        left: 0;
        overflow: hidden;
        overflow-x: scroll;
        background-color: #f2f2f2;
    }

    .nav-scroll::-webkit-scrollbar {
        display: none;
    }

    .nav-scroll-box {
        width: 100%;
        white-space: nowrap;
    }

    .nav-scroll-box>a, .nav-scroll-box>span {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        height: 40px;
        text-align: center;
        padding: 10px;
        font-size: 16px;
        /*border-bottom: 2px solid transparent;*/
    }
    .nav-this{
        color: #028CE5;
    }
    .nav-this:after{
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 1px;
        background-color: #028CE5;
    }
</style>


