<template>
    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <img :src="product.imageUrl" alt="">
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price.text }}</p>
      <button @click="addToCart">Buy</button>
    </div>
    <div v-else>
      Loading product details...
    </div>
  </template>
  
  <script>
  import { getProductDetails, addToCart } from '@/services/ecwid.service';
  
  export default {
    data() {
      return {
        productId: this.$route.params.id,
        product: null,
      };
    },
    created() {
      this.fetchProductDetails();
    },
    methods: {
      async fetchProductDetails() {
        const product = await getProductDetails(this.productId);
        this.product = product;
      },
      addToCart() {
        addToCart(this.product);
        this.$router.push('/cart');
      },
    },
  };
  </script>
  