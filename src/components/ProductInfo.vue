
<template>
    <div class="greetings">
      <div class="flex items-center">
        <button type="button" class="text-white bg-blue-500  hover:bg-blue-600 focus:ring-4 rounded-lg text-sm px-2.5 py-2 text-sm text-center mr-5 inline-flex items-center" @click="$router.go(-1)">
          <svg class="w-3 h-3 mr-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
        Back</button></div>
      <div class="relative overflow-x-auto my-5">
      <table class="w-50 text-sm text-left text-gray-500 dark:text-gray-400">
    <tbody>
      <tr class="border-b">
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          Product Name 1</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><img width="50" src="../assets/pdtimg.jpg"></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">B0EOFU39234</td>
      </tr>
    </tbody>
  </table>
  <h3 class="mt-7 mb-2 font-bold">商品情報を入れてください。</h3>
  <form>
    <textarea class="p-3 border mb-3" rows="10" cols="50" v-model="productInfo" placeholder="Enter product information"></textarea>
    <p style="white-space: pre-line;">{{ productInfo }}</p>
    <RouterLink :to= "{ name: 'generalappeal'}"><button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">次へ</button></RouterLink>
    
  </form>
  </div>
    </div>
  </template>

<script>
import { ref, onMounted , computed} from "vue";
export default {
  name:'inputbox',
  setup() {
const productInfo = ref("");
if (productInfo.value === "") return;
const data={
    productInfo: productInfo.value,
}
  }
}

</script>