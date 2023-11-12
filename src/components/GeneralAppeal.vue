
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

  <div>
<tabs>
  <tab name="General Appeal">
  <div class="flex no-wrap">
  <form class="">
    <div class="w-full overflow-auto">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400 my-5">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="w-2/5 px-6 py-3 w-3">①訴求(appeal)　Strong point</th>
        <th class="w-2/5 px-6 py-3">②ターゲット who is the target?</th>
        <th class="w-1/5 px-6 py-3"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="border" v-for="(generalappealform,i) in generalappealforms" v-bind:key="generalappealform.strong_point">
        <td class="px-4 py-2 font-medium text-gray-700 whitespace-nowrap">
          <textarea class="p-3 border  border-gray-300 w-100 rounded-lg" rows="14" cols="20"  v-model="generalappealform.strong_point" placeholder="Enter a strong point"></textarea></td>
        <td class="w-1/px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="mb-3 flex items-center">
            <label for="age" class="block mr-2 text-sm font-medium text-gray-900 dark:text-white w-100">Age:</label>
            <select id="age" v-model="generalappealform.min_age" class="w-max mr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Age</option>
              <option v-for="index in 100" :key="index" :value="index">
                  {{ index }}
              </option>
            </select> ~
            <select id="age" v-model="generalappealform.max_age" class="w-max ml-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Age</option>
              <option v-for="index in computedArr" :key="index" :value="index">
                  {{ index }}
              </option>
           
            </select>
          </div>
          <div class="mb-3">
            <label for="gender" class="block mr-2 text-sm font-medium text-gray-900 dark:text-white w-100">Gender:</label>
            <select id="gender" v-model="generalappealform.gender"  class="w-max  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Gender</option>
              <option>Male （男性）</option>
              <option>Female （女性）</option>
              <option>Both（男性と女性両方）</option>
            </select>
          </div>
          <div class="mb-3">
          <label for="why" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-auto">ターゲットにする悩みまたは欲しい理由:<br/> Why they want to have it?</label>
          <textarea class="p-3 border border-gray-300 rounded-lg" v-model="generalappealform.motivation" placeholder=""></textarea>
          </div>
          <div>
          <label for="productfeature" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">どの特徴が、どのように欲しくなるのか、解決するのか:<br/> What type of your product feature would solve this issue?</label>
          <textarea class="p-3 border border-gray-300 w-full rounded-lg" v-model="generalappealform.solving_feature" placeholder=""></textarea>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap flex flex-start w-max items-center">
         <!--- <button type="button" @click="isHiddenGA = false" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">送信</button>-->
        <button type="button" @click="submitappeal(i)" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">送信</button>
  
            <svg @click="deleteRow(i)"  class="w-6 h-6 text-grey-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>  
         
        </td>
      
      </tr>

    </tbody>
  </table>
</div>
<button type="button" @click="addgeneralappealrow" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center">Add row  
  <svg class="w-3 h-3 ml-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg> </button>
  </form>
  <div v-show="showheadlines" class="chatgptpoints m-5">
    <div class="strongpoint1points border p-3">
      <div class="flex items-start justify-between">
        <h3 class="font-bold ">Product Headlines</h3>
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
            <tr v-for = "(headline,i) in headlines" :key="headline.id">
             <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap">  <span  v-if = "!toggle[headline.id]">{{ headline.headline }}</span>
              <textarea v-else class="p-3 border w-full"  v-model="headline.headline" :placeholder="headline.headline"  ></textarea></td>
             <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> {{ headline.headline.trim().length}}</td>
              <td class="px-2 py-1">
              <span class="flex">
                <button
              type="button"
              class="mr-3"
              :class="{ togel: togel[headline.id] }"
              @click.prevent="toggle(headline.id)"
            >
              {{ !togel[headline.id] ? "Edit" : "Save" }}
            </button>
                <svg @click="deleteHeadline(i)"  class="w-4 h-4 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>  </span>
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
  <form class="">
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
      <tr class="border"   v-for="(benchmarkform,i) in benchmarkforms" v-bind:key="benchmarkform.weak_point">
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <label for="rivalpdtinfo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">誰をターゲットにしますか？</label>
          <textarea class="p-3 border border-gray-300 rounded-lg w-100"  style="height:100%;width:100%;display:block" v-model="benchmarkform.rival_product_info" placeholder="Rival product information"></textarea></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="">
          <label for="weakpoint1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">ターゲットのウィークポイント</label>
          <textarea class="p-3 border border-gray-300 rounded-lg w-full" v-model="benchmarkform.weak_point" placeholder="Please enter weak point"></textarea>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div>
          <label for="productfeature" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">ターゲットのウィークポイントをどのように改善していますか？</label>
          <textarea class="p-3 border border-gray-300 rounded-lg  w-full" v-model="benchmarkform.improvement" placeholder=""></textarea>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap flex flex-start">
          <button type="button" @click="submitbenchmark(i)" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">送信</button>
            <svg @click="deleteRivalRow(i)"  class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>  
         
        </td>
      </tr>

    </tbody>
  </table>
</div>
<button type="button" @click="addbenchmarkrow" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center">Add row  
  <svg class="w-3 h-3 ml-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg> </button>

 
  </form>
  <div v-show="showrivalheadlines" class="chatgptpoints p-5" >
    <div class="strongpoint1points border p-3 mb-3">
      <div class="flex items-start justify-between">
        <h3 class="font-bold ">Rival Headlines</h3>
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
      <tr v-for = "(rivalheadline,i) in rivalheadlines" :key="rivalheadline.id" >
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> 
                <span  v-if = "!togel[rivalheadline.id]">{{ rivalheadline.headline }}</span>
              <textarea v-else class="p-3 border w-100"  v-model="rivalheadline.headline" :placeholder="rivalheadline.headline"  ></textarea></td>
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> {{ rivalheadline.headline.trim().length}}</td>
              <td class="flex px-2 py-1">
                <button
              type="button"
              class="mr-3"
              :class="{ togel: togel[rivalheadline.id] }"
              @click.prevent="toggle(rivalheadline.id)"
            >
              {{ !togel[rivalheadline.id] ? "edit" : "close" }}
            </button>
                
                <svg @click="deleteRivalHeadline(i)"  class="w-4 h-4 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
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
import { api } from '../boot/axios'
import { useRoute } from 'vue-router'
import UserService from "../services/user.service";
import authHeader from '../services/auth-header';

export default {
  name:'Create Headline',
  setup() {

    const route = useRoute();

const gender = ref("");

const strong_point = ref("");
const motivation = ref("");
const solving_feature = ref("");
const min_age= ref(10);
const max_age= ref(20);
let generalappealforms = ref([ 
  {strong_point: '', motivation: '',solving_feature:'',min_age:10,max_age:20,gender:''},
  {strong_point: '', motivation: '',solving_feature:'',min_age:10,max_age:20,gender:''},
  {strong_point: '', motivation: '',solving_feature:'',min_age:10,max_age:20,gender:''},
]);
let benchmarkforms = ref([ 
  {rival_product_info: '', weak_point: '',improvement:''},
  {rival_product_info: '', weak_point: '',improvement:''},
  {rival_product_info: '', weak_point: '',improvement:''},
]);
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
const row=ref(null);
function loadData () {
  api.get(`http://159.223.87.212/api/v1/products/${route.params.id}`, { headers: authHeader() })
      .then((response) => {
        row.value = response.data.data;
        console.log(row.value);
        getAppealTargets(row.value.id);
        getBenchmarks(row.value.id);
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

const headlines = ref([
      {
        "id": "654df921822cec8dd74e3e9d",
        "headline": "For those who want to reduce background noise.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 1
      },
      {
        "id": "654df922822cec8dd74e3f48",
        "headline": "For those who want to be more productive.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 2
      },
      {
        "id": "654df922822cec8dd74e4065",
        "headline": "For those who want to better concentrate.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 3
      },
      {
        "id": "654df923822cec8dd74e4121",
        "headline": "For those who want to enjoy their music more.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 4
      },
      {
        "id": "654df923822cec8dd74e4216",
        "headline": "For those who want to feel more connected.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 5
      },
      {
        "id": "654df924822cec8dd74e42d1",
        "headline": "For those who want to make calls without distractions.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 6
      },
      {
        "id": "654df924822cec8dd74e43bf",
        "headline": "For those who want to hear better.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 7
      },
      {
        "id": "654df925822cec8dd74e44af",
        "headline": "For those who want to be more relaxed.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 8
      },
      {
        "id": "654df925822cec8dd74e459e",
        "headline": "For those who want to be more present.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 9
      },
      {
        "id": "654df926822cec8dd74e467c",
        "headline": "For those who want to improve their listening experience.",
        "product_id": "65464683eb907fa316a36a59",
        "appeal_target_id": "654df82380cb4b3e6f099363",
        "seq": 10
      }
    ]);

const rivalheadlines =ref([]);
const showheadlines = ref(false);
const showrivalheadlines = ref(false);

const submitappeal = (i) => {
  const appealdata= {
  product_id:route.params.id,
  strong_point:generalappealforms.value[i].strong_point,
    min_age: generalappealforms.value[i].min_age,
    max_age: generalappealforms.value[i].max_age,
    gender: generalappealforms.value[i].gender,
    motivation:generalappealforms.value[i].motivation,
    solving_feature:generalappealforms.value[i].solving_feature
};
  console.log(appealdata);
 api.post(`http://159.223.87.212/api/v1/products/appeal-target/`,appealdata, { headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        const product_id = response.data.data.product_id;
        const appealtargetid = response.data.data.id;
        getProductHeadlines(appealtargetid);
      })
      .catch(() => {
        console.log('not ht')
      })
}

const submitbenchmark = (i) => {
  const appealdata= {
  product_id:route.params.id,
  rival_product_info:benchmarkforms.value[i].rival_product_info,
  weak_point: benchmarkforms.value[i].weak_point,
  improvement: benchmarkforms.value[i].improvement,
};
  console.log(appealdata);
 api.post(`http://159.223.87.212/api/v1/benchmark/`,appealdata, { headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        const product_id = response.data.data.product_id;
        const benchmarkid = response.data.data.id;
        getRivalHeadlines(benchmarkid);
      })
      .catch(() => {
        console.log('not ht')
      })
}

function getProductHeadlines (appealtargetid) {
  const data={
    appeal_target_id:appealtargetid
  }
  api.post(`http://159.223.87.212/api/v1/headlines/`,new URLSearchParams( {"appeal_target_id":appealtargetid}),{ headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        headlines.value= response.data.data.headlines;
        showheadlines.value=true;
      })
      .catch(() => {
        console.log('not ht')
      })
  }

  function getRivalHeadlines (benchmarkid) {
  const data={
    benchmark_id:benchmarkid
  }
  api.post(`http://159.223.87.212/api/v1/headlines/rival`,new URLSearchParams( {"benchmark_id":benchmarkid}),{ headers: authHeader() })
      .then((response) => {
        console.log(response.data.data.headlines);
        rivalheadlines.value= response.data.data.headlines;
        showrivalheadlines.value=true;
      })
      .catch(() => {
        console.log('not ht')
      })
  }


const computedArr = computed(() => {
  let arr = [];
      for (var i = min_age.value; i <= 100; i++)
        arr.push(i);
  return arr;
})  

const addgeneralappealrow = () => {
  generalappealforms.value = [...generalappealforms.value,  {strong_point: '', motivation: '',solving_feature:'',min_age:10,max_age:20,gender:''}];
}
const addbenchmarkrow = () => {
  benchmarkforms.value = [...benchmarkforms.value,  {rival_product_info: '', weak_point: '',improvement:''}];
}
const deleteRow = (i) => {
  generalappealforms.value.splice(generalappealforms.value[i], 1);
}
const deleteRivalRow = (i) => {
  benchmarkforms.value.splice(benchmarkforms.value[i], 1);
}

const deleteHeadline = (i) => {
  headlines.value.splice(headlines.value[i], 1);
}

const deleteRivalHeadline = (i) => {
  rivalheadlines.value.splice(rivalheadlines.value[i], 1);
}

const togel = ref(pointslistsGA.value.reduce((agg, item) => ({ ...agg, [item.id]: false }), {}))

function toggle(id) {
      togel.value[id] = !togel.value[id];
    }

function getAppealTargets (pid) {
      api.get(`http://159.223.87.212/api/v1/products/appeal-target/?product_id=`+pid, { headers: authHeader() })
      .then((response) => {
        generalappealforms.value  = response.data.data.appeal_targets
        console.log(generalappealforms.value);
      })
      .catch(() => {
        console.log('not ht')
      })
}  

function getBenchmarks (pid) {
      api.get(`http://159.223.87.212/api/v1/benchmark/?product_id=`+pid, { headers: authHeader() })
      .then((response) => {
        benchmarkforms.value  = response.data.data.benchmarks
        console.log(benchmarkforms.value);
      })
      .catch(() => {
        console.log('not ht')
      })
}  

return { row,pointslistsGA, pointslistsBC, showheadlines,showrivalheadlines,generalappealforms,benchmarkforms, rownumber2,isHiddenGA,isHiddenBC,computedArr,min_age,max_age,revisetext ,open,confirmLoading,showModal,handleOk,editmode,togel,
      toggle,strong_point,submitappeal,submitbenchmark,motivation,solving_feature,gender,addgeneralappealrow,headlines,rivalheadlines,deleteRow,deleteHeadline,addbenchmarkrow,deleteRivalRow,deleteRivalHeadline};
  }
 
}

</script>