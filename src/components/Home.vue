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
    </script>
  <script>
  import UserService from "../services/user.service";
  export default {
    name: "Home",
    data() {
      return {
        content: "Welcome to app. Please login to continue",
      };
    },
    mounted() {
     /* UserService.getPublicContent().then(
        (response) => {
          this.content = response.data;
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );*/
    },
  };
  </script>