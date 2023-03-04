<template>
    <div class="min-h-screen overflow-auto">
  <div class="container mx-auto max-w-4xl">
    <div class="mt-10 text-center">
      <h1 class="text-lg font-bold text-gray-800 text-left">Pick add-ons</h1>
      <p class="text-sm text-left text-gray-400">Add-ons help enhance your gaming experience.</p>
    </div>
    <div class="flex space-x-10 pt-10">
    <div class="py-12">
      <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div class="px-8 flex justify-between items-center">
          <h5 class="text-md font-bold">Online service</h5>
          <h6 class="text-sm text-center font-bold">Access to multiplayer games.</h6>
        </div>
        <h6 class="text-sm text-center font-bold">+$1/mo</h6>
      </div>
    </div>
    <div class="py-12">
        <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div class="px-8 flex justify-between items-center">
          <h5 class="text-md font-bold">Larger storage</h5>
          <h6 class="text-sm text-center font-bold">Extra 1TB of cloud save.</h6>
        </div>
        <h6 class="text-sm text-center font-bold">+$2/mo</h6>
      </div>
    </div>
    <div class="py-12">
        <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div class="px-8 flex justify-between items-center">
          <h5 class="text-md font-bold">Customizable Profile</h5>
          <h6 class="text-sm text-center font-bold">Custom theme on your profile.</h6>
        </div>
        <h6 class="text-sm text-center font-bold">+$2/mo</h6>
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