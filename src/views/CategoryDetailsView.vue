<template>
    <div v-if="category" class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">{{ category.name }}</h2>
        <img v-if="category.image" :src="category.imageUrl" alt="" class="w-full object-cover rounded-lg" />
        <ul v-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li v-for="product in products" :key="product.id"
                class="p-4 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out bg-white">
                <router-link :to="{ path: `/product/${product.id}` }" class="block h-full">
                    <div class="relative" style="padding-top: 100%;">
                        <img v-if="product.hdThumbnailUrl" :src="product.hdThumbnailUrl" alt="" 
                            class="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-between pt-4">
                        <h3 class="text-lg font-medium">{{ product.name }}</h3>
                        <div v-if="product.defaultDisplayedPriceFormatted" class="mt-4 text-gray-700">
                            {{ product.defaultDisplayedPriceFormatted }}
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <p v-else class="text-gray-500">No products found in this category.</p>
    </div>
    <div v-else>
        <p>Loading category details...</p>
    </div>
</template>

<script>
import { getCategoryInfo, getProductsByCategory } from '@/data/ecwid.service'

export default {
    data() {
        return {
            categoryId: this.$route.params.id,
            category: null,
            products: [],
        }
    },
    async created() {
        if (this.categoryId) {
            [this.category, this.products] = await Promise.all([
                getCategoryInfo(this.categoryId),
                getProductsByCategory(this.categoryId)
            ])
        }
    },
    methods: {
        buy(product) {
            this.$router.push(`/product/${product.id}`)
        }
    }
}
</script>

<style scoped>
/* Add your specific styles for the category details view here */
</style>