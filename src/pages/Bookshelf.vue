<template>
    <div>
        <Header title="我的书架" />
        <Bookshelf :data="data" />
    </div>
</template>

<script>
import Header from '../components/Header'
import { bookshelf } from '../api/bookshelf.js'
import Bookshelf from '../components/bookshelf'
import { getCookie } from '../common/js/cookie.js'

export default {
    components: {
        Header,
        Bookshelf
    },
    data(){
        return{
            data: null,
            userInfoId: getCookie('userInfoId'),
            dataNumber: 0
        }
    },
    created() {
        this.getBookshelf()
    },
    methods: {
        getBookshelf(){
            bookshelf(this.userInfoId, this.dataNumber).then(res=>{
                if(res.data.code === 1){
                    this.data = res.data.content
                } else if (res.data.code === 2) {
                    alert(res.data.content)
                } else {
                    alert('服务器异常，请检查网络')
                }
            })
        }
    }
}
</script>

