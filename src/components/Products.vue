

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
    <!--
    <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="px-6 py-3">S.No</th>
        <th class="px-6 py-3">Products</th>
        <th class="px-6 py-3">Image</th>
        <th class="px-6 py-3">ASIN</th>
        <th class="px-6 py-3"></th>
      </tr>
    </thead>
    <tbody>

      <template v-for = "(product) in products">
        <tr class="border-b" :id="`accordion-collapse-heading-${product.id}`" >
          <td class="px-6 py-4 font-medium text-gray-700 dark:text-blue-500  whitespace-nowrap">
            {{ product.id }}
      </td>
          <td class="px-6 py-4 font-medium text-gray-700 dark:text-blue-500  whitespace-nowrap">
            {{ product.name }}</td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><img width="50" :src=product.imgsrc></td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{product.asin}}</td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
              <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Edit</button>
              <RouterLink :to= "{ name: 'productinfo'}"><button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">見出しの作成</button></RouterLink>
        </td>
        </tr>

        <tr class="border-b">
          <td colspan="5">
            <div class="relative overflow-x-auto">
      <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="px-6 py-3">Serial No.</th>
        <th class="px-6 py-3">Products</th>
        <th class="px-6 py-3">ASIN</th>
        <th class="px-6 py-3"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b" v-for = "childpdt in product.childpdts">
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{ childpdt.id }}</td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{childpdt.name}}</td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{childpdt.asin}}</td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
       </td>
        </tr>
    </tbody>
    </table>
    </div>
          </td>
        </tr>

            </template>
          
         

    </tbody>
  </table>-->
  <div class="q-pa-md">
  <q-btn @click="addprompt = true" color="primary" label="Add" ></q-btn>

  <q-dialog v-model="addprompt" persistent>
      <q-card style="width: 700px; max-width: 80vw;">
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
          <q-file
        style="max-width: 300px"
        v-model="filesImages"
        filled
        dense
        label="Add image"
        accept=".jpg, image/*"
        @rejected="onRejected"
      />
        </q-card-section>
        <q-btn size="sm" color="primary" round dense @click="addchild()" icon="add" />
      </div>
      <div class="flex items-center pl-5" v-for="(childproduct,i) in childproducts" v-bind:key="childproduct">
        <q-card-section>
          <div class="">Child Product Name</div>
          <q-input dense v-model="child_name" autofocus></q-input>
        </q-card-section>
        <q-card-section>
          <div class="">ASIN</div>
          <q-input dense v-model="asin"></q-input>
        </q-card-section>
        <q-card-section>
          <div class="">Product Image</div>
          <q-file
        style="max-width: 300px"
        v-model="filesImages"
        dense
        filled
        label="Add image"
        accept=".jpg, image/*"
        @rejected="onRejected"
      />
        </q-card-section>
        <q-btn size="sm" color="primary" round dense @click="deletechild(i)" icon="delete" />
      </div>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup></q-btn>
          <q-btn flat label="Save" v-close-popup></q-btn>
        </q-card-actions>
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
          >
            {{ col.label }}
          </q-th>
          <q-th auto-width />
        </q-tr>
        </template>
        <template v-slot:body="props" >
      <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="primary" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
          <span v-if="col.name !='image'" >
              {{ col.value }}</span>

              <img v-if="col.name =='image'" width='50' :src="props.row.image" />
          </q-td>
          <q-td class="q-pa-md q-gutter-sm">
          <q-icon name="edit" size="sm" @click="onEdit(props.row)" />
          <q-icon name="delete" size="sm" @click="onDelete(props.row)" />
          <RouterLink :to= "{ name: 'productinfo', params: { id: props.row.id}}">
          <q-btn  color="primary" label="見出しの作成" ></q-btn>
          </RouterLink>
        </q-td>
        </q-tr>
        <!--
        <q-tr 
            :props="props"
            v-show="props.expand" 
          >  
          <q-td colspan="100%">
            <q-table             
            hide-bottom                         
               :rows="props.row.childpdts"
               :columns="columnsChilds"
               style="background:#fff"> 
          </q-table>   
          </q-td>
           
        </q-tr>-->

       
      </template>
    </q-table>
  </div>
</div>
  </div>

    
  </template>

<script >
import { ref, watch} from "vue";
import { api } from '../boot/axios'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import UserService from "../services/user.service";

export default {
  name:'Products',
  setup() {
    const route = useRoute();
    const $q = useQuasar();
    const addprompt = ref(false);
    const product_name= ref("");
    const asin= ref("");
    const image_src= ref("");
    const filesImages = ref(null);
    const childproduct=ref(0);
    const childproducts = ref([{child_name: '', asin: '',image_src:''}]);

  //const data = ref(null)

    const columns = ref([
    {
    name: 'id',
    required: true,
    label: 'Serial No.',
    align: 'left',
    field: row => row.id,
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
  { name: 'image', align: 'center', label: 'Image', field: 'image_id' },
  { name: 'asin', align: 'center', label: 'ASIN', field: 'asin' },
]);
const childcolumns = ref([
    {
    name: 'id',
    required: true,
    label: 'Serial No.',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: 'Product Name',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'asin', align: 'center', label: 'ASIN', field: 'asin' },
]);
    
  /*  const rows = ref([{
      id:'001',
      name:'Product Name 1',
      asin:'B0EOFU39234',
      imgsrc:'../src/assets/pdtimg.jpg',
      childpdts:[{
        id:'001a',
        name:'Child Name 1',
        asin:'B0EOFU39234',
      },
      {
        id:'001b',
        name:'Child Name 2',
        asin:'B0EOFU39245',
      }
    ]},
    {
      id:'002',
      name:'Product Name 2',
      asin:'B0EOFU39235',
      imgsrc:'../src/assets/pdtimg.jpg',
      childpdts:[{
        id:'001a',
        name:'Child Name 1',
        asin:'B0EOFU39234',
      },
      {
        id:'001b',
        name:'Child Name 2',
        asin:'B0EOFU39245',
      }
    ]}
  ])*/
  const rows = ref(null);
  const onEdit = (row) => {
      console.log(`Editing row - '${row.name}'`)
    }
    
    const onDelete = (row) => {
      api.delete(`http://159.223.87.212/api/v1/products/${row.id}`)
      .then((response) => {
        console.log(response.data.message)
        console.log(`Deleted post with ID ${row.id}`);
        //loadData();
        //return response;
      })
      .catch(() => {
        console.log('not hit')
        /*$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })*/
      })
      console.log(`Deleting row - '${row.id}'`)
    }



   /* fetch('http://159.223.87.212/api/v1/'+accountid.value+'/products')
    .then(response => response.json())
    .then(data => rows.value = data.data.products);

    console.log(rows);*/

  function loadData () {
    UserService.getProducts()
      .then((response) => {
        rows.value = response.data.data.products
        console.log(rows.value)
      })
      .catch(() => {
        console.log('not ht')
        /*$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })*/
      })
  }
  loadData();
  const addchild = () => {
    childproducts.value = [...childproducts.value, {child_name: '', asin: '',image_src:''}]
 }
  const deletechild = (i) => {
    childproducts.value.splice(childproducts.value[i], 1)
 }

  return {rows,
      columns,
      onEdit,
      onDelete,childcolumns,addprompt,product_name,asin,image_src,filesImages,childproduct,childproducts,addchild,deletechild}
  }
}

</script>