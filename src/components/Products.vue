

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
      <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th class="px-6 py-3">Products</th>
        <th class="px-6 py-3">Image</th>
        <th class="px-6 py-3">ASIN</th>
        <th class="px-6 py-3"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="px-6 py-4 font-medium text-gray-700 dark:text-blue-500  whitespace-nowrap">
          Product Name 1 </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><img width="50" src="../assets/pdtimg.jpg"></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">B0EOFU39234</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
            <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Edit</button>
            <RouterLink :to= "{ name: 'productinfo'}"><button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Create headline</button></RouterLink>
       </td>
      </tr>
      <tr class="border-b">
        <td class="px-6 py-4 font-medium text-gray-700 dark:text-blue-500  whitespace-nowrap">
          Product Name 2 </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><img width="50" src="../assets/pdtimg.jpg"></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">B0EOFU39234</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
            <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Edit</button>
            <RouterLink :to= "{ name: 'productinfo'}"><button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Create headline</button></RouterLink>
          </td>
      </tr>
      <tr class="border-b">
        <td class="px-6 py-4 font-medium text-gray-700 dark:text-blue-500  whitespace-nowrap">
          Product Name 3 </td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"><img width="50" src="../assets/pdtimg.jpg"></td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">B0EOFU39234</td>
        <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
         <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Edit</button>
         <RouterLink :to= "{ name: 'productinfo'}"><button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 text-center mr-2 mb-2">Create headline</button></RouterLink>
       
        </td>
      </tr>

    </tbody>
  </table>
  </div>
    </div>
    
  </template>