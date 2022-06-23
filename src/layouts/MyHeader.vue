<template>
    <div class="flex flex-row items-baseline w-full">
        <div class="text-xl font-semibold font-sans:">Domonell.dev</div>
        <div class="ml-4 text-xs">by Aljoscha Domonell</div>
        <button class="ml-auto mr-8 font-bold hover:text-orange-500"><a>StackOverflow</a></button>
        <n-dropdown
            trigger="hover"
            placement="bottom-end"
            :options="languages"
            @select="() => {}"
        >
            <button class="mr-8 font-bold"><a>Languages</a></button>
        </n-dropdown>
        <button class="mr-8 font-bold hover:text-orange-500"><a>GitHub</a></button>
    </div>
</template>

<script setup lang="ts">
const languages = [
    {
        label: "English",
        key: 'en'
    },
    {
        label: "German",
        key: 'de'
    }];
</script>

<style scoped>

</style>
