<template>
  <h2>Lista de Usuarios</h2>
  <div>
   <ul>
    <li v-for="user in users.user" :key="user.id">{{ user.firstname }} {{ user.lastname }}</li>
   </ul>
  </div>
</template>

<script setup>
// import { http } from './services/http.js'
// import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios'
import { onMounted,reactive } from 'vue';
// export default {
//   name: 'App',
//   component: {
//     HelloWorld
//   },
//   data() {
//     return {
//       users: []
//     }
//   },
//   async mounted() {
//     try {
//       const { data } = await http.get('http://localhost:8000/api/users')

//       this.users = data
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// trabalhando com composition API
 let users = reactive({user:[]})

onMounted(async () => {
  try {
    const {data} = await axios.get('http://localhost:8000/api/users')
    console.log(data);
     users.user = data
  } catch (error) {
    console.log(error);
  }
})
</script>


