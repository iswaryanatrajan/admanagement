
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
      <tr class="border-b" v-if="row!==null">
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
         {{row.product_name}}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><img width="50" :src="row.image_url"></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{row.asin}}</td>
      </tr>
    </tbody>
  </table>
  <h6 class="mt-7 mb-2 font-bold">商品情報を入れてください。</h6>
  <form>
    <textarea class="p-3 border mb-3" rows="10" cols="50" v-model="productInfo" placeholder="Enter product information"></textarea>
    <p style="white-space: pre-line;">{{ productInfo }}</p>
    <RouterLink v-if="row!==null" :to= "{ name: 'generalappeal', params: { id: row.id}}">
      <button type="button" @click="postProductInfo()" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">次へ</button></RouterLink>
    
  </form>
  </div>
    </div>
  </template>

<script>
import { ref, onMounted , computed} from "vue";
import { api } from '../boot/axios'
import { useRoute } from 'vue-router'
import UserService from "../services/user.service";
import authHeader from '../services/auth-header';

export default {
  name:'productInfo',
  setup() {
    const route = useRoute();
    const productInfo = ref("");
    


const row=ref(null);
function loadData () {
  api.get(`http://159.223.87.212/api/v1/products/${route.params.id}`, { headers: authHeader() })
      .then((response) => {
        console.log("row.value")
        row.value = response.data.data;
        console.log(row.value)
      })
      .catch(() => {
        console.log('not ht')
       /* $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })*/
      })
  }
  loadData();
  function postProductInfo(){
    if(productInfo==""){
        return;
    }
    api.put(`http://159.223.87.212/api/v1/products/${route.params.id}`,{"product_info":productInfo.value}, { headers: authHeader() })
        .then((res) => {
          //success = true
          console.log(res);
        })
        .catch((error) => {
          //error = error.data.message;
          console.log(error);
        })
  }
  return{row,productInfo,postProductInfo}

  }
}

</script>