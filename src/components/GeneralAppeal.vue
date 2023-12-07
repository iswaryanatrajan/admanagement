
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
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><img  width='50' :src="productImages[row.id]" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{row.asin}}</td>
      </tr>
    </tbody>
  </table>

  <div>
    <q-spinner v-if = "loading"
        color="primary"
        size="4em"
        class="loadingspinner"
        :thickness="3"
      /> 

<tabs>
  <tab name="General Appeal">
  <div class="flex no-wrap">
  <form class="">
    <div class="w-full overflow-auto">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400 my-5">
   <!-- <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="w-2/5 px-6 py-3"></th>
        <th class="w-1/5 px-6 py-3"></th>
      </tr>
    </thead>-->
    <tbody>
      <tr class="border" v-for="(generalappealform,i) in generalappealforms" v-bind:key="generalappealform.id">

        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="text-h7 mb-3">①訴求(appeal)　Strong point</div>
          <div class="mb-3">
            <textarea class="p-3 border  border-gray-300 rounded-lg w-full" rows="10"   v-model="generalappealform.strong_point" :disabled="generalappealform.editable==false" placeholder="Enter a strong point"></textarea>
            </div>
            <div class="text-h7 mb-3">②ターゲット who is the target?</div>
          <div class="mb-3 flex items-center">
           
            <label for="age" class="block mr-2 text-sm font-medium text-gray-900 dark:text-white w-100" >Age:</label>
            <select id="age" v-model="generalappealform.min_age" :disabled="generalappealform.editable==false" class="w-max mr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Age</option>
              <option v-for="index in 100" :key="index" :value="index">
                  {{ index }}
              </option>
            </select> ~
            <select id="age" v-model="generalappealform.max_age" :disabled="generalappealform.editable==false" class="w-max ml-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Select Age</option>
              <option v-for="index in computedArr" :key="index" :value="index">
                  {{ index }}
              </option>
           
            </select>
          </div>
          <div class="mb-3">
            <label for="gender" class="block mr-2 text-sm font-medium text-gray-900 dark:text-white w-100">Gender:</label>
            <select id="gender" v-model="generalappealform.gender" :disabled="generalappealform.editable==false" class="w-max  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Select">Select Gender</option>
              <option value="男性">Male （男性）</option>
              <option value="女性">Female （女性）</option>
              <option value="男性と女性両方">Both（男性と女性両方）</option>
            </select>
          </div>
          <div class="mb-3">
          <label for="why" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-auto">ターゲットにする悩みまたは欲しい理由:<br/> Why they want to have it?</label>
          <textarea class="p-3 border border-gray-300 w-full rounded-lg" :disabled="generalappealform.editable==false" v-model="generalappealform.motivation" placeholder=""></textarea>
          </div>
          <div>
          <label for="productfeature" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-100">どの特徴が、どのように欲しくなるのか、解決するのか:<br/> What type of your product feature would solve this issue?</label>
          <textarea class="p-3 border border-gray-300 w-full rounded-lg" :disabled="generalappealform.editable==false" v-model="generalappealform.solving_feature" placeholder=""></textarea>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap flex flex-start w-max items-center">
         <!--- <button type="button" @click="isHiddenGA = false" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">送信</button>-->
         <button type="button" v-if="generalappealform.editable"  @click="confirmappeal(i)" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">送信</button>
         <button type="button" v-else  @click="getProductHeadlines(i)" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">送信</button>
    
          <svg @click="deleteRow(i)"  class="w-6 h-6 text-grey-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
          </svg>  
          <q-dialog v-model="confirmappealmodal" persistent>
            <q-card style="width: 900px; max-width: 80vw;">
              <q-toolbar>
                <q-toolbar-title>Confirm Appeal Target</q-toolbar-title>
                <q-btn flat round dense icon="close" v-close-popup />
              </q-toolbar>
              <q-card-section>
                <textarea class="p-3 border w-full"  rows="3" v-model="confirmappealtext" ></textarea>
              </q-card-section>
            <q-card-section>
            <q-btn  color="primary" @click="submitappeal(i)" icon="add" label="Save" v-close-popup/>
            </q-card-section>
            </q-card>
          </q-dialog>

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
        <h6 class="font-bold ">Product Headlines</h6>
        <button type="button" @click="showModal" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-2 text-center ml-3 mb-2　inline-flex items-center">
      Revise
    <svg class="w-3 h-3 ml-2 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
    </svg>   
</button>
<a-modal v-model:open="open" :confirm-loading="confirmLoading" @ok="handleOk()">
      <p>How do you want to revise? {{ headlines[1]}} </p>
      <textarea class="p-3 border w-100"  style="height:100%;width:100%;display:block" v-model="revisetext[index]" ></textarea>
    </a-modal>
</div>
        <table class="text-sm text-left text-gray-500 dark:text-gray-400 my-2">
          <tbody>
            <tr v-for = "(headlinerow,i) in headlines" :key="headlinerow.id">
             <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> 
              <span  v-if="!togel[headlinerow.id]">{{ headlinerow.headline }}</span>
              <textarea v-else class="p-3 border w-full"  v-model="headlinerow.headline" :placeholder="headlinerow.headline"  ></textarea>
            </td>
             <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> {{ headlinerow.headline.trim().length}}</td>
              <td class="px-2 py-1">
              <span class="flex">
                <button
              type="button"
              class="mr-3"
              :class="{ togel: togel[headlinerow.id] }"
              @click.prevent="toggle(headlinerow.id),editHeadline(i)"
            >
              {{ !togel[headlinerow.id] ? "Edit" : "Save" }}
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
      <tr class="border"   v-for="(benchmarkform,i) in benchmarkforms" v-bind:key="benchmarkform.id">
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
          <button type="button" @click="confirmbenchmark(i)" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">送信</button>
            <svg @click="deleteRivalRow(i)"  class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>  
                <q-dialog v-model="confirmbenchmarkmodal" persistent>
                  <q-card style="width: 900px; max-width: 80vw;">
                    <q-toolbar>
                      <q-toolbar-title>Confirm Benchamrk</q-toolbar-title>
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-toolbar>
                    <q-card-section>
                      <textarea class="p-3 border w-full"  rows="3" v-model="confirmbenchmarktext" ></textarea>
                    </q-card-section>
                  <q-card-section>
                  <q-btn  color="primary" @click="submitbenchmark(i)" icon="add" label="Save" v-close-popup/>
                  </q-card-section>
                  </q-card>
                </q-dialog>
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
        <h6 class="font-bold ">Rival Headlines</h6>
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
                <span  v-if = "!togelrival[rivalheadline.id]">{{ rivalheadline.headline }}</span>
              <textarea v-else class="p-3 border w-100"  v-model="rivalheadline.headline" :placeholder="rivalheadline.headline"  ></textarea></td>
              <td class="px-2 py-1 font-medium text-gray-700 whitespace-nowrap"> {{ rivalheadline.headline.trim().length}}</td>
              <td class="flex px-2 py-1">
                <button
              type="button"
              class="mr-3"
              :class="{ togelrival: togelrival[rivalheadline.id] }"
              @click.prevent="togglerival(rivalheadline.id),editRivalHeadline(i)"
            >
              {{ !togelrival[rivalheadline.id] ? "edit" : "close" }}
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
<RouterLink  :to= "{ name: 'adsettings'}">
  <button type="button"  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button></RouterLink>
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
import { useQuasar } from 'quasar';
import axios from 'axios';

export default {
  name:'Create Headline',
  setup() {

    const route = useRoute();
    const $q = useQuasar();
    const productImages = ref({});
const gender = ref("");
const confirmappealmodal = ref(false);
const confirmappealtext =ref("");
const confirmbenchmarkmodal =ref(false);
const confirmbenchmarktext =ref("");
const loading = ref(false);

const strong_point = ref("");
const motivation = ref("");
const solving_feature = ref("");
const min_age= ref(10);
const max_age= ref(20);
let generalappealforms = ref([ 
  {strong_point: '', motivation: '',solving_feature:'',min_age:10,max_age:20,gender:'',editable:true},
]);
let benchmarkforms = ref([ 
  {rival_product_info: '', weak_point: '',improvement:'',editable:true},
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

const handleOk = (i) => {
  console.log(revisetext.value)
  confirmLoading.value = true;
  const revisedata = {

  }
  api.put(`https://api.j-wire.tech/v1/headlines/revise/`,appealdata, { headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        const product_id = response.data.data.product_id;
        const appealtargetid = response.data.data.id;
        generateProductHeadlines(appealtargetid);
        getAppealTargets(product_id);
      })
      .catch(() => {
        console.log('not ht')
      })
  setTimeout(() => {
    open.value = false;
    confirmLoading.value = false;
  }, 2000);
};
const row=ref(null);
function loadData () {
  loading.value=true;
  api.get(`https://api.j-wire.tech/v1/products/${route.params.id}`, { headers: authHeader() })
      .then((response) => {
        row.value = response.data.data;
        console.log(row.value);
        if (row.value.image_id != "") {
          fetchImage(row.value.id, row.value.image_id);
        }
        getAppealTargets(row.value.id);
        getBenchmarks(row.value.id);
        loading.value = false;
      })
      .catch(() => {
        console.log('not ht')
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
  }
  loadData();

  const fetchImage = async (productId, imageId) => {
      try {
        const response = await axios.get(`https://api.j-wire.tech/v1/products/images/${imageId}`, {
          responseType: 'arraybuffer',
        });

        const image = `data:image/jpeg;base64,${btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;
        
        productImages.value[productId] = image;
        //console.log(productImages.value[productId]);
      } catch (error) {
        console.error(`Failed to fetch image for product ID ${productId}:`, error);
      }
    };

const headlines = ref([]);
const rivalheadlines =ref([]);
const showheadlines = ref(false);
const showrivalheadlines = ref(false);
const togel = ref();
const togelrival = ref();
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
  console.log(generalappealforms.value[i].id);
  const appealtarget_id=generalappealforms.value[i].id;
  loading.value= true;
  /*if(appealtarget_id != undefined){
  console.log(appealtarget_id);
    api.put(`https://api.j-wire.tech/v1/products/appeal-target/update/`+appealtarget_id,appealdata, { headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        const product_id = response.data.data.product_id;
        getAppealTargets(product_id);
        getProductHeadlines(appealtarget_id);
        loading.value= false;
      })
      .catch(() => {
        console.log('not ht')
      })
  }
  else{*/
 api.post(`https://api.j-wire.tech/v1/products/appeal-target/create/`,appealdata, { headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        const product_id = response.data.data.product_id;
        const appealtargetid = response.data.data.id;
        generateProductHeadlines(appealtargetid);
        getAppealTargets(product_id);

      })
      .catch(() => {
        console.log('not ht')
      })
    //}

}
const confirmappeal = (i) => {
  confirmappealtext.value = "この商品は" + generalappealforms.value[i].strong_point+"という特徴があります。\nその人たちは"+ generalappealforms.value[i].min_age + "~" + generalappealforms.value[i].max_age + "才くらいの" + generalappealforms.value[i].gender + "で" + generalappealforms.value[i].motivation + "\nこの商品は" + generalappealforms.value[i].solving_feature + "といったことを説明したキャッチコピーを10とおり作成したいです。"
  confirmappealmodal.value = true;
}



const confirmbenchmark = (i) => {
  confirmbenchmarktext.value = benchmarkforms.value[i].rival_product_info+"をターゲットにしています。\nその人たちは"+ benchmarkforms.value[i].weak_point + "といった傾向があります。この商品は" + benchmarkforms.value[i].improvement + "といったことを説明したキャッチコピーを10とおり作成したいです。" 
  confirmbenchmarkmodal.value = true;
}

const submitbenchmark = (i) => {
  const appealdata= {
  product_id:route.params.id,
  rival_product_info:benchmarkforms.value[i].rival_product_info,
  weak_point: benchmarkforms.value[i].weak_point,
  improvement: benchmarkforms.value[i].improvement,
};
  console.log(appealdata);
 api.post(`https://api.j-wire.tech/v1/benchmark/create`,appealdata, { headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        const product_id = response.data.data.product_id;
        const benchmarkid = response.data.data.id;
        getRivalHeadlines(benchmarkid);
      })
      .catch(() => {
        console.log('not ht')
      })
   /* 
    const appealdata= confirmbenchmarktext.value;
    api.post(`https://api.j-wire.tech/v1/benchmark`,appealdata, { headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        const product_id = response.data.data.product_id;
       const benchmarkid = response.data.data.id;
        getRivalHeadlines(benchmarkid);
      })
      .catch(() => {
        console.log('not ht')
      })
     */
}

const getProductHeadlines = (i) => {
  loading.value=true;
  const appeal_targetid = generalappealforms.value[i].id;
  api.post(`https://api.j-wire.tech/v1/headlines/generate/`,new URLSearchParams( {"appeal_target_id":appeal_targetid}),{ headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        headlines.value= response.data.data.headlines;
        showheadlines.value=true;
        togel.value = ref(headlines.value.reduce((agg, item) => ({ ...agg, [item.id]: false }), {}))
        console.log(togel);
        loading.value= false;
      })
      .catch(() => {
        console.log('not ht')
      });
  }

  function generateProductHeadlines (appealtargetid) {
  api.post(`https://api.j-wire.tech/v1/headlines/generate/`,new URLSearchParams( {"appeal_target_id":appealtargetid}),{ headers: authHeader() })
      .then((response) => {
        console.log(response.data.data);
        headlines.value= response.data.data.headlines;
        showheadlines.value=true;
        togel.value = ref(headlines.value.reduce((agg, item) => ({ ...agg, [item.id]: false }), {}))
        console.log(togel);
        loading.value= false;
      })
      .catch(() => {
        console.log('not ht')
      })
  }

  function getRivalHeadlines (benchmarkid) {
  api.post(`https://api.j-wire.tech/v1/headlines/rival/generate`,new URLSearchParams( {"benchmark_id":benchmarkid}),{ headers: authHeader() })
      .then((response) => {
        console.log(response.data.data.headlines);
        rivalheadlines.value= response.data.data.headlines;
        showrivalheadlines.value=true;
        togelrival.value = ref(rivalheadlines.value.reduce((agg, item) => ({ ...agg, [item.id]: false }), {}))
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
  if((generalappealforms.value[i].id) != undefined){
    api.delete(`https://api.j-wire.tech/v1/products/appeal-target/delete/`+ generalappealforms.value[i].id,{ headers: authHeader() })
      .then((response) => {
        console.log("Row deleted");
        getAppealTargets(route.params.id);
      })
      .catch(() => {
        console.log('not ht')
      })
  }
 else generalappealforms.value.splice(i, 1);
}
const deleteRivalRow = (i) => {
  
  if((benchmarkforms.value[i].id) != undefined){
    api.delete(`https://api.j-wire.tech/v1/products/benchmark/delete/`+ benchmarkforms.value[i].id,{ headers: authHeader() })
      .then((response) => {
        console.log("Row deleted");
        getAppealTargets(route.params.id);
      })
      .catch(() => {
        console.log('not ht')
      })
  }
else
  benchmarkforms.value.splice(i, 1);
}

const deleteHeadline = (i) => {
  api.delete(`https://api.j-wire.tech/v1/headlines/delete/`+headlines.value[i].id, { headers: authHeader() })
  .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log('not ht')
      })
  headlines.value.splice(i, 1);
}


const deleteRivalHeadline = (i) => {
  api.delete(`https://api.j-wire.tech/v1/headlines/delete/`+headlines.value[i].id, { headers: authHeader() })
  .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log('not ht')
      })
  rivalheadlines.value.splice(i, 1);
}

const editRivalHeadline = (i) => {
  api.put(`https://api.j-wire.tech/v1/headlines/update/`+rivalheadlines.value[i].id,{"headline":rivalheadlines.value[i].headline}, { headers: authHeader() })
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log('not ht')
      })
}
const editHeadline = (i) => {
  api.put(`https://api.j-wire.tech/v1/headlines/update/`+headlines.value[i].id,{"headline":headlines.value[i].headline}, { headers: authHeader() })
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log('not ht')
      })
}

function toggle(id) {
     togel.value[id] = !togel.value[id];
}
function togglerival(id) {
     togelrival.value[id] = !togelrival.value[id];
}



function getAppealTargets (pid) {
      api.get(`https://api.j-wire.tech/v1/products/appeal-target/?product_id=`+pid, { headers: authHeader() })
      .then((response) => {
        generalappealforms.value  = response.data.data.appeal_targets;
        console.log(generalappealforms.value);
        generalappealforms.value = generalappealforms.value.map(obj => ({ ...obj, editable: false }));
   
        //generalappealforms.value.map(obj => ({ ...obj, ["editable"]:false}));
       // generalappealforms.value.forEach((v,i,arr)=>arr[i]=`editable:false`)
        console.log(generalappealforms.value);
      })
      .catch(() => {
        console.log('not ht')
      })
}  

function getBenchmarks (pid) {
      api.get(`https://api.j-wire.tech/v1/benchmark/?product_id=`+pid, { headers: authHeader() })
      .then((response) => {
        benchmarkforms.value  = response.data.data.benchmarks
        console.log(benchmarkforms.value);
      })
      .catch(() => {
        console.log('not ht')
      })
}  

return { row, showheadlines,showrivalheadlines,generalappealforms,benchmarkforms, getProductHeadlines,rownumber2,isHiddenGA,isHiddenBC,computedArr,min_age,max_age,revisetext ,open,confirmLoading,showModal,handleOk,editmode,togel,togelrival,productImages,loading,
      toggle,togglerival,strong_point,confirmappealmodal,confirmappeal,confirmappealtext,confirmbenchmarkmodal,confirmbenchmark,confirmbenchmarktext,submitappeal,submitbenchmark,motivation,solving_feature,gender,addgeneralappealrow,headlines,rivalheadlines,deleteRow,deleteHeadline,addbenchmarkrow,deleteRivalRow,deleteRivalHeadline,editHeadline,editRivalHeadline};
  }
 
}

</script>