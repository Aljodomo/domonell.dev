<script setup lang="ts">
import { useRoute } from "vue-router";
import { GlobalThemeOverrides, darkTheme, NConfigProvider, NNotificationProvider } from 'naive-ui'

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

const route = useRoute();

</script>

<template>
    <NConfigProvider class="h-full" :theme="darkTheme" :theme-overrides="themeOverrides">
        <NNotificationProvider placement="bottom-right">
            <component :is="route.meta.layout">
                <RouterView></RouterView>
            </component>
        </NNotificationProvider>
    </NConfigProvider>
</template>

<style>
</style>
