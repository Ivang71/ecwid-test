<template>
    <nav
        class="navbar z-50 absolute left-0 top-0 right-0 flex items-center justify-between px-4 py-2 bg-black text-white">
        <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold no-drag">Ecwid Store</router-link>
        </div>
        <div class="flex items-center">
            <span v-if="cartItemCount > 0"
                class="font-bold ml-1 bg-blue-500 text-white rounded-full px-1 py-0.5">{{ cartItemCount }}
            </span>
            <button @click="openCart"
                class="flex items-center px-2 py-1 rounded-md hover:bg-gray-600 focus:outline-none">
                <img src="@/assets/static/cart.svg" width="40px" />
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router' // Import `useRouter` to use Vue Router inside `setup`

export default defineComponent({
    setup() {
        // Using the Composition API to access the Vuex store
        const store = useStore()
        const router = useRouter() // Using the `useRouter` hook to get access to the router instance

        // A computed property to get the number of items in the cart
        const cartItemCount = computed(() => store.getters.cartItems.length)

        // Method to navigate to the cart page
        const openCart = () => {
            router.push('/cart')
        }

        // Exposing cartItemCount and openCart to the template
        return {
            cartItemCount,
            openCart,
        }
    },
});
</script>