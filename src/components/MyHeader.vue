<template>
    <div class="flex flex-col h-full items-center justify-center">
        <div class="basis-36 flex-shrink-0"></div>
        <div class="flex-1"></div>
        <div class="flex flex-col items-center gap-5 m-10">
            <router-link class="nav-button" to="/">Home</router-link>
            <router-link class="nav-button" to="/about">Über</router-link>
            <router-link class="nav-button" to="/contact">Kontakt</router-link>
        </div>
        <div class="flex-1 flex flex-col justify-end">
            <n-button class="text-p-gray" size="large" quaternary circle @click="openInNewTab(instaUrl)">
                <template #icon>
                    <n-icon><InstagramIcon /></n-icon>
                </template>
            </n-button>
            <n-button class="text-p-gray" size="large" quaternary circle @click="openInNewTab(githubUrl)">
                <template #icon>
                    <n-icon><GitHubIcon /></n-icon>
                </template>
            </n-button>
            <n-button class="text-p-gray" size="large" quaternary circle @click="openInNewTab(linkedInUrl)">
                <template #icon>
                    <n-icon><LinkedinIcon /></n-icon>
                </template>
            </n-button>
        </div>
        <div class="basis-36 flex-shrink"></div>
    </div>
</template>

<script setup lang="ts">
import { LogoGithub as GitHubIcon } from '@vicons/ionicons5'
import { LogoInstagram as InstagramIcon } from '@vicons/ionicons5'
import { LogoLinkedin as LinkedinIcon } from '@vicons/ionicons5'

const instaUrl = "https://www.instagram.com/25past4/";
const githubUrl = "https://github.com/Aljodomo";
const linkedInUrl = "https://www.linkedin.com/in/adomonell/";

function openInNewTab(url: string) {
  window.open(url, '_blank')?.focus();
}

</script>

<style scoped>
.nav-button {
    @apply text-p-gray text-lg hover:text-p-hightlight hover:cursor-pointer
}
</style>
