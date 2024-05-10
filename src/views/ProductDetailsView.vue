<template>
    <div v-if="product" class="flex flex-col lg:flex-row lg:gap-16 items-center py-16 px-8">
        <div class="w-full lg:w-1/2 flex justify-center items-center">
            <img :src="product.imageUrl" alt="" class="shadow-lg rounded-lg object-cover h-96 w-96 lg:h-auto lg:w-auto">
        </div>
        <div class="w-full lg:w-1/2 px-4 lg:px-0">
            <h2 class="text-3xl font-bold tracking-wide">{{ product.name }}</h2>
            <div v-html="product.description" class="text-gray-700 mt-4 mb-8 leading-loose"></div>
            <div class="font-semibold">
                {{ product.defaultDisplayedPriceFormatted }}
            </div>
            <button @click="addToCart"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-sm mt-8">
                Buy Now
            </button>
        </div>
    </div>
    <div v-else>
        Loading product details...
    </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref, watch, nextTick } from "vue";
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { getProductDetails } from '@/data/ecwid.service'


export default defineComponent({
    setup() {
        const store = useStore()
        const router = useRouter()
        const route = useRoute()

        const productId = ref(route.params.id)
        const product = ref(null)

        const fetchProductDetails = async () => {
            const response = await getProductDetails(productId.value)
            product.value = response
        }

        const addToCart = () => {
            store.dispatch("addProductToCart", product.value)
            router.push('/cart')
        }

        watch(product, (newValue) => {
            if (newValue) {
                nextTick(() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    document.title = newValue.name
                })
            }
        })

        return { productId, product, addToCart, fetchProductDetails }
    },
    created() {
        this.fetchProductDetails()
    },
})
</script>
