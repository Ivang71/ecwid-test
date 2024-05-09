<template>
  <div v-if="category">
    <h2>{{ category.name }}</h2>
    <img v-if="category.image" :src="category.imageUrl" alt="" />
    <ul v-if="products.length > 0">
      <li v-for="product in products" :key="product.id">
        <a :href="`/product/${product.id}`">
          {{ product.name }}
          <span v-if="product.price"> - {{ product.price.text }}</span>
        </a>
      </li>
    </ul>
    <p v-else>No products found in this category.</p>
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
};
</script>

<style scoped>
/* Add your specific styles for the category details view here */
</style>