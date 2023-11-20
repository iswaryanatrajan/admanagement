<template> 
    <div class="">
      <MainHeader />
      <main class="flex">
        <Side />
        <div class="flex-grow flex-1 h-screen pb-44 pt-6 overflow-y-auto p-3 maincontent">

          <h4>{{ content }}</h4>
        </div>
        
      </main>
    </div>
  </template>
  <script setup>
  import MainHeader from "./Mainheader.vue";
  import Side from "./Side.vue";
  import UserService from "../services/user.service";
    </script>
  <script>
  import UserService from "../services/user.service";
  export default {
    name: "Home",
    data() {
      return {
        content: "Welcome to Copy Writer. Please login to continue",
      };
    },
    mounted() {
    }
  };
  </script>