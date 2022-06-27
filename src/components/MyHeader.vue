<template>
    <div class="flex flex-row items-baseline w-full">
        <div class="text-xl font-semibold font-sans:">Domonell.dev</div>
        <div class="ml-4 text-xs mr-auto">by Aljoscha Domonell</div>
        <n-dropdown
            class="mr-8"
            trigger="hover"
            placement="bottom-end"
            :options="languages"
            @select="changeLanguage"
        >
            <button class="mr-8 font-bold"><a>Languages</a></button>
        </n-dropdown>
        <button class="mr-8 font-bold hover:text-orange-500"><a>StackOverflow</a></button>
        <button class="mr-8 font-bold hover:text-orange-500"><a>GitHub</a></button>
        <button class="mr-8 font-bold hover:text-orange-500" @click="auth.signOut()">SignOut</button>
    </div>
</template>

<script setup lang="ts">
import {i18next} from "../i18n";
import {useAuth} from "../composables/use-auth";

const auth = useAuth();

const languages = [
    {
        label: "English",
        key: 'en'
    },
    {
        label: "German",
        key: 'de'
    }];

function changeLanguage(key: string) {
    i18next.changeLanguage(key);
}
</script>

<style scoped>

</style>
