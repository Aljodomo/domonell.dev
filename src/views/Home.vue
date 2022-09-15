<template>
    <div class="h-full pl-10 p-5">
        <div class="h-full flex flex-col justify-between">
            <div class="fading-text">
                <div>public class Home {</div>
                <div class="ml-5">public static void main(String args[]){</div>
            </div>
            <div class="ml-5">
                <div>
                    <div class="fading-text">System.out.println("</div>
                    <div class="big-letters ml-5 ">
                        <div class="mb-1">Hallo,</div>
                        <div class="mb-1">ich bin Aljoscha,</div>
                        <div>Software Entwickler</div>
                    </div>
                    <div class="fading-text">");</div>
                </div>
                <div>
                    <div class="fading-text">System.out.println("</div>
                    <div class="ml-5 text-xl text-p-gray font-mono tracking-wider">Backend / Web Fullstack Entwickler</div>
                    <div class="fading-text">");</div>
                </div>
                <n-button class="w-52 ml-5 mt-5 text-lg" size="large">
                    Kontaktieren
                </n-button>
            </div>
            <div class="fading-text">
                <div class="ml-5">}</div>
                <div>}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.big-letters {
    @apply text-white font-['Arial'] text-8xl font-bold tracking-tightest
}

.fading-text {
    @apply text-p-fade font-serif italic
}
</style>
