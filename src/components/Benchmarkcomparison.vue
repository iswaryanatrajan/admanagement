
<template>
    <div class="greetings">
      <div class="flex items-center">
        <button type="button" class="text-white bg-blue-500  hover:bg-blue-600 focus:ring-4 rounded-lg text-sm px-2.5 py-2 text-sm text-center mr-5 inline-flex items-center" @click="$router.go(-1)">
          <svg class="w-3 h-3 mr-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
        Back</button><h3 class="font-bold text-xl">Benchmark comparison type</h3>
      </div>
     
      <div class="relative overflow-x-auto mt-10">
      <table class="w-auto text-sm text-left text-gray-500 dark:text-gray-400 ">
    <tbody>
      <tr class="border-b">
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          Product Name 1</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><img width="50" src="../assets/pdtimg.jpg"></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">B0EOFU39234</td>
      </tr>
    </tbody>
  </table>

  <div class="flex">
  <form class="w-2/3">
    <div class="w-full overflow-auto">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400 my-5">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="px-6 py-3">①ターゲット</th>
        <th class="px-6 py-3">②ターゲットのウィークポイント（不安、悩み）</th>
        <th class="px-6 py-3">③ターゲットに勝てる理由を教えてください。</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border"  v-for="index in rownumber" :key="index">
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <label for="rivalpdtinfo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">誰をターゲットにしますか？</label>
          <textarea class="p-3 border w-100"  style="height:100%;width:100%;display:block" v-model="rivalpdtinfo" placeholder="Rival product information"></textarea></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="">
          <label for="weakpoint1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">ターゲットのウィークポイント</label>
          <textarea class="p-3 border w-full" v-model="weakpoint" placeholder="Please enter weak point"></textarea>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div>
          <label for="productfeature" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">ターゲットのウィークポイントをどのように改善していますか？</label>
          <textarea class="p-3 border w-full" v-model="productfeature" placeholder=""></textarea>
          </div>
        </td>
      </tr>

    </tbody>
  </table>
</div>
<button type="button" @click="rownumber++" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add row</button>
  <button type="button" @click="isHidden = false"  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
  </form>
  <div v-show="!isHidden" class="chatgptpoints m-5 w-1/3" >
    <div class="strongpoint1points border p-3 flex items-start justify-between mb-3" v-for = "(pointslist,index) in pointslists" :key="index">
      <div>
      <h3 class="font-bold ">{{ pointslist.name }}</h3>
      <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside">
        <li v-for = "(point,index1) in pointslist.points" :key="index1">
          {{ point.message }}
        </li>
      </ul>
    </div>
    <button type="button" class=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-3 mb-2　inline-flex items-center">
      Revise
    
    <svg class="w-3 h-3 ml-2 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
    </svg>   
</button>
    </div>
  </div>
</div>
  </div>
    </div>
  </template>

<script >
import { ref, onMounted , computed} from "vue";
export default {
  name:'inputbox',
  setup() {

const gender = ref("");
const age = ref("");
const strongpoint1 = ref("");
const whythisproduct = ref("");
const productfeature = ref("");
let rownumber = ref(3);
let isHidden = ref(true);

const pointslists = ref(
  [{
    name:'Weakpoint 1',
    points:[
    {message:'Why dont you use only natural sources for your baby and yourself'},
    {message:'point 2'},
    {message:'point 3'},
    {message:'point 4'},
  ],
  },
  {
    name:'Weakpoint 2',
    points:[
    {message:'point 1'},
    {message:'point 2'},
    {message:'point 3'},
    {message:'point 4'},
  ],
  },
  {
    name:'Weakpoint 3',
    points:[
    {message:'point 1'},
    {message:'point 2'},
    {message:'point 3'},
    {message:'point 4'},
  ],
  },
  ])

const data={
    age: age.value,
    gender: gender.value,
}




return { pointslists,rownumber,isHidden };
  }
 
}

</script>