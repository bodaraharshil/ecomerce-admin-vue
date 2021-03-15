<template>
  <div>
    <h1>Datatatatatat</h1>
    <button @click="goToHome()">hjkhkjhk</button>
  </div>
  <!-- <Login/> -->
</template>

<script>

// import Login from '../pages/Login/Login'

export default {
  name: 'Home',
    components: {
    // Login
  },
   methods:{
   goToHome(){
   this.$router.push('/login'); 
      }
  },
  props: {
    msg: String
  }
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
