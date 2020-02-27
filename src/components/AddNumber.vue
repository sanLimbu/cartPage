<template>
<div>
  <a href="" @click.prevent="fetchNumber"> Add Random Number</a>
</div>
</template>


<script>

import { mapActions } from 'vuex'

export default {
  name: 'add-number',
  methods: {

    ...mapActions({
      fetchNumber: 'fetchNumber'
    })

    // add() {
      // this.$store.commit('addRandomNumber', {
      //    min: 1,
      //    max: 100
      // })

    //   this.$store.dispatch('fetchNumber', {
    //      min: 1,
    //      max: 100
    //   })
    // }
  }
}
</script>
