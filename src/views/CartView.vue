<template>
    <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
        <div v-if="cartItems.length > 0">
            <ul class="bg-white rounded-lg shadow-lg p-6 divide-y divide-gray-200">
                <li v-for="item in cartItems" :key="item.id" class="flex justify-between items-center py-3">
                    <span class="font-medium text-gray-600">{{ item.name }}</span>
                    <span class="font-medium text-gray-600">${{ item.price }}</span>
                    <button @click="removeFromCart(item.id)" class="text-sm bg-black hover:bg-gray-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                        Delete
                    </button>
                </li>
                <li class="pt-3 flex justify-between items-center font-bold text-gray-800">
                    <span>Total:</span>
                    <span>${{ calculateTotal() }}</span>
                </li>
            </ul>
            <button @click="placeOrder" class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Place Order
            </button>
        </div>
        <div v-else class="bg-white rounded-lg shadow-lg p-6 text-center text-gray-800">
            Your cart is empty.
        </div>
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