<script setup lang="ts">
import {useRoute} from "vue-router";

let route = useRoute();
</script>

<template>
    <component :is="route.meta.layout">
        <router-view></router-view>
    </component>
</template>

<style>

body {
    margin: 0;
    min-height: 100%;
    height: 100%;
}

#app {
    height: 100%;
    width: 100%;
}
</style>
