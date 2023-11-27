<template>
    <div class="sticky z-58 bg-gray-100 flex items-center p-2 lg:px-5 mt-10 shadow-md">
      <!-- Left -->
      <div class="flex items-center">
       
      </div>
      <!-- Center -->
      <div class="flex justify-center flex-grow">
      </div>
      <!-- Right -->
      <div class="flex items-center sm:space-x-2 justify-end">
        <!-- <LogoutIcon class="icon"/> -->
        <ul id="nav-mobile" class="right mb-0 flex">
                  <li class="mr-2" v-if="!currentUser">
                      <router-link to="/login"> <button class="text-xs hover:text-white font-semibold text-white px-4 py-2  bg-blue-500 hover:bg-blue-600 rounded-md" >Log In</button>
                       </router-link>
                  </li>
                  <li class="mr-2" v-if="!currentUser">
                      <router-link to="/register"> <button class="text-xs hover:text-white font-semibold text-white px-4 py-2  bg-blue-500 hover:bg-blue-600 rounded-md" >Sign Up</button>
                       </router-link>
                  </li>
                  <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item mr-2">
          <router-link to="/profile" class="nav-link">
            {{ currentUser.email }}
          </router-link>
        </li>
        <li class="nav-item mr-2">
          <a class="nav-link" @click.prevent="logOut">  <button class="text-xs hover:text-white font-semibold text-white px-4 py-2  bg-blue-500 hover:bg-blue-600 rounded-md" > LogOut</button>
        
          </a>
        </li>
      </div>
              </ul>
      </div>
    </div>
  </template>
  
  <script>

  
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import * as yup from "yup";

  export default {
    name: "main-header",
    setup() {
     /* let user = ref(null);
      const router = useRouter();
  
      onMounted(() => {
        user.value = JSON.parse(localStorage.getItem("user"));
      });
  
      const moveTo = (path) => {
        router.push(path);
      };
  
      return { user, moveTo };*/

    
    },
    methods:{
      logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
    },
    computed: {
    currentUser() {
      console.log("Current user" + this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
  }

  };
  </script>
  
  <style>
   @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');
  .btn-primary {
      color: #000;
      background-color: #26bbce !important;
      border-color: #43acba !important;
  }
  </style>