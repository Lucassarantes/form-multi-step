<template>
    <div class="overflow-auto">
  <div class="container mx-auto">
    <div class="mt-10 text-center">
      <h1 class="text-lg font-bold text-gray-800 text-left">Select your plan</h1>
      <p class="text-sm text-left text-gray-400">You have the option of monthly or yearly billing.</p>
    </div>
    <div class="flex space-x-5 pt-10">
    <div class="py-12">
      <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <img src="../../assets/images/icon-arcade.svg" alt="">
        <div class="px-8 flex justify-between items-center">
          <h5 class="text-md font-bold">Arcade</h5>
        </div>
        <h6 class="text-sm text-center font-bold">$9/mo</h6>
      </div>
    </div>
    <div class="py-12">
      <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <img src="../../assets/images/icon-advanced.svg" alt="">
        <div class="px-8 flex justify-between items-center">
          <h5 class="text-md font-bold">Advanced</h5>
        </div>
        <h6 class="text-sm text-center font-bold">$12/mo</h6>
      </div>
    </div>
    <div class="py-12">
      <div class="bg-white pt-4 pr-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <img src="../../assets/images/icon-advanced.svg" alt="">
        <div class="px-8 flex justify-between items-center">
          <h5 class="text-md font-bold">Pro</h5>
        </div>
        <h6 class="text-sm text-center font-bold">$15/mo</h6>
      </div>
    </div>
    </div>
    <div class="mt-8">
      <div class="flex justify-between">
        <div class="flex space-x-16">
          <div class="flex">
            <span class="px-4 py-1 rounded-md text-sm bg-gray-300 flex items-center cursor-pointer"
              >Monthly
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
}
</script>