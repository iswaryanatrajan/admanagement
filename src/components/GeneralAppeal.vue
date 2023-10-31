
<template>
    <div class="greetings">
      <div class="flex items-center">
        <button type="button" class="text-white bg-blue-500  hover:bg-blue-600 focus:ring-4 rounded-lg text-sm px-2.5 py-2 text-center mr-5 inline-flex items-center" @click="$router.go(-1)">
          <svg class="w-3 h-3 mr-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
        Back</button>
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

  <div>
<tabs>
  <tab name="General Appeal">
  <div class="flex">
  <form class="lg:w-2/3 md:w-full">
    <div class="w-full overflow-auto">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400 my-5">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="px-6 py-3">①訴求(appeal)　Strong point</th>
        <th class="px-6 py-3">②ターゲット who is the target?</th>
        <th class="px-6 py-3"></th>
        <th class="px-6 py-3"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="border" v-for="index in rownumber1" :key="index">
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <textarea class="p-3 border w-100" rows="10" style="height:100%;width:100%;display:block" v-model="strongpoint1" placeholder="Enter a strong point"></textarea></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="mb-3 flex items-center">
            <label for="age" class="block mr-2 text-sm font-medium text-gray-900 dark:text-white w-100">Age:</label>
            <select id="age" v-model="minage" class="w-max mr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Age</option>
              <option v-for="index in 100" :key="index" :value="index">
                  {{ index }}
              </option>
            </select> ~
            <select id="age" v-model="maxage" class="w-max ml-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Age</option>
              <option v-for="index in computedArr" :key="index" :value="index">
                  {{ index }}
              </option>
           
            </select>
          </div>
          <div class="mb-3">
            <select id="gender" class="w-max  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Gender</option>
              <option>Male （男性）</option>
              <option>Female （女性）</option>
              <option>Both（男性と女性両方）</option>
            </select>
          </div>
          <div class="mb-3">
          <label for="why" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">ターゲットにする悩みまたは欲しい理由: Why they want to have it?</label>
          <textarea class="p-3 border w-full" v-model="whythisproduct" placeholder=""></textarea>
          </div>
          <div>
          <label for="productfeature" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">どの特徴が、どのように欲しくなるのか、解決するのか:<br> What type of your product feature would solve this issue?</label>
          <textarea class="p-3 border w-full" v-model="productfeature" placeholder=""></textarea>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap flex flex-start">
            <svg @click="deleteRow"  class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>  
         
        </td>
      
      </tr>

    </tbody>
  </table>
</div>
<button type="button" @click="rownumber1++" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center">Add row  
  <svg class="w-3 h-3 ml-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg> </button>
  <button type="button" @click="isHiddenGA = false" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">送信</button>
  </form>
  <div v-show="!isHiddenGA" class="chatgptpoints m-5 lg:w-1/3 md:w-full">
    <div class="strongpoint1points border p-3 " v-for = "(pointslist,index) in pointslistsGA" :key="index">
      <div class="flex items-start justify-between">
        <h3 class="font-bold ">{{ pointslist.name }}</h3>
        <button type="button" @click="showModal" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-2 text-center ml-3 mb-2　inline-flex items-center">
      Revise
    <svg class="w-3 h-3 ml-2 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
    </svg>   
</button>
<a-modal v-model:open="open"   :confirm-loading="confirmLoading" @ok="handleOk">
      <p>How do you want to revise?</p>
      <textarea class="p-3 border w-100"  style="height:100%;width:100%;display:block" v-model="revisetext[index]" ></textarea>
    </a-modal>
</div>
        <table class="text-sm text-left text-gray-500 dark:text-gray-400 my-2">
          <tbody>
            <tr v-for = "(point) in pointslist.points" :key="point.id">
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"><input type="checkbox" value=point.id v-model="checkedtext" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></td>
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap">  <span  v-if = "!togel[point.id]">{{ point.message }}</span>
              <textarea v-else class="p-3 border w-100"  v-model="point.message" :placeholder="point.message"  ></textarea></td>
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> {{ point.message.trim().length}}</td>
              <td class="flex px-2 py-1">
                <button
              type="button"
              class="mr-3"
              :class="{ togel: togel[point.id] }"
              @click.prevent="toggle(point.id)"
            >
              {{ !togel[point.id] ? "edit" : "close ❌" }}
            </button>
                <svg @click="deletetext"  class="w-4 h-4 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>  
              </td>
            </tr>
          </tbody>
          </table>
    </div>

    </div>
  </div>

</tab>
<tab name="Benchmark Comparison">
  <div class="flex">
  <form class="w-1/2">
    <div class="w-full overflow-auto">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400 my-5">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="px-6 py-3">①ターゲット</th>
        <th class="px-6 py-3">②ターゲットのウィークポイント（不安、悩み）</th>
        <th class="px-6 py-3">③ターゲットに勝てる理由を教えてください。</th>
        <th class="px-6 py-3"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="border"  v-for="index in rownumber2" :key="index">
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
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap flex flex-start">
            <svg @click="deleteRow"  class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>  
         
        </td>
      </tr>

    </tbody>
  </table>
</div>
<button type="button" @click="rownumber2++" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center">Add row  
  <svg class="w-3 h-3 ml-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg> </button>
  <button type="button" @click="isHiddenBC = false"  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">送信</button>
 
  </form>
  <div v-show="!isHiddenBC" class="chatgptpoints m-5 w-1/2" >
    <div class="strongpoint1points border p-3 mb-3" v-for = "(pointslist,index) in pointslistsBC" :key="index">
      <div class="flex items-start justify-between">
        <h3 class="font-bold ">{{ pointslist.name }}</h3>
        <button type="button" @click="showModal" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-2 text-center ml-3 mb-2　inline-flex items-center">
      Revise
    <svg class="w-3 h-3 ml-2 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
    </svg>   
</button>
<a-modal v-model:open="open"   :confirm-loading="confirmLoading" @ok="handleOk">
      <p>How do you want to revise?</p>
      <textarea class="p-3 border w-100"  style="height:100%;width:100%;display:block" v-model="revisetext[index]" ></textarea>
    </a-modal>
</div>
<div>
      <table class="text-sm text-left text-gray-500 dark:text-gray-400 my-2"><tbody>
      <tr v-for = "(point) in pointslist.points" :key="point.id">
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap">
                <input type="checkbox" value=point.id v-model="checkedtext" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></td>
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> 
                <span  v-if = "!togel[point.id]">{{ point.message }}</span>
              <textarea v-else class="p-3 border w-100"  v-model="point.message" :placeholder="point.message"  ></textarea></td>
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> {{ point.message.trim().length}}</td>
              <td class="flex px-2 py-1">
                <button
              type="button"
              class="mr-3"
              :class="{ togel: togel[point.id] }"
              @click.prevent="toggle(point.id)"
            >
              {{ !togel[point.id] ? "edit" : "close ❌" }}
            </button>
                
                <svg @click="deletetext"  class="w-4 h-4 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>  
              </td>
            </tr>
      </tbody></table>
    </div>



    </div>
  </div>
</div>
</tab>
</tabs>
</div>
<RouterLink v-show="!isHiddenBC" :to= "{ name: 'adsettings'}">
  <button type="button"  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button></RouterLink>
  </div>

  <div>

  </div>

  
    </div>
  </template>

<script lang="ts">
import { ref, onMounted , computed} from "vue";
import 'ant-design-vue/dist/reset.css';



export default {
  name:'Create Headline',
  setup() {

const gender = ref("");
const age = ref("");
const strongpoint1 = ref("");
const whythisproduct = ref("");
const productfeature = ref("");
const minage= ref(1);
let rownumber1 = ref(3);
let rownumber2 = ref(3);
let isHiddenGA = ref(true);
let isHiddenBC = ref(true);

const open = ref(false);
const editmode = ref(false);
const confirmLoading = ref(false);
const revisetext=ref([])
const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  console.log(revisetext.value)
  confirmLoading.value = true;
  setTimeout(() => {
    open.value = false;
    confirmLoading.value = false;
  }, 2000);
};

const pointslistsGA = ref(
  [{
    id:1,
    name:'strongpoint1',
    points:[
    {id:1,message:'it includes only natural ingredients'},
    {id:2,message:'it includes  natural ingredients'},
    {id:3,message:'headline 3'},
    {id:4,message:'headline 4'},
    {id:5,message:'headline 5'},
    {id:6,message:'headline 6'},
    {id:7,message:'headline 7'},
    {id:8,message:'headline 8'},
    {id:9,message:'headline 9'},
    {id:10,message:'headline 10'},
  ],
  },
  {
    id:2,
    name:'strongpoint2',
    points:[
    {id:1,message:'it includes only natural ingredients'},
    {id:2,message:'it includes  natural ingredients'},
    {id:3,message:'headline 3'},
    {id:4,message:'headline 4'},
    {id:5,message:'headline 5'},
    {id:6,message:'headline 6'},
    {id:7,message:'headline 7'},
    {id:8,message:'headline 8'},
    {id:9,message:'headline 9'},
    {id:10,message:'headline 10'},
  ],
  },
  {
    id:3,
    name:'strongpoint3',
    points:[  
   {id:1,message:'it includes only natural ingredients'},
    {id:2,message:'it includes  natural ingredients'},
    {id:3,message:'headline 3'},
    {id:4,message:'headline 4'},
    {id:5,message:'headline 5'},
    {id:6,message:'headline 6'},
    {id:7,message:'headline 7'},
    {id:8,message:'headline 8'},
    {id:9,message:'headline 9'},
    {id:10,message:'headline 10'},
  ],
  },
  ])

  const pointslistsBC = ref(
  [{
    name:'Weakpoint 1',
    points:[
    {id:1,message:'Why dont you use only natural sources'},
    {id:2,message:'headline 2'},
    {id:3,message:'headline 3'},
    {id:4,message:'headline 4'},
    {id:5,message:'headline 5'},
    {id:6,message:'headline 6'},
    {id:7,message:'headline 7'},
    {id:8,message:'headline 8'},
    {id:9,message:'headline 9'},
    {id:10,message:'headline 10'},
  ]},
  {
    name:'Weakpoint 2',
    points:[
    {id:1,message:'Why dont you use only natural sources'},
    {id:2,message:'headline 2'},
    {id:3,message:'headline 3'},
    {id:4,message:'headline 4'},
    {id:5,message:'headline 5'},
    {id:6,message:'headline 6'},
    {id:7,message:'headline 7'},
    {id:8,message:'headline 8'},
    {id:9,message:'headline 9'},
    {id:10,message:'headline 10'},
  ]},
  {
    name:'Weakpoint 3',
    points:[
    {id:1,message:'Why dont you use only natural sources'},
    {id:2,message:'headline 2'},
    {id:3,message:'headline 3'},
    {id:4,message:'headline 4'},
    {id:5,message:'headline 5'},
    {id:6,message:'headline 6'},
    {id:7,message:'headline 7'},
    {id:8,message:'headline 8'},
    {id:9,message:'headline 9'},
    {id:10,message:'headline 10'},
  ]},

  ])

const data={
    age: age.value,
    gender: gender.value,
   
}

const computedArr = computed(() => {
  let arr = [];
      for (var i = minage.value; i <= 100; i++)
        arr.push(i);
  return arr;
})  

const togel = ref(pointslistsGA.value.reduce((agg, item) => ({ ...agg, [item.id]: false }), {}))

function toggle(id) {
      togel.value[id] = !togel.value[id];
    }


return { pointslistsGA, pointslistsBC, rownumber1,rownumber2,isHiddenGA,isHiddenBC,computedArr,minage,revisetext ,open,confirmLoading,showModal,handleOk,editmode,togel,
      toggle,};
  }
 
}

</script>