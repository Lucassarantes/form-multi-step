<template>
    <div class="w-full max-w-xs text-left">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Email Address
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="joao@gmail.com">
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Phone Number
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="phone" placeholder="(xx) x xxxx-xxxx">
            </div>
            <div class="flex items-center justify-end">
            <button class="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Next Step
            </button>
            </div>
        </form>
    </div>
</template>

<script lang="js">
export default {
    setup() {
        
    },
}
</script>