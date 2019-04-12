<template>
    <div>
        <Header title="首页" />
        <Nav />
        <bookList :data="data"/>
    </div>
</template>

<script>
import Header from '../components/Header'
import Nav from '../components/Nav'
import bookList from '../components/bookList'
import { books } from '../api/books.js'

export default {
    components: {
        Header,
        Nav,
        bookList
    },
    data(){
        return {
            dataNumber: 0,
            classes: 0,
            keyword: '',
            data: null
        }
    },
    created() {
        this.bookList()
    },
    methods: {
        bookList(){
            books(this.dataNumber, this.classes, this.keyWord).then(res => {
                if (res.data.code === 1) {
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

