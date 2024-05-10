<template>
    <nav
        class="navbar absolute left-0 top-0 right-0 flex items-center justify-between px-4 py-2 bg-gray-500 text-white">
        <div class="flex items-center">
            <span class="text-xl font-bold">Ecwid</span>
        </div>
        <div class="flex items-center">
            <button @click="openCart"
                class="flex items-center px-2 py-1 rounded-md hover:bg-gray-600 focus:outline-none">
                <span v-if="cartItemCount > 0"
                    class="text-xs font-bold ml-1 bg-red-500 text-white rounded-full px-1 py-0.5">{{ cartItemCount }}
                </span>
                <img src="@/assets/static/cart.svg" width="40px"/>
            </button>
        </div>
    </nav>
</template>

<script>
import { getCartItems } from '@/services/ecwid.service';
export default {
    data() {
        return {
            cartItemCount: getCartItems().length,
        }
    },
    methods: {
        openCart() {
            this.$router.push('/cart')
        },
    },
};
</script>
