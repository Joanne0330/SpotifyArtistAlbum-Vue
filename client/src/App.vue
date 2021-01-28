<template>
  <div id="app">
    <div v-if="auth !== null">
      <Search v-bind:auth="auth"/>
      <p>{{auth}}</p>
    </div>
    <div v-else>
      <Home />
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Search from './components/Search.vue'
import axios from 'axios';

export default {
  name: "App",
  components: {
    Home,
    Search
  },
  data() {
    return {
      auth: null
    }
  },
  methods: {
    findToken: async function() {
      // axios.get('http://localhost:5000/auth/current-session')
      //   .then(res => this.auth = res)  // this returns a long object item, not a long string of token
      const data = await axios.get('http://localhost:5000/auth/current-session')
      this.auth = data;
    }
  },
  created: function() {
    this.findToken();
  },
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
