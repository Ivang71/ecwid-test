<template>
    <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
        <div v-if="cartItems.length > 0">
            <ul class="bg-white rounded-lg shadow-lg p-6 divide-y divide-gray-200">
                <li v-for="item in cartItems" :key="item.id" class="flex justify-between items-center py-3">
                    <div class="flex-1 flex items-center">
                        <img v-bind:src="item.smallThumbnailUrl" alt="product thumbnail" class="w-12 h-12 mr-4">
                        <router-link :to="`/product/${item.id}`" class="font-medium text-gray-600 hover:text-gray-800">{{ item.name }}</router-link>
                    </div>
                    <span class="flex-1 font-medium text-gray-600 text-center">{{ item.price }}₽</span>
                    <span class="flex-1 text-right">
                        <button @click="removeProductFromCart(item.id)"
                            class="text-sm bg-black hover:bg-gray-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                            Delete
                        </button>
                    </span>
                </li>
                <li class="pt-3 flex justify-between items-center font-bold text-gray-800">
                    <span class="flex-1">Total:</span>
                    <span class="flex-1 text-center">{{ totalPrice }}₽</span>
                    <span class="flex-1"></span>
                </li>
            </ul>
            <button @click="placeOrder"
                class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Place Order
            </button>
        </div>
        <div v-else class="bg-white rounded-lg shadow-lg p-6 text-center text-gray-800">
            Your cart is empty.
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue"
import { useStore } from 'vuex'
import confetti from 'canvas-confetti'
import Swal from 'sweetalert2'

export default defineComponent({
    setup() {
        const store = useStore()

        const cartItems = computed(() => store.getters.cartItems)

        const removeProductFromCart = (productId: number) => {
            store.dispatch("removeProductFromCart", productId)
        }

        const totalPrice = computed(() => {
            return cartItems.value.reduce((sum: number, item: any) => sum + item.price, 0)
        })

        const placeOrder = () => {
            // Launch confetti!
            confetti({
                zIndex: 9999,
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            })

            // Display success message
            Swal.fire({
                title: 'Congratulations!',
                text: 'Your order has been placed.',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Awesome!'
            })

            // You might want to clear the cart after placing the order
            // store.dispatch("clearCartItems");
        }

        onMounted(() => {
            document.title = "Cart"
        })

        return { cartItems, removeProductFromCart, totalPrice, placeOrder }
    },
})
</script>