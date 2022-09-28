<template>
    <div class="flex sm:flex-row flex-col items-stretch h-full bg-green-700">
        <div class="basis-20 sm:basis-32 order-2 sm:order-1">
            <MyHeader></MyHeader>
        </div>

        <div class="bg-p-black flex-grow overflow-auto order-1 sm:order-2 overflow-x-hidden">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import MyHeader from '../components/MyHeader.vue';
</script>

<style scoped>
</style>
