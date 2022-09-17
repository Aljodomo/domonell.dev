<script setup lang="ts">
import { useRoute } from "vue-router";
import { GlobalThemeOverrides, darkTheme } from 'naive-ui'
import SourceCodeFooter from './components/SourceCodeFooter.vue'

const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#08FDD8',
    },
    Button: {
        heightLarge: "45px",
        textColor: '#08FDD8',
        colorHover: '#08FDD8',
        textColorHover: "black",
        colorFocus: '#08FDD8',
        borderRadiusLarge: "0",
        border: 'solid 1px #08FDD8',
    }
}

let route = useRoute();

</script>

<template>
    <n-config-provider class="h-full" :theme="darkTheme" :theme-overrides="themeOverrides">
        <component :is="route.meta.layout">
            <router-view></router-view>
        </component>

        <source-code-footer />
    </n-config-provider>
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
