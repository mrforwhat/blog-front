<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <ul>
            <li v-for="(item,index) in users" :key="index">{{item}}</li>
        </ul>

        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import axios from 'axios'
  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {
        users: []
      }
    },
    mounted() {
      axios.get('http://localhost:3000/api/users').then(res=>{
        this.users = res.data
      })
    }
  }
</script>
