<template>
    <div>
      <h2>Categories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="{ path: `/category/${category.id}`}">
            {{ category.name }}
            <img v-if="category.hdThumbnailUrl" :src="category.hdThumbnailUrl" alt="" />
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { getCategories } from '@/services/ecwid.service';
  
  export default {
    data() {
      return {
        categories: [],
      };
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      async fetchCategories() {
        this.categories = await getCategories();
      },
    },
  };
  </script>
  