<template>
  <div>
    <ul v-if="numbers.length">
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
    <p v-else>Start adding numbers</p>
      <add-number></add-number>
    </div>
</template>


<script>

import AddNumber from './AddNumber'

export default {
   name: "numbers",


   components:{
     AddNumber
   },

   computed: {
     numbers() {
       return this.$store.getters.numbers
     }

   }

}

</script>

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
