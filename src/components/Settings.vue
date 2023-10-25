
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
    <div class="overflow-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-5 admanagementtbl">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="px-6 py-3">ブランド・クライアント名</th>
        <th class="px-6 py-3">リクエスト者</th>
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
        <th class="px-6 py-3">広告するSKU番号</th>
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
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">Account Name </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="requester" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ row.advskunumber }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
            <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="adtype" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="mb-3">
            <select id="optimizationstrategy" class="w-auto  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Conversion</option>
              <option>Page View</option>
              <option>Reach</option>
            </select>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          <div class="mb-3">
            <select id="adformat" class="w-auto  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>画像</option>
              <option>動画</option>
            </select>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
            <div class="mb-3">
            <select id="targeting" class="w-auto  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Context</option>
              <option>Audience</option>
            </select>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="number" class="p-3 border w-full" v-model="dailybudget" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"> <select id="groupID" class="w-auto  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="1">画像：1</option>
              <option value="2">見出し：2</option>
              <option value="3">両方：3</option>
            </select></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"> <select id="purpose" class="w-auto  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="AB">AB：A/B test</option>
              <option value="BR">BR:Brand Awareness</option>
              <option value="CA">CA:キャンペーン</option>
              <option value="EV">EV：季節イベント</option>
            </select></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"> <select id="billingtype" class="w-auto  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="CPC">CPC</option>
              <option value="VCPM">VCPM</option>
            </select></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="row.advskunumber" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="advasin" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">『ブルーライトの心配ゼロ。目に優しい映し出し。』</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="category1" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="category2" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="category3" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="lookback1" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="lookback2" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="narrowdown" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="cpc" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="image" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="imagelink" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="market" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><input type="text" class="p-3 border w-full" v-model="appeal" /></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><textarea class="p-3 border w-full" v-model="comment" placeholder=""></textarea></td>
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

export default {
setup() {

const rows = ref([
  { advskunumber: ''},
  { advskunumber: ''},
  { advskunumber: ''},
]);

const getValues = () => {
      const values = rows.value;
      console.log(values);
    };

return {
  rows,getValues

};
 
}
}

</script>
<style scoped>
.admanagementtbl tr th{min-width:150px}
</style>