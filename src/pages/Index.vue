<template>
  <div class="index">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Index',
  components: {
    Footer
  }
}
</script>

<style scoped>
  .index {
    padding-top: 48px;
    padding-bottom: 50px;
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity .5s;
  }
  .slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
  }
</style>
