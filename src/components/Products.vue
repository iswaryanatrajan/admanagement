

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
          <q-btn  color="primary" label="見出しの作成" ></q-btn>
          </RouterLink>
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
</div>
  </div>

    
  </template>

<script >
import { ref,reactive, watch} from "vue";
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
      api.delete(`http://159.223.87.212/api/v1/child-products/${row._id}`,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
        loadData();
      })
      .catch(() => {
        console.log('not ht');
      })
    }
    
    const onDelete = (row) => {
      api.delete(`http://159.223.87.212/api/v1/products/${row.id}`,{headers:authHeader()})
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



   /* fetch('http://159.223.87.212/api/v1/'+accountid.value+'/products')
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
        const response = await axios.get(`http://159.223.87.212/api/v1/products/images/${imageId}`, {
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
        const response = await axios.get(`http://159.223.87.212/api/v1/products/images/${imageId}`, {
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

    axios.post("http://159.223.87.212/api/v1/products",formData,{headers:authHeader()}) .then((response) => {
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
  axios.put("http://159.223.87.212/api/v1/child-products/"+editselected_row.value._id,data,{headers:authHeader()}) .then((response) => {
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
    axios.put("http://159.223.87.212/api/v1/products/"+product_id.value,data,{headers:authHeader()}) .then((response) => {
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
      axios.post("http://159.223.87.212/api/v1/child-products/child-products",formData,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
        loadData();
      })
      .catch(() => {
        console.log('not ht');
      })
   

 }

 const addanotherchild = (i) => {
  addchildpdt(i);
  childproducts.value = [...childproducts.value, {child_name: '', child_asin: '',childimage_src:''}]
 }

  const deletechild = (row) => {
    childproducts.value.splice(childproducts.value[i], 1);
   /*api.delete(`http://159.223.87.212/api/v1/child-products/${row._id}`,{headers:authHeader()}) .then((response) => {
        console.log(response.data);
      })*/
 }

  return {sno,pdtimage,rows,image,imagePath,handleFileUpload,selectedImage,productImages,childproductImages,id,
      columns,editprompt,editProduct,onEditChild,onDeleteChild,
      onEdit,child_name,child_asin,childimage_src,parent_id,editselected_row,
      onDelete,childcolumns,addprompt,product_name,asin,image_src,filesImages,childproduct,childproducts,addProduct,addchildpdt,addanotherchild,deletechild}
  }
}

</script>