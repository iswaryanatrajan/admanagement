<template>
    <div class="">
      <MainHeader />
      <main class="flex">
        <Side />
        <div class="flex-grow flex-1 h-screen pb-44 pt-6 overflow-y-auto maincontent">
          <ProductInfo/>
        </div>
        
      </main>
    </div>
  </template>
    <script setup>
    import ProductInfo from "../components/ProductInfo.vue";
    import MainHeader from "../components/Mainheader.vue";
    import Side from "../components/Side.vue";
    </script>