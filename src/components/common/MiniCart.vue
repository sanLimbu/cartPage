<template>
  <div class="mini-cart">
    <ul class="list-group" v-if="cart.length">
      <li class="list-group-item" v-for="item in cart" :key="item">
        <a href="#" class="badge" @click.prevent="removeProductFromCart(item.product.id)">Remove</a>
        {{ item.quantity }} x {{ item.product.title }} @ £{{ item.product.price }}
      </li>
      <li class="list-group-item">
        <a href="#" @click.prevent="removeAllProductsFromCart">Clear cart</a>
      </li>
    </ul>
    <p v-else>No items in cart</p>
  </div>
</template>

<script>
  import { mapGetters , mapActions } from 'vuex'

  export default {
    name: 'mini-cart',

    computed: {
      ...mapGetters({
         cart: 'cart'
      })
    },
    methods: {
      ...mapActions({
        getCart: 'getCart',
        removeProductFromCart: 'removeProductFromCart',
        removeAllProductsFromCart: 'removeAllProductsFromCart'
      })
    },

    mounted() {
      this.getCart()
    }

  }
</script>
