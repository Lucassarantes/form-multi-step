<template>
    <div class="w-full max-w-md text-left">
        <form class="pt-6 pb-8 mb-4">
            <h2 class="font-bold text-3xl">Personal Info</h2>
            <p class="text-light-gray mb-8 text-xs font-semibold">Please provide your name, email address, and phone number.</p>
            <div class="mb-4">
            <label class="block text-gray-700 text-base font-bold mb-2" for="username">
                Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-base font-bold mb-2" for="password">
                Email Address
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="joao@gmail.com">
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-base font-bold mb-2" for="password">
                Phone Number
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="phone" placeholder="(xx) x xxxx-xxxx">
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