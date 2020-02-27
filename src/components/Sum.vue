<template>
<div class="sum">
<numbers></numbers>
{{ sum }}
<p>You have generated {{ total }} random number</p>
</div>
</template>

<script>

import Numbers from './Numbers'
import { mapGetters } from 'vuex'

export default {
name: 'sum',

components: {
  Numbers
},

computed: {
   ...mapGetters({
     sum: 'sum',
     total: 'totalNumbers'
   })

   // sum(){
   //   return this.$store.getters.sum
   // },
   // totalNumbers() {
   //   return this.$store.getters.totalNumbers
   // }

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
