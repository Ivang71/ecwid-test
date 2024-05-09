<template>
    <div class="flex flex-wrap px-8 py-16">
      <li v-for="category in categories" :key="category.id" class="w-full md:w-1/3 lg:w-1/4 mb-8">
        <router-link :to="{ path: `/category/${category.id}` }" class="group block rounded-lg shadow-lg overflow-hidden">
          <img :src="category.hdThumbnailUrl" alt="" class="h-48 w-full object-cover group-hover:scale-110 transition duration-300 ease-in-out">
          <div class="p-4 bg-white group-hover:bg-gray-100">
            <h3 class="text-lg font-bold text-gray-800">{{ category.name }}</h3>
          </div>
        </router-link>
      </li>
    </div>
  </template>

<script>
import { getCategories } from '@/services/ecwid.service'

export default {
    data() {
        return {
            categories: [],
        }
    },
    created() {
        this.fetchCategories()
    },
    methods: {
        async fetchCategories() {
            this.categories = await getCategories()
        },
    },
};
</script>