<template>
    <n-dropdown trigger="click" size="large" :options="options" @select="handleSelect">
        <n-button class="absolute top-3 right-3 sm:hidden z-50" size="large" quaternary circle>
            <template #icon>
                <n-icon>
                    <menu-icon />
                </n-icon>
            </template>
        </n-button>
    </n-dropdown>
    <div class="hidden bg-p-dark-black sm:flex flex-col h-full items-center justify-center">
        <div class="basis-36 flex-shrink-0"></div>
        <div class="flex-1"></div>
        <div class="flex flex-col items-center gap-5 m-10">
            <router-link v-for="route in routes" class="nav-button" :to="(route.key! as string)">{{route.label}}</router-link>
        </div>
        <div class="flex-1 flex flex-row sm:flex-col justify-end">
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
        <div class="basis-36 flex-shrink"></div>
    </div>
    <source-code-footer />
</template>

<script setup lang="ts">
import { LogoGithub as GitHubIcon, LogoInstagram as InstagramIcon, LogoLinkedin as LinkedinIcon, MenuSharp as MenuIcon } from '@vicons/ionicons5';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { DropdownOption, DropdownDividerOption, DropdownGroupOption, DropdownRenderOption } from 'naive-ui'

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

const showDropdownRef = ref(false);


const options: DropdownMixedOption[] = routes.concat([
    {
        type: "divider"
    },
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
]);

function handleSelect(key: string) {
    if (key.startsWith("/")) {
        router.push(key);
    } else {
        openInNewTab(key)
    }
}

function handleClick() {
    showDropdownRef.value = !showDropdownRef.value;
}

</script>

<style scoped>
.fill-screen {
    @apply absolute left-0 right-0 top-0 bottom-0 sm:left-auto sm:right-auto sm:top-auto sm:bottom-auto sm:static
}

.nav-button {
    @apply text-p-gray text-xl hover:text-p-hightlight hover:cursor-pointer;
}
</style>
