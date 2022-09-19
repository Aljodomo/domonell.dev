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
                        <div class="mb-1 children_inline-block ani-hi">
                            <span>H</span>
                            <span>e</span>
                            <span>y</span>
                            <!-- <span>l</span>
                            <span>o</span> -->
                            <span>,</span>
                        </div>
                        <div class="mb-1 children_inline-block">
                            <span class="children_inline-block ani-iam">
                                <span>i</span>
                                <span>c</span>
                                <span>h</span>
                                <span>&#160;</span>
                                <span>b</span>
                                <span>i</span>
                                <span>n</span>
                                <span>&#160;</span>
                            </span>
                            <span class="text-p-hightlight children_inline-block ani-name">
                                <span>A</span>
                                <span>l</span>
                                <span>j</span>
                                <span>o</span>
                                <span>s</span>
                                <span>c</span>
                                <span>h</span>
                                <span>a</span>
                            </span>
                            <span class="ani-comma">,</span>
                        </div>
                        <div class="children_inline-block ani-job-title">
                            <span>S</span>
                            <span>o</span>
                            <span>f</span>
                            <span>t</span>
                            <span>w</span>
                            <span>a</span>
                            <span>r</span>
                            <span>e</span>
                            <span>&#160;</span>
                            <span>E</span>
                            <span>n</span>
                            <span>t</span>
                            <span>w</span>
                            <span>i</span>
                            <span>c</span>
                            <span>k</span>
                            <span>l</span>
                            <span>e</span>
                            <span>r</span>
                        </div>
                    </div>
                    <div class="fading-text">");</div>
                </div>
                <div class="ani-full-job-title">
                    <div class="fading-text">System.out.println("</div>
                    <div class="w-auto res-mlr-5 text-base md:text-xl text-p-gray font-mono tracking-wider ">Backend / Web Fullstack
                        Entwickler</div>
                    <div class="fading-text">");</div>
                </div>
                <div class="mt-5 flex flex-col ani-contact">
                    <!-- <div class="fading-text">acceptInput(</div> -->
                    <n-button class="res-mlr-5 w-52 self-center sm:self-start" size="large"
                        @click="() => router.push('/contact')">
                        Kontaktieren
                    </n-button>
                    <!-- <div class="fading-text">)</div> -->
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
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { useRouter } from 'vue-router';
const router = useRouter();

onMounted(() => {

    const tl = gsap.timeline();

    tl
        .from(".ani-hi > *", {scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.07, duration: 0.7, delay: 0.3})
        .from(".ani-iam > *", {scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.03, duration: 0.7 }, "-=.4") 
        .add("st1", "-=0.8")
        .from(".ani-job-title > *", {scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.07, duration: 0.7}, "-=.55")
        .from(".ani-name", {x: 200, opacity: 0}, "-=.5")
        .from(".ani-full-job-title", {y: 50, opacity: 0, duration: 0.8}, "st1")
        .from(".ani-contact", {y: 50, opacity: 0, duration: 0.8}, "st1+=0.2")


});
</script>

<style scoped>

.children_inline-block > * {
    @apply inline-block
}

.big-letters {
    @apply text-white font-['Arial'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tightest
}
</style>
