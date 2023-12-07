<template>
  <div class="greetings">
    <div class="relative overflow-x-auto my-5">
  <table class="w-1/2 text-sm text-left text-gray-500">
  <thead class="text-xs text-gray-700 uppercase border-1 border-gray-200 bg-gray-100 rounded">
    <tr>
      <th class="px-6 py-3">Accounts</th>
      <th class="px-6 py-3"></th>
    </tr>
  </thead>
  <tbody v-if="accounts !== null" >
    <tr class="border-b" v-for="account in accounts" :key="account.id">
      <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">{{account.email}}</td>
      <td class="px-6 py-4 font-medium whitespace-nowrap">
        <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Edit</button>
        <RouterLink :to= "{ name: 'products', params: { id: account.id }}">
          <button type="button" class="text-white  bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Setup products</button>
           </RouterLink></td>
    </tr>
  </tbody>
</table>
</div>
  </div>
  
</template>
<script >
import { ref} from "vue";
import UserService from "../services/user.service";
export default {
  name: "Admin",
  data() {
    return {
      accounts: null,
    };
  },
  /*const accounts = ref(null);
  const rows=ref(null);
  function loadData () {
    axios.get(`https://api.j-wire.tech/v1/accounts`,{ headers: authHeader() })
      .then((response) => {
        rows.value = response.data.data.accounts
        console.log(rows.value)
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
  }*/


  mounted() {
    console.log("in mounted");
    UserService.getPublicContent().then(
      (response) => {
        console.log(response.data);
        if(response.data.data.role=="user")
        {
          this.$router.push("/products");
        }
        else if(response.data.data.role=="admin"){
          UserService.getAdminBoard().then(
      (response) => {
        console.log(response.data);
        this.accounts = response.data.data.accounts;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
        }
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },

};
    /*
  },
};*/
 /*fetch('https://api.j-wire.tech/v1/accounts/')
    .then(response => response.json())
    .then(data => accounts.value = data);
  console.log(accounts.value);*/
</script>