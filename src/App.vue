<template>
  <router-link to="/login">点击去login页面</router-link>
  <router-view></router-view>
  <img alt="Vue logo" src="assets/logo.png">
  <HelloWorld />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      path:'/login'
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
