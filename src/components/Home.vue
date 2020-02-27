<template>
  <div class="row">
    <div class="col-sm-3">
      <mini-cart></mini-cart>
    </div>
    <div class="col-sm-9">
      <products></products>
    </div>
  </div>
</template>

<script>
  import MiniCart from '@/components/common/MiniCart'
  import Products from '@/components/shop/Products'

  export default {
    name: 'home',
    components: {
      MiniCart,
      Products
    }
  }
</script>
