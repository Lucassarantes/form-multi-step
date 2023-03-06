<template>
    <div class="flex flex-wrap justify-end">
      <div
        class="flex justify-center w-full"
        v-if="preenchido === 1">
        <FirstStep />
      </div>
      <div
        v-if="preenchido === 2">
        <SecondStep />
      </div>
      <div
        v-if="preenchido === 3">
        <ThirdStep />
      </div>
      <button
        class="
          h-10
          mr-12
          justify-self-end
          self-end
          hover:scale-110
          focus:outline-none
          px-4
          py-2
          rounded
          font-bold
          cursor-pointer
          bg-blue-700
          text-white
          border
          duration-200
          border-gray-300
        "
        @click.prevent="nextStep()"
      >
        Next Step
      </button>
    </div>
</template>

<script>
import FirstStep from './steps/FirstStep.vue';
import SecondStep from './steps/SecondStep.vue';
import ThirdStep from './steps/ThirdStep.vue';

export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: { FirstStep, SecondStep, ThirdStep },
    data() {
      return {
        preenchido: 1
      }
    },
    methods: {
      nextStep() {
        this.preenchido += 1;
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
