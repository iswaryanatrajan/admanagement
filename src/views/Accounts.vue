
<template> 
    <div class="">
      <MainHeader />
      <main class="flex">
        <Side />
        <div class="flex-grow flex-1 h-screen pb-44 pt-6 overflow-y-auto p-3 maincontent">

          <Accountslist />
        </div>
        
      </main>
    </div>
  </template>
    <script setup>
    import Accountslist from "../components/Accountslist.vue";
    import Side from "../components/Side.vue";
    import MainHeader from "../components/Mainheader.vue";
    </script>
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>