<template>    
    <ol class="relative text-gray-500 dark:text-gray-400 uppercase grid gap-y-1 pl-10 pt-10">                  
        <li class="mb-10 flex">            
            <span class="flex items-center justify-center w-7 h-7 bg-teal-100 rounded-full left-4 ring-1 ring-white dark:ring-gray-500 dark:bg-green-900 text-white">
                1
            </span>
            <div class="ml-5">
                <p class="text-xs w-full text-left text-white">Step 1</p>
                <h3 class="text-xs w-full text-white font-bold">Your Info</h3>
            </div>
        </li>
        <li class="mb-10 flex">
            <span class="flex items-center justify-center w-7 h-7 rounded-full left-4 ring-1 ring-white dark:ring-gray-900 dark:bg-gray-700 text-white">
                2
            </span>
            <div class="ml-5">
                <p class="text-xs w-full text-left text-white">Step 2</p>
                <h3 class="text-xs w-full text-white font-bold">Select Plan</h3>
            </div>
        </li>
        <li class="mb-10 flex">
            <span class="flex items-center justify-center w-7 h-7 rounded-full left-4 ring-1 ring-white dark:ring-gray-900 dark:bg-gray-700 text-white">
                3
            </span>
            <div class="ml-5">
                <p class="text-xs w-full text-left text-white">Step 3</p>
                <h3 class="text-xs w-full text-white font-bold">ADD-ONS</h3>
            </div>
        </li>
        <li class="flex">
            <span class="flex items-center justify-center w-7 h-7 rounded-full left-4 ring-1 ring-white dark:ring-gray-900 dark:bg-gray-700 text-white">
                4
            </span>
            <div class="ml-5">
                <p class="text-xs w-full text-left text-white">Step 4</p>
                <h3 class="text-xs w-full text-white font-bold">Summary</h3>
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

<style>
    ol {
        width: 100%;
        padding-left: 5%;
    }
</style>