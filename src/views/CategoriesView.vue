<template>
    <div class="flex flex-wrap px-8 py-16">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <li v-for="category in categories" :key="category.id" class="mb-8">
                <router-link :to="{ path: `/category/${category.id}` }" class="block h-full">
                    <div class="h-full rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out overflow-hidden">
                        <img :src="category.hdThumbnailUrl" alt=""
                             class="w-full object-cover rounded-t-lg" style="height: 256px;">
                        <div class="p-4 bg-white">
                            <h3 class="text-lg font-medium text-gray-800">{{ category.name }}</h3>
                        </div>
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