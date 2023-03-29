<template>
    <div class="bg-p-dark-black flex-row flex sm:flex-col h-full items-center justify-evenly sm:justify-center drop-shadow-2xl">
        <div class="flex-1 mt-12  hidden sm:block">
            <LogoGithub class="text-p-gray hover:text-p-hightlight-blue hover:scale-125 transition hover:cursor-pointer w-8 h-8" @click="openInNewTab(githubUrl)" />
        </div>
        <div class="flex-1 flex flex-row items-center sm:justify-center text-p-gray sm:basis-0 sm:flex-col sm:gap-5 mx-8 sm:mx-12 my-4">
            <div  v-for="route in routes" class="flex-1 flex-grow sm:flex-grow-0 flex justify-center">
                <router-link :key="route.key"
                    :class="{'text-p-hightlight': route.key === currentRoute.path}" class="text-p-gray sm:hover:scale-110 transition hover:cursor-pointer hover:text-p-hightlight" :to="route.key">
                    <div class="flex flex-col items-center">
                        <component class="inline-block sm:hidden w-8 h-8 mb-1" :is="route.icon"></component>
                        <p class="text-xs sm:text-base">{{route.label}}</p>
                    </div>
                </router-link>
            </div>
            <!-- <NDropdown trigger="click" size="large" :options="options" @select="handleSelect">
                <MenuSharp class="nav-button translate-y-[1px] sm:hidden" />
            </NDropdown> -->
        </div>
        <div class="flex-1 hidden sm:flex justify-end flex-row sm:flex-col items-center gap-6 mb-12">  
            <a :href="instaUrl" target="_blank">
                <LogoInstagram class="social-button" />
            </a>
            <a :href="githubUrl" target="_blank">
                <LogoGithub class="social-button" />
            </a>
            <a :href="linkedInUrl" target="_blank">
                <LogoLinkedin class="social-button" />
            </a>
        </div>
    </div>
    <SourceCodeFooter />
</template>

<script setup lang="ts">
import { LogoGithub, LogoInstagram, LogoLinkedin, HomeOutline as Home, PersonOutline as Person, PaperPlaneOutline as Plane } from '@vicons/ionicons5';
import { useRoute, useRouter } from 'vue-router';
import { DropdownOption, DropdownDividerOption, DropdownGroupOption, DropdownRenderOption, NDropdown, NIcon } from 'naive-ui'
import SourceCodeFooter from './SourceCodeFooter.vue';

const instaUrl = "https://www.instagram.com/25past4/";
const githubUrl = "https://github.com/Aljodomo";
const linkedInUrl = "https://www.linkedin.com/in/adomonell/";

type DropdownMixedOption = DropdownOption | DropdownDividerOption | DropdownGroupOption | DropdownRenderOption;

const routes: {label: string, key: string, icon: any}[] = [
{
        label: "Willkommen",
        key: "/",
        icon: Home
    },
    {
        label: "Über mich",
        key: "/about",
        icon: Person
    },
    {
        label: "Kontakt",
        key: "/contact",
        icon: Plane
    }
]

function openInNewTab(url: string) {
    window.open(url, '_blank')?.focus();
}

const router = useRouter();

const options: DropdownMixedOption[] = [
    {
        label: 'Instagram',
        key: instaUrl,
    },
    {
        label: 'GitHub',
        key: githubUrl,
    },
    {
        label: 'LinkedIn',
        key: linkedInUrl,
        
    }
];

function handleSelect(key: string) {
    if (key.startsWith("/")) {
        router.push(key);
    } else {
        openInNewTab(key)
    }
}

const currentRoute = useRoute();

</script>

<style scoped>
.fill-screen {
    @apply absolute left-0 right-0 top-0 bottom-0 sm:left-auto sm:right-auto sm:top-auto sm:bottom-auto sm:static
}

.social-button {
    @apply text-p-gray hover:scale-110 transition hover:cursor-pointer hover:text-p-hightlight w-6 h-6
}

</style>
