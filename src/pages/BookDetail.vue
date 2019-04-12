<template>
    <div>
        <Header title="详情" left=true />
        <div>
            详情{{login}}
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    components: {
        Header
    },
    data(){
        return {
            login: 'store.state.login'
        }
    }
}
</script>

