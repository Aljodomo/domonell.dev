<template>
    <div class="flex flex-col sm:flex-row items-stretch h-full bg-green-700">
        <div class="sm:basis-32">
            <my-header></my-header>
        </div>

        <div class="bg-p-black flex-grow overflow-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
