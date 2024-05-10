<template>
    <nav class="mb-[24px]">
        <navbar />
    </nav>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup>
import navbar from '@/components/Navbar.vue'
</script>