<template>
    <div class="flex flex-row items-stretch h-full bg-green-700">
        <div class="bg-p-dark-black basis-32">
            <my-header></my-header>
        </div>
        <div class="bg-p-black flex-grow">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
