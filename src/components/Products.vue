

<template>
    <div class="greetings">
      <div class="flex items-center">
        <button type="button" class="text-white bg-blue-500  hover:bg-blue-600 focus:ring-4 rounded-lg text-sm px-2.5 py-2 text-sm text-center mr-5 inline-flex items-center" @click="$router.go(-1)">
          <svg class="w-3 h-3 mr-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
        Back</button><h3 class="font-bold text-xl">Products</h3>
      </div>
      <div class="relative overflow-x-auto mt-10">
  <div class="q-pa-md">
  <q-btn @click="addprompt = true" color="primary" label="Add" ></q-btn>

  <q-dialog v-model="addprompt" persistent>
      <q-card style="width: 900px; max-width: 80vw;">
        <q-toolbar>
          <q-toolbar-title>Add Product</q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <div class="flex items-center">
        <q-card-section>
          <div class="">Product Name</div>
          <q-input dense v-model="product_name" autofocus @keyup.enter="addprompt = false"></q-input>
        </q-card-section>
        <q-card-section>
          <div class="">ASIN</div>
          <q-input dense v-model="asin"></q-input>
        </q-card-section>
        <q-card-section>
          <div class="">Product Image</div>
          <input type="file" @change="handleFileUpload" name="image" id="image"  accept="image/*" />

        </q-card-section>
        <q-btn  color="primary" @click="addProduct()" icon="add" label="Save"/>
      </div>

       <!-- Child Product -->

      <div class="flex items-center pl-5" v-for="(childproduct,i) in childproducts" v-bind:key="childproduct">
        <q-card-section>
          <div class="">Child Product Name</div>
          <q-input dense v-model="childproduct.child_name" autofocus></q-input>
        </q-card-section>
        <q-card-section>
          <div class="">ASIN</div>
          <q-input dense v-model="childproduct.child_asin"></q-input>
        </q-card-section>
        <q-card-section>
          <div class="">Product Image</div>
          <input type="file"  @change="handleFileUpload" name="child_image" id="child_image"  accept="image/*" />
        </q-card-section>
        <q-card-section>
       <q-btn size="sm" color="primary" round dense @click="deletechild(i)" icon="delete" />
        <q-btn size="sm" color="primary" round dense @click="addanotherchild(i)" icon="add" label="Save"/>
      </q-card-section>
    

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" @click="loadData()" v-close-popup></q-btn>
        </q-card-actions>
      </div>
      </q-card>
    </q-dialog>

</div>

  <div class="q-pa-md">
    <q-table v-if="rows!==null"
      title="Products"
      :rows="rows"
      :columns="columns"
      row-key="product_name"
      table-class="product-table"
    >
    <template v-slot:header="props">
      <q-tr :props="props">
          <q-th auto-width />

          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            dense
          >
            {{ col.label }}
          </q-th>
          <q-th auto-width />
        </q-tr>
        </template>
        <template v-slot:body="props" >
      <q-tr :props="props">
          <q-td auto-width>
            <q-btn  size="sm" color="primary" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
          <span v-if="col.name !='image'" >
             {{ col.value }}
          </span>

              <img v-if="col.name =='image'" width='50' :src="productImages[props.row.id]" />
          </q-td>
          <q-td class="q-pa-md q-gutter-sm">
          <q-icon name="edit" size="sm" @click="onEdit(props.row)" />
          <q-icon name="delete" size="sm" @click="onDelete(props.row)" />

          <RouterLink :to= "{ name: 'productinfo', params: { id: props.row.id, parentid: 0}}">
          <!--<q-btn  color="primary" label="見出しの作成" ></q-btn>-->
          <q-btn  color="primary" label="product setting " ></q-btn>
          </RouterLink>
          <a>
            <!--<q-btn @click="productsetting = true" color="primary" label=" 商品設定（自社）" ></q-btn></a>-->
            <q-btn @click="productsetting = true" color="primary" label="Competitor week point" ></q-btn></a>

        </q-td>
        </q-tr>
        
        <q-tr class="bg-neutral-50 childtr"
            v-show="props.expand" 
            v-for="childRow in props.row.child_products" 
          :key="childRow._id"
          :props="props"  
          >  
        
          <q-td  auto-width @click="  console.log(childRow);"></q-td>
         <!--<q-td v-for="(value, key) in childRow" :key="key">--> 
          <q-td>
          {{ childRow.serial_no }}
        </q-td>
            <q-td>
          {{ childRow.product_name }}
        </q-td>
        <q-td>
          <img width="30" :src="childproductImages[childRow._id]" />
        </q-td>
        <q-td>
          {{ childRow.asin }}
        </q-td>
        <q-td class="q-pa-md q-gutter-sm">
            <q-icon name="edit" size="sm" @click="onEditChild(childRow)" />
            <q-icon name="delete" size="sm" @click="onDeleteChild(childRow)" />
            <RouterLink :to= "{ name: 'productinfo', params: { id: childRow._id, parentid: childRow.parent_id}}">
            <q-btn  color="primary" label="見出しの作成" ></q-btn>
            </RouterLink>
     
           
        </q-td>
        
   <!-- <q-td colspan="100%" >
            <q-table             
            hide-bottom                         
               :rows="props.row.child_products"
               :columns="childcolumns"
               style="background:#fff"> 

                <q-tr  :props="props">
          <q-td     v-for="col in props.cols"
            :key="col.name"
            :props="props">
            <span v-if="col.name !='images'" >
              {{ col.name }} {{ col.value }}</span>

            <img v-if="col.name =='images'" width='50' :src="childproductImages[props.row.child_products.id]" /> 
           </q-td>
              <q-td class="q-pa-md q-gutter-sm">
          <q-icon name="edit" size="sm" @click="onEdit(props.row)" />
          <q-icon name="delete" size="sm" @click="onDelete(props.row)" />
          <RouterLink :to= "{ name: 'productinfo', params: { id: props.row.id}}">
          <q-btn  color="primary" label="見出しの作成" ></q-btn>
          </RouterLink>
        </q-td>
              </q-tr>
              
          </q-table>   
          </q-td> -->
           
        </q-tr>

       
      </template>
    </q-table>

  </div>

  <q-dialog v-model="editprompt" persistent>
      <q-card style="width: 900px; max-width: 80vw;">
        <q-toolbar>
          <q-toolbar-title>Edit Product</q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <div class="flex items-center">

       <q-card-section>
          <div class="">Product Name</div>
          <q-input dense v-model="editselected_row.product_name" autofocus></q-input>
        </q-card-section>
        <q-card-section>
          <div class="">ASIN</div>
          <q-input dense v-model="editselected_row.asin"></q-input>
        </q-card-section>
        <q-card-section>
          <div class="">Image</div>
          <img width='50' :src="productImages[editselected_row.id]" />
          <input type="file" @change="handleFileUpload" name="image" id="image"  accept="image/*" />
        </q-card-section>
        <q-btn  color="primary" @click="editProduct()" v-close-popup label="Edit Product"/>
      </div>
      </q-card>
      </q-dialog>
      <q-dialog v-model="productsetting" persistent border>
      <q-card style="max-width: 80vw;"  >
        <q-toolbar class="my-3">
          <q-toolbar-title>Product Settings</q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <div class="q-pa-md row items-center justify-center q-gutter-lg mb-5">

     <q-card v-ripple  @click="rivalweakpointmodal = true" class="my-box cursor-pointer q-hoverable" >
      <span class="q-focus-helper"></span>
      <q-card-section>
        <div class="text-h6 text-center">ライバルの<br/>ウィークポイント探し</div>
      </q-card-section>
        <div>
    </div>
    </q-card>
    <q-card v-ripple class="my-box cursor-pointer q-hoverable" >
      <span class="q-focus-helper"></span>
      <q-card-section>
        <div class="text-h6 text-center mb-2">商品ページの作成<br/></div>
      </q-card-section>
<!--
      <q-list dense class="text-center">
      <q-item   v-for="asinlist in asinlists" :key="asinlist" style="min-height: 0;" >
        <q-item-section>{{asinlist}}</q-item-section>
      </q-item>
      </q-list>-->
    </q-card>
    <q-card v-ripple class="my-box cursor-pointer q-hoverable" >
      <span class="q-focus-helper"></span>
      <q-card-section>
        <div class="text-h6 text-center mb-2">コピーの作成</div>
      </q-card-section>

    </q-card>
      </div>
      </q-card>
      </q-dialog>
      <q-dialog v-model="rivalweakpointmodal" persistent>
      <q-card style="width: 900px; max-width: 80vw;"  >
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <div class="q-pa-md row items-center justify-center q-gutter-lg mb-5">

     <q-card @click="rivalsettingsmodal = true" v-ripple v-for="asinlist in asinlists" :key="asinlist" class="my-box cursor-pointer q-hoverable" >
      <span class="q-focus-helper"></span>
      <q-card-section>
        <div class="text-h6 text-center">{{ asinlist }}</div>
      </q-card-section>
        <div>
    </div>
    </q-card>
  
      </div>
      </q-card>
      </q-dialog>


      <q-dialog v-model="rivalsettingsmodal" persistent>
      <q-card style="width: 1000px; max-width: 90vw;"  >
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <div class="q-pa-md my-5">
    <div class="q-gutter-y-md">
      <q-card>
      <q-tabs
        v-model="rivalsettings_tab"
        inline-label
        class="bg-grey shadow-2 justify-start"
        active-color="white"
        indicator-color="white"
          align="justify"
          narrow-indicator
      >
        <q-tab name="rivalinfo"  label="ライバル情報の入力"></q-tab>
        <q-tab name="rivalweakpoint"  label="出力（ライバルの欠点、自社のペルソナ）"></q-tab>
      </q-tabs>
      <q-separator />

<q-tab-panels v-model="rivalsettings_tab" animated>
  <q-tab-panel name="rivalinfo">
    <div class="text-h6">ライバル情報の入力</div>
    <q-form ref="rivalinfo"
      @submit="onSubmitRivalInfo"
      @reset="onReset"
      class="q-gutter-md" 
    >
    <q-input  v-model="product_title" label="Product Title" outlined :rules="[ val => val && val.length > 0 || 'Please enter title']"/>
    <q-input
      v-model="bullets"
      label="5過剰(bullets)"
      type="textarea"
      outlined
      rows="3"
    />
    <q-input
      type="textarea"
      v-model="prod_contents"
      label="商品紹介コンテンツ(A+)"
      outlined
      rows="3"
    />
    <q-input
      type="textarea"
      v-model="reviews"
      label="レビュー（悪い） (reviews)"
      outlined
      rows="3"
    />
    <div class="row">
    <q-select v-model="min_age" :options="min_age_options" label="Min age" outlined style="width: 150px"/>
    <span class="p-2"> ~ </span>
    <q-select v-model="max_age" :options="max_age_options" label="Max age" outlined style="width: 150px"/>
    </div>
    <q-select v-model="gender" :options="gender_options" label="Gender" outlined />
    <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

    </q-form>
   <!-- <div class="appealtarget flex p-3">
      <div class="">
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
          <button type="button"  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">送信</button>
    </div>
  <q-dialog v-model="confirmappealmodal" persistent>
    

          </q-dialog>
  </div>-->
  </q-tab-panel>
  <q-tab-panel name="rivalweakpoint">
    <q-card class="my-3 p-3 border bg-blue-grey-5 text-white">
    <div class="text-h6" >ライバルの情報</div>
    <q-card-section>
    <label class="text-h8">ライバルの商品タイトル</label>
    <p>{{ product_title }}</p>
  </q-card-section>   
  <q-card-section>
    <label class="text-h8">ライバルの商品特徴</label>
    <p>{{ bullets }}</p>
  </q-card-section>  
  <q-card-section>
    <label class="text-h8">他社の商品紹介コンテンツ</label>
    <p>{{prod_contents }}</p>
  </q-card-section>  
  <q-card-section>
    <label class="text-h8">レビュー（悪い）</label>
    <p>{{reviews }}</p>
  </q-card-section> 
  <q-card-section>
    <label class="text-h8">Age</label>
    <p>{{min_age }} <span class="p-2"> ~ </span> {{max_age }}</p>
  </q-card-section> 
  <q-card-section>
    <label class="text-h8">Gender</label>
    <p>{{gender }}</p>
  </q-card-section> 
  </q-card> 

    <q-card class="mb-3" v-for="(row,rowIndex) in queansset" :key ="rowIndex">
      <div v-if="rowIndex == queansset.length-1">
      <q-card-section>
        <textarea class="p-3 border w-full"  rows="3" v-model="queansset[rowIndex][0].question" placeholder="New Question" ></textarea>
        <q-btn  color="primary" @click="helperquemodal=true" label="Helper Questions"/>
      </q-card-section>
      <q-card-section>
            <q-btn  color="primary" @click="submitfirstquestion(rowIndex)" label="Submit"/>
      </q-card-section>
      <q-dialog v-model="helperquemodal" persistent>
  <q-card> <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
      <div class="q-pa-md q-gutter-md mx-5"  >
      <q-layout>
      <q-page-container>
   
      <q-row v-for="(category,cat_i) in categories" :key ="cat_i" class="q-mb-md">
        <q-col class="col-6">
    <q-toggle v-model="category.flag" :label="category.label" />
    <q-list bordered separator v-for="(subcat,index) in category.values" :key="index">
      <q-item clickable v-ripple :active="category.flag">
        <q-item-section>{{ subcat }}</q-item-section>
        <q-item-section side @click="delweakpoint(category,index,rowIndex,0)">Add</q-item-section>
      </q-item>
    </q-list>
    </q-col>

  </q-row>
</q-page-container>
</q-layout>
<div class="addCategory my-3">
    <q-btn label="Add new Category" @click=" addCategorydiv = true" type="button" color="primary"/>
    <q-card class="lg:w-2/3 my-3 border" v-if="addCategorydiv">
      <q-form 
      @submit="addCategory"
      class="q-gutter-md"
    >
    <q-card-section><q-input v-model="category_label" label="Enter Category"  /></q-card-section>
      <q-card-section> <textarea class="p-3 border w-full"  v-model="category_weakpoint" placeholder="Enter weakpoints seperated by commas"></textarea></q-card-section>
      <q-card-section> <q-btn label="Submit" type="submit" color="primary" class="mr-3"/>
        <q-btn label="Cancel" @click="addCategorydiv=false" type="button" color="primary"/>  </q-card-section>
        </q-form>
  </q-card>
</div> 
  </div>
</q-card>

  </q-dialog>
</div>
    </q-card>
    <q-btn  color="primary" @click="showallquestion=true" label="Show all answers"/>
  </q-tab-panel>
  </q-tab-panels>
  </q-card>
      </div>
      </div>
      </q-card>
      </q-dialog>


  <q-dialog v-model="queansmodal" persistent>
      <q-card style="width: 900px; max-width: 80vw;"  >
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <div class="q-pa-md row items-center mb-5 no-wrap" v-for="(row,index) in queansset" :key ="index">
        <div  v-for="(queans,colIndex) in row" :key ="colIndex">
          <div class="q-pa-md row items-center mb-5 no-wrap" v-if="index == rowIndex ">
     <q-card v-if="queans.answer != '' ">
      <q-card-section>
        <span>{{queans.question}}</span>
      </q-card-section>
      <q-card-section >
        <span>{{queans.answer}}</span>
      </q-card-section>
    </q-card>
    <svg v-if="queans.answer != ''" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <!--<q-card v-if="colIndex+1 < queans.length && colIndex==queans.length-2">-->
    <q-card v-if="colIndex+1 < queansset[index].length && colIndex==queansset[index].length-2">
      <q-card-section>
        <textarea class="p-3 border w-full"  rows="3"  v-model="queansset[index][colIndex+1].question" ></textarea>
        <q-btn  color="primary" @click="helperquemodal=true" label="Helper Questions"/>
      </q-card-section>
      <q-card-section>
        <div class="row justify-end">
            <q-btn  color="primary" @click="submitquestion(colIndex+1)" label="Submit"/>
            </div>
      </q-card-section>
      <q-card-section class="mb-5">
      <q-btn color="primary" @click="endquestion(colIndex+1)" label="New Question"/>
    </q-card-section>
    <q-dialog v-model="helperquemodal" persistent>
  <q-card> <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
      <div class="q-pa-md q-gutter-md mx-5"  >
      <q-layout>
      <q-page-container>
   
      <q-row v-for="(category,i) in categories" :key ="i" class="q-mb-md">
        <q-col class="col-6">
    <q-toggle v-model="category.flag" :label="category.label" />
    <q-list bordered separator v-for="(subcat,index) in category.values" :key="index">
      <q-item clickable v-ripple :active="category.flag">
        <q-item-section>{{ subcat }}</q-item-section>
        <q-item-section side @click="delweakpoint(category,index,rowIndex,colIndex+1)">X</q-item-section>
      </q-item>
    </q-list>
    </q-col>

  </q-row>
</q-page-container>
</q-layout>
<div class="addCategory my-3">
    <q-btn label="Add new Category" @click=" addCategorydiv = true" type="button" color="primary"/>
    <q-card class="lg:w-2/3 my-3 border" v-if="addCategorydiv">
      <q-form 
      @submit="addCategory"
      class="q-gutter-md"
    >
    <q-card-section><q-input v-model="category_label" label="Enter Category"  /></q-card-section>
      <q-card-section> <textarea class="p-3 border w-full"  v-model="category_weakpoint" placeholder="Enter weakpoints seperated by commas"></textarea></q-card-section>
      <q-card-section> <q-btn label="Submit" type="submit" color="primary" class="mr-3"/>
        <q-btn label="Cancel" @click="addCategorydiv=false" type="button" color="primary"/>  </q-card-section>
        </q-form>
  </q-card>
</div> 
  </div>
</q-card>

  </q-dialog>
    </q-card>
  </div>
      </div>
      </div>
      </q-card>

      </q-dialog>  
      <q-dialog v-model="showallquestion" persistent>
      <q-card style="width: 900px; max-width: 80vw;"  >
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
      <div class="q-pa-md row items-center mb-5 no-wrap" v-for="(row,rowIndex) in queansset" :key ="rowIndex">
      <div class="q-pa-md row items-center q-gutter-lg  no-wrap" v-for="(queans, colIndex) in row" :key="colIndex" >
        <div v-if="queans.answer != ''">
          <q-card-section v-if="queans.answer != ''">
        <span>{{queans.question}}</span>
      </q-card-section>
      <q-card v-if="queans.answer != ''">
      <q-card-section class="border" >
        <span>{{queans.question + " - " + queans.answer}}</span>
      </q-card-section>
    </q-card>
        </div>
    
    <svg v-if="(colIndex < queansset[rowIndex].length-2)" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
      </div>
      </div>
      </q-card>

      </q-dialog>  
</div>
  </div>

    
  </template>

<script >
import { ref,reactive, watch,computed} from "vue";
import { api } from '../boot/axios'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import UserService from "../services/user.service";
import axios from 'axios';
import authHeader from '../services/auth-header';


export default {
  name:'Products',

  setup() {
    const route = useRoute();
    const $q = useQuasar();
    const addprompt = ref(false);
    const productsetting = ref(false);
    const rivalweakpointmodal = ref(false);
    const rivalsettingsmodal = ref(false);
    const rivalsettings_tab = ref("rivalinfo");
    const queansmodal = ref(false);
    const showallquestion = ref(false);
    const helperquemodal = ref(false);
    const supplements = ref(true);
    const apparel = ref(true);
    const bag = ref(true);
    const electric = ref(true);
    const fashion = ref(true);
    const present = ref(true);
    const product_name= ref("");
    const asin= ref("");
    const image_src= ref("");
    const pdtimage= ref("");
    const filesImages = ref(null);
    let sno=ref(0);
    const id=ref("");
    const childproduct=ref(0);
    const childproducts = ref([]);
    const productImages = ref({});
    const childproductImages = ref({});

    const child_name=ref("");
    const child_asin=ref("");
    const childimage_src = ref("");
    const parent_id=ref("");
const editselected_row = ref({});
const editprompt=ref(false);
const category_label = ref('');
const category_weakpoint = ref('');
const addCategorydiv = ref(false);
const product_title = ref('');
const  bullets= ref('');
const prod_contents = ref('');
const reviews= ref('');
const min_age= ref(10);
const max_age= ref(20);
const gender = ref("");
const min_age_options = computed(() => {
  let arr = [];
      for (var i = 1; i <= 100; i++)
        arr.push(i);
  return arr;
}) 
const max_age_options = computed(() => {
  let arr = [];
      for (var i = min_age.value; i <= 100; i++)
        arr.push(i);
  return arr;
}) 
const gender_options = ref(['男性','女性','男性と女性両方']);
/*
//generalapppeal
const strong_point = ref("");
const motivation = ref("");
const solving_feature = ref("");
const gender = ref("");
const confirmappealmodal = ref(false);
const confirmappealtext =ref("");
let generalappealform = ref([ 
  {strong_point: '', motivation: '',solving_feature:'',min_age:10,max_age:20,gender:'',editable:true},
]);
const confirmappeal = () => {
  confirmappealtext.value = "この商品は" + generalappealform.value.strong_point+"という特徴があります。\nその人たちは"+ generalappealform.value.min_age + "~" + generalappealform.value.max_age + "才くらいの" + generalappealform.value.gender + "で" + generalappealform.value.motivation + "\nこの商品は" + generalappealform.value.solving_feature + "といったことを説明したキャッチコピーを10とおり作成したいです。"
  confirmappealmodal.value = true;
}
const computedArr = computed(() => {
  let arr = [];
      for (var i = min_age.value; i <= 100; i++)
        arr.push(i);
  return arr;
}) 
//general appeal ends
*/
const categories = ref([
  {
    title:'Supplements',
    label:'サプリ、肌、食品',
    values: ['また、健康的被害を受ける成分など']
  },
  {
    title:'Electric',
    label:'家電',
    values: ['操作が難しそう（スペックが複雑で）','スペックが古い','専門家の確認がない','望んでいる機能が搭載されていない、または明確ではない','スペックが低い','健康的被害を受ける成分など']
  },
  {
    title:'Apparel',
    label:'アパレル',
    values: ['サイズが明記されていないため','素材の証明がない','梱包がしっかりしていない']
  },
  {
    title:'Present',
    label:'プレゼント',
    values: ['梱包がしっかりしていない']
  },
  {
    title:'Fashion',
    label:'アパレル、ファッション、小物、雑貨',
    values: ['デザインのこだわり、色のこだわりがない']
  },
  {
    title:'Bag',
    label:'Bag',
    values: ['縫製が雑']
  },
])
for(let i=0;i<categories.value.length;i++){
  categories.value[i].flag = true;
}
const queansrow = ref([]);
const question = ref('');
const rowIndex= ref(null);
const cat_que = (catval,rowindex,colindex) => {
  //question.value=question.value + catval;
  queansset.value[rowindex][colindex].question=queansset.value[rowindex][colindex].question + catval;
}
/*const submitquestion = (rowIndex,i) => {
  //question.value
 // queansmodal.value = true;
  console.log(rowIndex);
  queansset.value[rowIndex][i].answer = "New answer from chatgpt";
  queansset.value[rowIndex] = [...queansset.value[rowIndex], {question:'',answer:''}]
  
}*/
const submitquestion = (i) => {
  //question.value
 // queansmodal.value = true;
  console.log(rowIndex.value);
  queansset.value[rowIndex.value][i].answer = "New answer from chatgpt";
  queansset.value[rowIndex.value] = [...queansset.value[rowIndex.value], {question:'',answer:''}]
  console.log(queansset.value[rowIndex.value]);
}
const endquestion = (rowIndex,i) => {
  queansmodal.value = false;
  console.log(rowIndex);
  queansset.value = [...queansset.value, [{question:'',answer:''}]]
}
const submitfirstquestion = (rowindex) => {
  //question.value
  queansmodal.value = true;
 rowIndex.value = rowindex ;
 console.log(rowIndex.value);
  queansset.value[rowIndex.value][0].answer = "New answer from chatgpt";
 queansset.value[rowIndex.value] = [...queansset.value[rowIndex.value], {question:'',answer:''}]
 queansrow.value = queansset.value[rowIndex.value];
 console.log(queansrow.value);

}
const queansset= ref([
  [{
    question:'',
    answer:'Answer from chatgpt',
  }]
]);


const asinlists=ref(['B0CHX2F5QT','B0CHX2F5QV','B0CHX2DFQV','B0CHX345QV','B1DHX2F5QV','B0CHX2F5QB','B0CHX2F5QC','B0CHX2F5QD','B0CHX2F5QE','B0CHX2F5QF'])
  //const data = ref(null)

    const columns = ref([
    {
    name: 'id',
    required: true,
    label: 'Serial No.',
    align: 'left',
    field: row => row.serial_no,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: 'Product Name',
    align: 'left',
    field: row => row.product_name,
    sortable: true,
    style: 'width: 300px;max-width:300px;white-space: wrap;',
  },
  { name: 'image', align: 'left', label: 'Image', field: 'image_id' },
  { name: 'asin', align: 'left', label: 'ASIN', field: 'asin' },
]);
const childcolumns = ref([
    {
    name: 'id',
    required: true,
    label: 'Serial No.',
    align: 'left',
    field: row => row.serial_no,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: 'Product Name',
    align: 'left',
    field: row => row.product_name,
    sortable: true
  },

  { name: 'images', align: 'center', label: 'Image', field: 'image_id' },
  { name: 'asin', align: 'center', label: 'ASIN', field: 'asin' },
]);

  const rows = ref(null);
  const onEdit = (row) => {
      console.log(`Editing row - '${row.id}'`)
      editprompt.value = true;
      editselected_row.value = row;
    }
  const onEditChild = (row) => {
      console.log(`Editing row - '${row._id}'`)
      editprompt.value = true;
      editselected_row.value = row;
    }
const onDeleteChild = (row) => {
      console.log(`Deleting row - '${row._id}'`)
      api.delete(`https://api.j-wire.tech/v1/child-products/${row._id}`,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
        loadData();
      })
      .catch(() => {
        console.log('not ht');
      })
    }
    
    const onDelete = (row) => {
      api.delete(`https://api.j-wire.tech/v1/products/${row.id}`,{headers:authHeader()})
      .then((response) => {
        console.log(response.data.message)
        console.log(`Deleted post with ID ${row.id}`);
        loadData();
        //return response;
      })
      .catch(() => {
        console.log('not hit')
      })
      console.log(`Deleting row - '${row.id}'`)
  }



  const delweakpoint = (row,index,rowindex,colIndex) => {
    console.log(row);
    console.log(rowindex);
    console.log(colIndex);
    for(let i=0;i<categories.value.length;i++){
      if(categories.value[i].title == row.title){
        cat_que(categories.value[i].values[index],rowindex,colIndex);
        categories.value[i].values.splice(categories.value[i].values[index], 1);
        console.log(categories.value[i].values.length);
       if(categories.value[i].values.length == 0){
          categories.value.splice(i, 1);
        }
      }
    }
    helperquemodal.value=false
  }



   /* fetch('https://api.j-wire.tech/v1/'+accountid.value+'/products')
    .then(response => response.json())
    .then(data => rows.value = data.data.products);

    console.log(rows);*/

  function loadData () {
    UserService.getProducts()
      .then((response) => {
        rows.value = response.data.data.products
        console.log(rows.value);
        for (const row of rows.value) {
        if (row.image_id) {
          fetchImage(row.id, row.image_id);
        }
      let childproducts = row.child_products;

        if (childproducts) {
          childproducts.map(childProduct =>  fetchchildImage(row.id,childProduct._id,childProduct.image_id));
        }
      }
      })
      .catch(() => {
        console.log('not ht')
      })
  }
  loadData();

  const fetchImage = async (productId, imageId) => {
      try {
      console.log(imageId);
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

   const fetchchildImage = async (productId,childId, imageId) => {
      try {
      console.log(imageId);
        const response = await axios.get(`https://api.j-wire.tech/v1/products/images/${imageId}`, {
          responseType: 'arraybuffer',
        });

        const image = `data:image/jpeg;base64,${btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;
        
        childproductImages.value[childId] = image;
        //console.log(productImages.value[productId]);
      } catch (error) {
        console.error(`Failed to fetch image for product ID ${productId}:`, error);
      }
    };


  const image= ref('');
  const child_image= ref('');
  const imagePath= ref('');
  const selectedImage = ref(null);


  
  /*const handleChildFileUpload = (e)  => {
   selectedImage.value = e.target.files[0];
    console.log(selectedImage);
  }*/

  const handleFileUpload = (e)  => {
   selectedImage.value = e.target.files[0];
    console.log(selectedImage);
    }



  const addProduct = () => {
    const formData = new FormData();
    sno.value++;
      formData.append('image', selectedImage.value);
      formData.append('product_name', product_name.value);
      formData.append('asin', asin.value);
      formData.append('serial_no', String(sno.value));
      formData.append('product_info', product_name.value);

    axios.post("https://api.j-wire.tech/v1/products",formData,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
        parent_id.value =response.data.data.id;
        console.log(parent_id.value);
        childproducts.value = [...childproducts.value, {child_name: '', child_asin: '',childimage_src:''}]
      })
      .catch(() => {
        console.log('not ht');
      })
   
 }

 const editProduct = () => {
  const formData = new FormData();

  const product_id=ref(null);
if(editselected_row.value.parent_id){
 product_id.value = editselected_row.value.parent_id;
 const data = {
  'product_name':editselected_row.value.product_name,
  'asin': editselected_row.value.asin
 }
  console.log(formData);
  axios.put("https://api.j-wire.tech/v1/child-products/"+editselected_row.value._id,data,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
        loadData();
        parent_id.value =response.data.data.id;
        console.log(parent_id.value);
      })
      .catch(() => {
        console.log('not ht');
      })
}
else{
  product_id.value = editselected_row.value.id;
  const data = {
  'product_name':editselected_row.value.product_name,
  'asin': editselected_row.value.asin
 }
  /*formData.append('image', selectedImage.value);
      formData.append('product_name', editselected_row.value.product_name);
      formData.append('asin', editselected_row.value.asin);*/
    axios.put("https://api.j-wire.tech/v1/products/"+product_id.value,data,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
        loadData();
        parent_id.value =response.data.data.id;
        console.log(parent_id.value);
      })
      .catch(() => {
        console.log('not ht');
      })
    }
 }



 const addchildpdt = (i) => {
  console.log(childproducts.value);
  const formData = new FormData();
      formData.append('image', selectedImage.value);
      formData.append('product_name', childproducts.value[i].child_name);
      formData.append('asin', childproducts.value[i].child_asin);
      formData.append('serial_no', String(sno.value));
      formData.append('product_info', childproducts.value[i].child_name);
      formData.append('parent_id',parent_id.value);
      console.log(formData);
      axios.post("https://api.j-wire.tech/v1/child-products/child-products",formData,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
        loadData();
      })
      .catch(() => {
        console.log('not ht');
      })
   

 }

 const addCategory = () => {
  const weakpointarray= category_weakpoint.value.split(',')
   categories.value = [...categories.value,{label:category_label.value,title:category_label.value,values:weakpointarray,flag:true}]
   addCategorydiv.value=false;
 }

 const addanotherchild = (i) => {
  addchildpdt(i);
  childproducts.value = [...childproducts.value, {child_name: '', child_asin: '',childimage_src:''}]
 }

  const deletechild = (row) => {
    childproducts.value.splice(childproducts.value[i], 1);
   /*api.delete(`https://api.j-wire.tech/v1/child-products/${row._id}`,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
      })*/
 }

 const onSubmitRivalInfo = () => {
  rivalsettings_tab.value= "rivalweakpoint";

 }

  return {sno,pdtimage,rows,image,imagePath,handleFileUpload,selectedImage,productImages,childproductImages,id,
      columns,editprompt,editProduct,onEditChild,onDeleteChild,rivalweakpointmodal,rivalsettingsmodal,rivalsettings_tab,
      onEdit,child_name,child_asin,childimage_src,parent_id,editselected_row,productsetting,asinlists,product_title,bullets,prod_contents,reviews,onSubmitRivalInfo,
      supplements,apparel,bag,fashion,electric,present,categories,addCategory,category_label,category_weakpoint,delweakpoint,addCategorydiv,
      onDelete,childcolumns,addprompt,product_name,asin,image_src,filesImages,childproduct,childproducts,addProduct,addchildpdt,addanotherchild,deletechild,max_age_options,min_age_options,
     min_age,max_age,gender,gender_options,cat_que,question,queansmodal,queansrow,submitquestion,rowIndex,helperquemodal,queansset,submitfirstquestion,endquestion,showallquestion}
      //strong_point,motivation,solving_feature,generalappealform,confirmappealmodal,confirmappealtext,confirmappeal,computedArr}
  }
}

</script>