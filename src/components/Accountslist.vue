

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
  <tbody>
    <tr class="border-b">
      <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">Account Name 1</td>
      <td class="px-6 py-4 font-medium whitespace-nowrap">
        <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Edit</button>
        <RouterLink :to= "{ name: 'products'}">
          <button type="button" class="text-white  bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Setup products</button>
           </RouterLink></td>
     
    </tr>
    <tr class="border-b">
      <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">Account Name 2</td>
     <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
      <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Edit</button>
       <RouterLink :to= "{ name: 'products'}">
          <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Setup products</button>
           </RouterLink></td>
    </tr>
    <tr class="border-b">
      <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">Account Name 3</td>
    <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"> <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Edit</button>
       <RouterLink :to= "{ name: 'products'}">
          <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Setup products</button>
           </RouterLink></td>
    </tr>
  </tbody>
</table>
</div>
  </div>
  
</template>