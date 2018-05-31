<template>
  <div id="app">
    <img id="meals" src="./assets/meals.jpg">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Cookify from './components/Cookify'
import Prompt from './components/Prompt'
export default {
  name: 'App',
  data () {
    return {
      Cookify: {
        visible: false
      },
      Prompt: {
        visible: true
      }
    }
  },
  components: {
    HelloWorld,
    Cookify,
    Prompt
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#meals {
  height: auto; 
  width: auto; 
  max-width: 300px; 
  max-height: 300px;
}
</style>
