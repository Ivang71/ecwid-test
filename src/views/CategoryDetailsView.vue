<template>
    <div v-if="category" class="flex flex-col gap-4">
      <h2 class="text-2xl font-semibold">{{ category.name }}</h2>
      <img v-if="category.image" :src="category.imageUrl" alt="" class="w-full h-full object-cover rounded-lg" />
      <ul v-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li v-for="product in products" :key="product.id" class="p-4 h-fit rounded-lg shadow-md hover:shadow-lg-hover">
          <img v-if="product.hdThumbnailUrl" :src="product.hdThumbnailUrl" alt="" class="w-full h-full object-cover rounded-t-lg" />
          <div class="flex flex-col justify-between pt-4 px-4 pb-2">
            <h3 class="text-lg font-medium">{{ product.name }}</h3>
            <div class="mt-4 flex items-center justify-between text-gray-700">
              <span v-if="product.defaultDisplayedPriceFormatted"> {{ product.defaultDisplayedPriceFormatted}}</span>
              <button @click="buy(product)" class="px-12 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">Buy</button>
            </div>
          </div>
        </li>
      </ul>
      <p v-else class="text-gray-500">No products found in this category.</p>
    </div>
    <div v-else>
      <p>Loading category details...</p>
    </div>
  </template>

<script>
import { getCategoryInfo, getProductsByCategory } from '@/services/ecwid.service'

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