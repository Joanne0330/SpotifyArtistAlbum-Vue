<template>
  <div class="hello">
    <a v-bind:href="url">Log in here</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {       
    return {
        url: 'http://localhost:5000/auth/login'
    }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
