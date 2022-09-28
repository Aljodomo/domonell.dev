<template>
    <div class="bg-p-dark-black flex-row flex sm:flex-col h-full items-center justify-around sm:justify-center drop-shadow-2xl">
        <div class="hidden sm:block basis-36 flex-shrink-0"></div>
        <div class="hidden sm:block flex-1"></div>
        <div class="basis-3/4 flex flex-row items-center justify-between text-p-gray sm:basis-0 sm:flex-col sm:gap-5 sm:m-10">
            <router-link v-for="route in routes" :key="route.key"
                :class="{'text-p-hightlight': route.key === currentRoute.path}" class="nav-button" :to="(route.key! as string)">
                {{route.label}}
            </router-link>
            <n-dropdown trigger="click" size="large" :options="options" @select="handleSelect">
                <n-button class="sm:hidden translate-y-[1px]" size="large" text>
                    <template #icon>
                        <n-icon>
                            <menu-icon />
                        </n-icon>
                    </template>
                </n-button>
            </n-dropdown>
        </div>
        <div class="hidden flex-1 sm:flex flex-row sm:flex-col justify-end">
            <n-button class="text-p-gray" size="large" quaternary circle @click="openInNewTab(instaUrl)">
                <template #icon>
                    <n-icon>
                        <InstagramIcon />
                    </n-icon>
                </template>
            </n-button>
            <n-button class="text-p-gray" size="large" quaternary circle @click="openInNewTab(githubUrl)">
                <template #icon>
                    <n-icon>
                        <GitHubIcon />
                    </n-icon>
                </template>
            </n-button>
            <n-button class="text-p-gray" size="large" quaternary circle @click="openInNewTab(linkedInUrl)">
                <template #icon>
                    <n-icon>
                        <LinkedinIcon />
                    </n-icon>
                </template>
            </n-button>
        </div>
        <div class="hidden sm:block basis-36 flex-shrink"></div>
    </div>
    <source-code-footer />
</template>

<script setup lang="ts">
import { LogoGithub as GitHubIcon, LogoInstagram as InstagramIcon, LogoLinkedin as LinkedinIcon, MenuSharp as MenuIcon } from '@vicons/ionicons5';
import { useRoute, useRouter } from 'vue-router';
import { DropdownOption, DropdownDividerOption, DropdownGroupOption, DropdownRenderOption } from 'naive-ui'
import { computed } from 'vue';

const instaUrl = "https://www.instagram.com/25past4/";
const githubUrl = "https://github.com/Aljodomo";
const linkedInUrl = "https://www.linkedin.com/in/adomonell/";

type DropdownMixedOption = DropdownOption | DropdownDividerOption | DropdownGroupOption | DropdownRenderOption;

const routes: DropdownOption[] = [
    {
        label: "Home",
        key: "/"
    },
    {
        label: "About",
        key: "/about"
    },
    {
        label: "Contact",
        key: "/contact"
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

.nav-button {
    @apply text-base sm:hover:text-p-hightlight hover:cursor-pointer;
}
</style>
