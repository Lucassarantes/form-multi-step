<template>
  <div class="w-full flex justify-center">
    <div class="flex justify-left bg-white shadow-md rounded-lg pt-4 pb-4 mb-4 w-7/12 pl-4">
      <div class="w-1/2 bg">
        <Stepper />
      </div>
      <div class="w-full">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Stepper from './components/Stepper.vue'

export default {
  name: 'App',
  components: {
    Form,
    Stepper
  }
}
</script>

<style>
@font-face {
  font-family: Ubuntu;
  src: url(assets/fonts/Ubuntu-Bold.ttf) format("truetype");
}
@font-face {
  font-family: Ubuntu;
  src: url(assets/fonts/Ubuntu-Medium.ttf) format("truetype");
}
@font-face {
  font-family: Ubuntu;
  src: url(assets/fonts/Ubuntu-Regular.ttf) format("truetype");
}

#app {
  font-family: Ubuntu, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
html {
  background-color: hsl(217, 100%, 97%);
}

.bg {
  background-image: url("assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  width: 274px; 
  height: 568px;
}
</style>
