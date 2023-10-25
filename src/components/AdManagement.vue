
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
        <th class="px-6 py-3">status</th>
        <th class="px-6 py-3">Comment</th>
        <th class="px-6 py-3">キャンペーンタイトル(最初)</th>
        <th class="px-6 py-3">広告タイプ</th>
        <th class="px-6 py-3">1日の予算</th>
        <th class="px-6 py-3">広告グループ</th>
        <th class="px-6 py-3">最適化戦略</th>
        <th class="px-6 py-3">広告フォーマット</th>
        <th class="px-6 py-3">代表ASIN</th>
        <th class="px-6 py-3">広告ASIN</th>
        <th class="px-6 py-3">ターゲティング</th>
        <th class="px-6 py-3">ルックバック</th>
        <th class="px-6 py-3">カテゴリー1</th>
        <th class="px-6 py-3">カテゴリー2</th>
        <th class="px-6 py-3">カテゴリー3</th>
        <th class="px-6 py-3">カテゴリー4</th>
        <th class="px-6 py-3">カテゴリー5</th>
        <th class="px-6 py-3">絞り込み</th>
        <th class="px-6 py-3">CPC（MAX）</th>
        <th class="px-6 py-3">見出し文章</th>
        <th class="px-6 py-3">No Logo or Logo Name</th>
        <th class="px-6 py-3">画像名称</th>
        <th class="px-6 py-3">画像リンク</th>
        <th class="px-6 py-3">開始日</th>
        <th class="px-6 py-3">初期設定確認(2日後)</th>
        <th class="px-6 py-3">クリック数チェック</th>
        <th class="px-6 py-3">CPCチェック</th>
        <th class="px-6 py-3">コメント</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border" v-for="adrow in adrows" :key="adrow">
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap" >{{ adrow.status }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.comment}}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.campaignTitle }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.adType }} </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.dailyBudget }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.adGroup }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.optimizationStrategy }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.adFormat }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.repASIN }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.adASIN }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.targeting }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.lookback }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.category1 }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.category2 }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.category3 }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.category4 }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.category5 }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.narrowdown }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.cpcmax }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.headingText }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.logo }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.image }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.imagelink }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.startDate }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.initialsettingsconfirmation }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.checkNumofclicks }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.cpcCheck }}</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ adrow.comments }}</td>
       </tr>

    </tbody>
  </table>
</div>
</form>
<button type="button"  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
  
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


let rownumber1 = ref(3);
const adrows = [{
    "status":"Not ready",
    "comment":"緊急",
    "campaignTitle":"AB001_SD_20231025_A/B test_CPC_audience_B000001_test市場1",
    "adType":"SD",
    "dailyBudget":1000,
    "adGroup":"見出し文章1_Views:カテゴリー1 / Views:カテゴリー2 / Views:カテゴリー3 / Views:カテゴリー4 / Views:カテゴリー5_audience_lookback7_lookback14_CPC_A/B test_20231025_SD_AB001_2_B000001_imageA",
    "optimizationStrategy": "Conversion",
    "adFormat": "Image",
    "repASIN": "B000001",
    "adASIN": "B000001,B00002,B00003",
    "targeting":"audience",
    "lookback":"lookback7_lookback14",
    "category1":"Views:カテゴリー1",
    "category2":"Views:カテゴリー2",
    "category3":"Views:カテゴリー3",
    "category4":"Views:カテゴリー4",
    "category5":"Views:カテゴリー5",
    "narrowdown":"over 10000円",
    "cpcmax":"recommend 20%OFF",
    "headingText":"見出し文章1",
    "logo":"",
    "image":"imageA",
    "imagelink":"asset/image.jpg",
    "startDate":"2023/10/13",
    "initialsettingsconfirmation":"2023/10/13",
    "checkNumofclicks":"⚫︎以下の場合、単価⚫︎%UP",
    "cpcCheck":"設定単価より⚫︎%高い場合、連絡",
    "comments":"Context の場合、全て販売価格以上にしてください。"

}];

return {  rownumber1,adrows };
  }
 
}

</script>
<style scoped>
.admanagementtbl tr th{min-width:150px}
</style>