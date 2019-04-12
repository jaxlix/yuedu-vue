<template>
  <transition name="login">
    <div id="login">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="text">悦读</div>
      <div class="input">
        <div :class="focus === 'number' ? 'input-text focus-input-text' : userPhone === null ? 'input-text' : 'focus-input-text input-text'">手机号</div>
        <input type="number" @focus="_focus($event)" @blur='_blur($event)' ref='userPhone'>
        <div>
          <hr class="hrBorder">
          <hr :class="focus === 'number' ? 'focus-hrShow hrShow' :'hrShow'">
        </div>
      </div>
      <div class="input">
        <div :class="focus === 'password' ? 'focus-input-text input-text' : password === null ? 'input-text' : 'focus-input-text input-text'">密码</div>
        <input type="password" @focus="_focus($event)" @blur='_blur($event)' @input='input($event)' ref='password'>
        <div>
          <hr class="hrBorder">
          <hr :class="focus === 'password' ? 'focus-hrShow hrShow' :'hrShow'">
        </div>
      </div>
      <button :class="loginClass" @click='login'>
        登录
      </button>
      <Loading v-if="loginSwitch" />
    </div>
  </transition>
</template>

<script>
import { login } from '../api/login'
import { setCookie } from '../common/js/cookie'
import { mapMutations, mapGetters } from 'vuex'
import Loading from '../components/Loading'
import md5 from 'js-md5'

export default {
  data() {
    return {
      focus: false,
      userPhone: null,
      password: null,
      loginSwitch: false
    }
  },
  computed: {
    loginClass() {
      return this.userPhone !== null && this.password !== null ? 'button' : 'button falseLogin'
    },
    ...mapGetters([
      'userId'
    ])
  },
  components: {
    Loading
  },
  methods: {
    _focus(e) {
      this.focus = e.target.type
    },
    _blur(e) {
      e.target.value !== ''
        ? e.target.type === 'number'
          ? this.userPhone = e.target.value
          : this.password = e.target.value
        : e.target.type === 'number'
          ? this.userPhone = null
          : this.password = null

      this.focus = false
    },
    input(e) {
      e.target.value !== '' ? this.password = e.target.value : this.password = null
    },
    login() {
      if (this.userPhone !== null && this.password !== null) {
        this.loginSwitch = true
        login(this.userPhone, md5(this.password)).then(res => {
          this.loginSwitch = false
          if (res.data.code === 1) {
            this.setUsreId(res.data.content)
            setCookie('userId', res.data.content, 7)
            this.$router.push('/index/home')
          } else if (res.data.code === 2) {
            alert(res.data.content)
          } else {
            alert('服务器异常，请检查网络')
          }
        })
      }
    },
    ...mapMutations({
      setUsreId: 'SET_USER_ID'
    })
  }
}
</script>

<style scoped>
  .login-enter-active, .login-leave-active {
    transition: opacity .5s;
  }
  .login-enter, .login-leave-to {
    opacity: 0;
  }
  #login{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .logo{
    margin-top: 60px;
    margin-bottom: 25px;
    text-align: center;
  }
  .logo img{
    width: 90px;
    height: 90px;
  }
  .text{
    padding-bottom: 50px;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
  }
  .input{
    position: relative;
    width: 80%;
    height: 30px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .input input{
    width: 100%;
    height: 100%;
  }
  .input-text{
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: #939394;
    transform: translate3d(0, 0, 0) scale(1);
    transition: transform 0.45s;
  }
  .focus-input-text{
    font-size: 13px;
    color: #333;
    transform: translate3d(0, -18px, 0) scale(0.75);
    transition: transform 0.45s;
  }
  .input hr{
    position: absolute;
    bottom: -2px;
    left: 0;
  }
  .hrBorder{
    width: 100%;
    height: 2px;
    border: 0;
    background-color: #939394;
  }
  .hrShow{
    width: 100%;
    height: 2px;
    border: 0;
    background-color: #028ce5;
    transform: scaleX(0);
    transition: transform 0.45s;
  }
  .focus-hrShow{
    transform: scaleX(1);
    transition: transform 0.45s;
  }
  #login button{
    display: block;
    width: 80%;
    height: 38px;
    margin: 50px auto;
    background-color: #028ce5;
    color: #fff;
    text-align: center;
    line-height: 38px;
    border-radius: 19px;
    font-size: 16px;
  }
</style>

