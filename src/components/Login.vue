<template> 
  <div class="">
    <MainHeader />
    <main class="flex">
      <Side />
      <div class="flex-grow flex-1 h-screen pb-44 pt-6 overflow-y-auto p-3 maincontent">
    <div class="w-1/3 mx-auto">
      <div class="w-full text-center">
        <h5 class="text-h5 q-my-md">Log In</h5>
      </div>
      <!--<div class="row mx-auto">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md" @submit="handleLogin" :validation-schema="schema">
              <q-input square filled clearable v-model="email" name="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" name="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section>
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </q-card-section>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not registered? Create an Account</p>
          </q-card-section>
        </q-card>
      </div>-->
      <div class="card card-container">
        <Form @submit="handleLogin" :validation-schema="schema">
          <div class="my-3">
            <label for="email">Username</label>
            <Field name="email" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="my-3">
            <label for="password">Password</label>
            <Field name="password" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>
         <!--  <q-card-section>
          <q-input   clearable name="email" type="email" label="email" />
          <ErrorMessage name="email" class="error-feedback" />
          </q-card-section>
          <q-card-section>
          <q-input  clearable name="password" type="password" label="password" />
          <ErrorMessage name="password" class="error-feedback" />
           </q-card-section>
           <q-card-actions class="q-px-md">
            <q-btn unelevated color="blue-7" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section>
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </q-card-section>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not registered?
               <RouterLink to="/register">Create an Account </RouterLink>
              </p>
          </q-card-section>-->
         <div class="my-4">
            <button class="w-full hover:text-white font-semibold text-white px-4 py-3  bg-blue-500 hover:bg-blue-600 rounded-md" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Login</span>
            </button>
          </div>
  
          <div class="my-3">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
          <p class="text-grey-6 my-2">Not registered?
               <RouterLink to="/register">Create an Account </RouterLink>
              </p>
        </Form>
      </div>
    </div>
    </div>
    </main>
    </div>
  </template>
  <script setup>
  import MainHeader from "./Mainheader.vue";
  import Side from "./Side.vue";
  </script>
  <script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  
  export default {
    name: "Login",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const schema = yup.object().shape({
        email: yup.string().required("Username is required!"),
        password: yup.string().required("Password is required!"),
      });
  
      return {
        loading: false,
        message: "",
        schema,
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    created() {
      if (this.loggedIn) {
        this.$router.push("/accounts");
      }
    },
    methods: {
      handleLogin(user) {
        console.log("login")
        this.loading = true;
  
        this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/accounts");
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      },
    },
  };
  </script>
  
  <style scoped>

  </style>