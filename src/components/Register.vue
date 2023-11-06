<template> 
  <div class="">
    <MainHeader />
    <main class="flex">
      <Side />
      <div class="flex-grow flex-1 h-screen pb-44 pt-6 overflow-y-auto p-3 maincontent">
    <div class="w-1/3 mx-auto">
      <div class="w-full text-center">
        <h5 class="text-h5 q-my-md ">Sign Up</h5>
      </div>
      <div class="card card-container">
        <Form @submit="handleRegister" :validation-schema="schema">
          <div v-if="!successful">
            <div class="my-3">
              <label for="username">Username</label>
              <Field name="username" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <ErrorMessage name="username" class="error-feedback" />
            </div>
            <div class="my-3">
              <label for="email">Email</label>
              <Field name="email" type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="my-3">
              <label for="password">Password</label>
              <Field name="password" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <ErrorMessage name="password" class="error-feedback" />
            </div>
            <div class="my-3">
              <label for="password">Confirm Password</label>
              <Field name="password_confirmation" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <ErrorMessage name="ppassword_confirmation" class="error-feedback" />
            </div>
            <div class="my-4">
              <button class="w-full hover:text-white font-semibold text-white px-4 py-3  bg-blue-500 hover:bg-blue-600 rounded-md" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                Sign Up
              </button>
            </div>
          </div>
        </Form>
  
        <div
          v-if="message"
          class="alert my-3"
          :class="successful ? 'text-green' : 'text-red'"
        >
          {{ message }}
        </div>
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
    name: "Register",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const schema = yup.object().shape({
        username: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
        email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
        password: yup
          .string()
          .required("Password is required!")
          .min(6, "Must be at least 6 characters!")
          .max(40, "Must be maximum 40 characters!"),
        password_confirmation: yup
          .string()
      });
  
      return {
        successful: false,
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
    mounted() {
      if (this.loggedIn) {
        this.$router.push("/profile");
      }
    },
    methods: {
      handleRegister(user) {
        this.message = "";
        this.successful = false;
        this.loading = true;
  
        this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      },
    },
  };
  </script>
  
  <style scoped>

  </style>