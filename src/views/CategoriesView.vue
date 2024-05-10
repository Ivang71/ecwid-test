<template>
    <div class="flex flex-wrap px-8 py-16">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <li v-for="category in categories" :key="category.id" class="mb-8">
                <router-link :to="{ path: `/category/${category.id}` }" class="block h-full bg-white rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out overflow-hidden">
                    <div class="relative" style="padding-top: 100%;"> <!-- This makes the div a square -->
                        <img :src="category.hdThumbnailUrl" alt=""
                             class="absolute top-0 left-0 w-full h-full object-cover" style="border-radius: inherit;"> <!-- Removed the rounded-t-lg class since it's inherited -->
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="text-lg font-medium text-gray-800">{{ category.name }}</h3>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { getCategories } from '@/data/ecwid.service'

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
}
</script>