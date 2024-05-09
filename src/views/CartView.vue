<template>
    <div>
      <h2>Shopping Cart</h2>
      <ul v-if="cartItems.length > 0">
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - {{ item.price }}
          {{ console.log(item) }}
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
        <li>Total: {{ calculateTotal }}</li>
      </ul>
      <div v-else>
        Your cart is empty.
      </div>
      <button @click="placeOrder">Place Order</button>
    </div>
  </template>
  
  <script>
  import { getCartItems, clearCart, removeFromCart } from '@/services/ecwid.service'
  import { ref } from 'vue';

  export default {
    data() {
      return {
        cartItems: ref(JSON.parse(localStorage.getItem('myKey')) || {}),
      };
    },
    created() {
      this.cartItems = getCartItems();
    },
    methods: {
      removeFromCart(itemId) {
        removeFromCart(itemId)
      },
      calculateTotal() {
        // Implement logic to calculate total price based on cart items
        return '$100.00'; // Placeholder for actual calculation
      },
      placeOrder() {
        alert('Thank you for your order!');
        this.cartItems = [];
        clearCart()
      },
    },
  };
  </script>
  