
<template>
    <div class="greetings">
      <div class="flex items-center">
        <button type="button" class="text-white bg-blue-500  hover:bg-blue-600 focus:ring-4 rounded-lg text-sm px-2.5 py-2 text-sm text-center mr-5 inline-flex items-center" @click="$router.go(-1)">
          <svg class="w-3 h-3 mr-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
        Back</button>
      </div>
      <div class="relative overflow-x-auto mt-10">


  <div>

  <div class="">
  <form class="">
    <div class="overflow-auto mb-3">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-5 admanagementtbl">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="px-6 py-3">ブランド・クライアント名</th>
        <th class="px-6 py-3">リクエスト者</th>
        <th class="px-6 py-3">キャンペーン作成番号</th>
        <th class="px-6 py-3">キャンペーンID</th>
        <th class="px-6 py-3">依頼日</th>
        <th class="px-6 py-3">広告タイプ</th>
        <th class="px-6 py-3">最適化戦略</th>
        <th class="px-6 py-3">広告フォーマット</th>
        <th class="px-6 py-3">ターゲティング</th>
        <th class="px-6 py-3">1日の予算</th>
        <th class="px-6 py-3">グループID</th>
        <th class="px-6 py-3">目的</th>
        <th class="px-6 py-3">課金タイプ</th>
        <th class="px-6 py-3">広告するシリアル番号</th>
        <th class="px-6 py-3">代表ASIN</th>
        <th class="px-6 py-3">広告ASIN</th>
        <th class="px-6 py-3">見出し文章</th>
        <th class="px-6 py-3">カテゴリー①</th>
        <th class="px-6 py-3">カテゴリー②</th>
        <th class="px-6 py-3">カテゴリー③</th>
        <th class="px-6 py-3">ルックバック①</th>
        <th class="px-6 py-3">ルックバック②</th>
        <th class="px-6 py-3">絞り込み</th>
        <th class="px-6 py-3">"CPC（MAX）"</th>
        <th class="px-6 py-3">画像</th>
        <th class="px-6 py-3">画像リンク</th>
        <th class="px-6 py-3">市場</th>
        <th class="px-6 py-3">訴求</th>
        <th class="px-6 py-3">コメント</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border" v-for="(row, index) in rows" :key="index">
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{row.accountname}} </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="requester" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.campaignnumber" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap" >{{row.purpose}}{{ row.advskunumber }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ row.entryDate }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="mb-3">
            <select id="adtype"  class="w-auto  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>SD</option>
              <option>SB</option>
            </select>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="mb-3">
            <v-select label="optimizationstrategy" taggable pushTags :options="['Conversion','Page view','Reach','Drive Page visits','Grow brand impression share']" v-model="row.optimizationstrategy" ></v-select>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="mb-3">
            <v-select label="adformat" taggable pushTags :options="['Text only','Movie','Image']" v-model="row.adformat" ></v-select>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
            <div class="mb-3">
              <v-select label="targeting" taggable pushTags :options="['Context','Audience']" v-model="row.targeting" ></v-select>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="number" class="p-3 border w-full" v-model="dailybudget" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"> <select id="groupID" class="w-auto  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="1">画像：1</option>
              <option value="2">見出し：2</option>
              <option value="3">両方：3</option>
            </select></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <v-select  taggable pushTags :options="[
            {label: 'AB:A/B test', value: 'AB'},
            {label: 'BR:Brand Awareness', value: 'BR'},
            {label: 'CA:キャンペーン', value: 'CA'},
            {label: 'EV:季節イベント', value: 'EV'}
            ]" v-model="row.purpose" ></v-select>
         </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"> 
          <v-select label="billingtype" taggable pushTags :options="['CPC','VCPM']" v-model="row.billingtype" ></v-select></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"  >{{ row.advskunumber}}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><textarea class="p-3 border w-full" v-model="row.repasin"></textarea></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><textarea class="p-3 border w-full" v-model="row.advasin"></textarea></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{row.headline}}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.category1" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.category2" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.category3" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.lookback1" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.lookback2" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.narrowdown" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.cpc" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.image" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.imagelink" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.market" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.appeal" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><textarea class="p-3 border w-full" v-model="row.comment" placeholder=""></textarea></td>
      </tr>

    </tbody>
  </table>
</div>
</form>
<button type="button"  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
<RouterLink :to= "{ name: 'admanagement'}"><button type="button"  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button></RouterLink>
 
</div>


</div>
  </div>
  
    </div>
  </template>

<script >
import { ref, onMounted , computed} from "vue";
import { api } from '../boot/axios';
import { useRoute } from 'vue-router'
import authHeader from '../services/auth-header';

export default {
setup() {
  const entryDate = ref(new Date().toLocaleDateString());

const getValues = () => {
      const values = rows.value;
      console.log(values);
    };

const product=ref(null);
const headlines=ref(null);
const route = useRoute();

function loadData () {
  api.get(`https://api.j-wire.tech/v1/products/${route.params.id}`, { headers: authHeader() })
      .then((response) => {
        product.value = response.data.data;
        console.log(product.value);
        rows.value = [{ accountname:'Account 1', headline:'『ブルーライトの心配ゼロ。目に優しい映し出し。』',campaignID:'', advskunumber: '',repasin:product.value.asin,advasin:product.value.asin,entryDate:entryDate},
  { accountname:'Account 1', headline:'headline 2',campaignID:'',advskunumber: '',repasin:product.value.asin,advasin:product.value.asin,entryDate:entryDate},
  { accountname:'Account 1', headline:'headline 3',campaignID:'', advskunumber: '',repasin:product.value.asin,advasin:product.value.asin,entryDate:entryDate},
  { accountname:'Account 1', headline:'Weakpoint headline 1',campaignID:'', advskunumber: '',repasin:product.value.asin,advasin:product.value.asin,entryDate:entryDate},
  { accountname:'Account 1', headline:'headline 2',campaignID:'',advskunumber: '',repasin:product.value.asin,advasin:product.value.asin,entryDate:entryDate},
  { accountname:'Account 1', headline:'headline 3',campaignID:'', advskunumber: '',repasin:product.value.asin,advasin:product.value.asin,entryDate:entryDate},
];
        getHeadlines(product.value.id);
     
       // getRivalHeadlines(product.value.id);
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

const rows =ref(null);

const getHeadlines = (product_id) => {
  console.log(product_id);
  api.get(`https://api.j-wire.tech/v1/headlines/`,new URLSearchParams( {"product_id":product_id}), { headers: authHeader() })
      .then((response) => {
        headlines.value = response.data.data;
        console.log(headlines.value);
    
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
};

return {
  rows,getValues,entryDate,getHeadlines,product,headlines

};
 
}
}

</script>
<style scoped>
.admanagementtbl tr th{min-width:150px}
</style>