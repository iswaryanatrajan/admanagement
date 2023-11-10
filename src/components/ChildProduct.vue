<!-- ChildProduct.vue -->
<template>
    <div class="flex items-center">
      <q-card-section>
        <div class="">Child Product Name</div>
        <q-input dense v-model="childProduct.child_name" autofocus></q-input>
      </q-card-section>
      <q-card-section>
        <div class="">ASIN</div>
        <q-input dense v-model="childProduct.child_asin"></q-input>
      </q-card-section>
      <q-card-section>
        <div class="">Product Image</div>
        <input type="file" @change="handleFileUpload" name="child_image" id="child_image" accept="image/*" />
      </q-card-section>
      <q-card-section>
        <q-btn size="sm" color="primary" round dense @click="deleteChild()" icon="delete" />
        <q-btn size="sm" color="primary" round dense @click="addAnotherChild()" icon="add" />
      </q-card-section>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      childProduct: Object,
    },
    methods: {
      handleFileUpload() {
        // Handle file upload for the child product
      },
      deleteChild() {
        this.$emit('delete-child');
      },
      addAnotherChild() {
        this.$emit('add-another-child');
      },
    },
  };
  </script>