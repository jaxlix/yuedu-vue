<template>
    <div>
        <Header title="首页" />
        <Nav />
        <div>
            首页{{login}}
            <router-link to="/bookDetail/123">详情</router-link>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Nav from '../components/Nav'
import books from '../api/books.js'

export default {
    name: 'Bookshelf',
    components: {
        Header,
        Nav
    },
    data(){
        return {
            login: 'store.state.login'
        }
    },
    methods: {
        bookList(){
            
        }
    }
}
</script>

