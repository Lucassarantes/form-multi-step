<template>    
    <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 uppercase">                  
        <li class="mb-10 flex">            
            <span class="flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                1
            </span>
            <div class="ml-5">
                <p class="text-sm w-full text-left">Step 1</p>
                <h3 class="leading-tight w-full">Your Info</h3>
            </div>
        </li>
        <li class="mb-10 flex">
            <span class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                2
            </span>
            <div class="ml-5">
                <p class="text-sm w-full text-left">Step 2</p>
                <h3 class="leading-tight w-full">Select Plan</h3>
            </div>
        </li>
        <li class="mb-10 flex">
            <span class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                3
            </span>
            <div class="ml-5">
                <p class="text-sm w-full text-left">Step 3</p>
                <h3 class="leading-tight w-full">ADD-ONS</h3>
            </div>
        </li>
        <li class="flex">
            <span class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                4
            </span>
            <div class="ml-5">
                <p class="text-sm w-full text-left">Step 4</p>
                <h3 class="leading-tight w-full">Summary</h3>
            </div>
        </li>
    </ol>
</template>

<script>

export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
}
</script>