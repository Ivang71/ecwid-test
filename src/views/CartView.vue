<template>
    <div>
        <h2>Shopping Cart</h2>
        <ul v-if="cartItems.length > 0">
            <li v-for="item in cartItems" :key="item.id">
                {{ item.name }} - ${{ item.price }}
                <button @click="removeFromCart(item.id)">Delete</button>
            </li>
            <li>Total: {{ calculateTotal() }}</li>
        </ul>
        <div v-else>
            Your cart is empty.
        </div>
        <button @click="placeOrder">Place Order</button>
    </div>
</template>

<script>
import { getCartItems, clearCart, removeFromCart } from '@/services/ecwid.service'

export default {
    data() {
        return {
            cartItems: [],
        }
    },
    created() {
        this.cartItems = getCartItems()
    },
    methods: {
        removeFromCart(itemId) {
            removeFromCart(itemId)
            this.cartItems = getCartItems()
        },
        calculateTotal() {
            return this.cartItems.reduce((sum, i) => sum + i.price, 0)
        },
        placeOrder() {
            alert('Thank you for your order!')
            this.cartItems = []
            clearCart()
        },
    },
};
</script>