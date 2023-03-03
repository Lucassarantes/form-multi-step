<template>
  <div class="flex">
    <div class="w-1/5">
      <Stepper />
    </div>
    <div class="w-1/2">
      <Form />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
