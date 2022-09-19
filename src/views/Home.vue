<template>
    <div class="h-full p-5">
        <div class="h-full flex flex-col justify-between">
            <div class="fading-text">
                <div>class Home {</div>
                <div class="res-mlr-5">public static void main(String args[]){</div>
            </div>
            <div class="res-mlr-5">
                <div>
                    <div class="fading-text">System.out.println("</div>
                    <div class="big-letters sm:ml-5">
                        <div class="mb-1">Hallo,</div>
                        <div class="mb-1">ich bin Aljoscha,</div>
                        <div>Software Entwickler</div>
                    </div>
                    <div class="fading-text">");</div>
                </div>
                <div>
                    <div class="fading-text">System.out.println("</div>
                    <div class="w-auto res-mlr-5 text-base md:text-xl text-p-gray font-mono tracking-wider">Backend / Web Fullstack
                        Entwickler</div>
                    <div class="fading-text">");</div>
                </div>
                <div class="flex flex-col">
                    <div class="fading-text">acceptInput(</div>
                    <n-button class="res-mlr-5 w-52 self-center sm:self-start" size="large"
                        @click="() => router.push('/contact')">
                        Kontaktieren
                    </n-button>
                    <div class="fading-text">)</div>
                </div>
            </div>
            <div class="fading-text">
                <div class="res-mlr-5">}</div>
                <div>}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
.big-letters {
    @apply text-white font-['Arial'] text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tightest
}
</style>
