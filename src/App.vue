<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <tw-2></tw-2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import tw from './components/tw.vue'
import tw2 from './components/tw2.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    tw,
    tw2
  }
})
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
