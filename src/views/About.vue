<template>
    <div class="h-full p-5 font-['Arial'] flex flex-row items-center">
        <div class="self-stretch flex flex-col justify-between max-w-4xl">
            <div class="res-mlr-5 fading-text">
                <div class="hidden sm:block">#include&lt;stdio.h&gt;</div>
                <div>void main(void){</div>
            </div>
            <div class="res-mlr-10">
                <div>
                    <div class="fading-text">printf("</div>
                    <div class="res-mlr-5">
                        <div class="hightlighted-big-letters children_inline-block ani-ich">
                            <span v-for="(char, index) in encode('Ich, ich, ich...')" v-html="char" :key="index"></span>
                        </div>
                    </div>
                    <div class="fading-text">");</div>
                </div>
                <div>
                    <div class="fading-text">printf("</div>
                    <div class="res-mlr-5 normal-text">
                        <p class="ani-flyin">
                            Ich bin Software Entwickler und lebe in Berlin. 
                            Ich genieße es, die Möglichkeiten der digitalen Welt zu entdecken und zur Anwendung zu bringen.</p>
                        <br>
                        <p class="ani-flyin">
                            Meine Passion ist es, komplexe Welten einfacher zugänglich zu machen. 
                            Die digitale Welt, in der wir uns als Entwickler bewegen, hat viel zu bieten, was jedoch meist aus Unwissenheit ungenutzt bleibt. 
                            Ich sehe das Lernen als integralen Bestandteil meiner Arbeit und folge dem Vorsatz, etwas lieber richtig als doppelt zu machen. 
                            Ein Problem hat immer eine Lösung, auch wenn es nicht die ist, die man gerne hören möchte.
                        </p>
                        <br>
                        <p class="ani-flyin">
                            Ich sehe eine gute Kommunikation als das größte Kapital eines Unternehmens.
                        </p>
                        <br>
                        <router-link class="text-p-hightlight ani-flyin inline-block children_inline-block ani-contact-me" to="/contact">
                            <span v-for="(char, index) in encode('Ich freue mich auf ihre Nachricht.')" v-html="char" :key="index"></span>
                        </router-link>
                    </div>
                    <div class="fading-text">");</div>
                </div>
            </div>
            <div class="fading-text res-mlr-5">
                <div >}</div>
            </div>
        </div>
        <!-- <div class="tag-cloud basis-1/2 text-p-hightlight h-full"></div> -->
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import { gsap } from "gsap";
import { encode } from "../utils/html-encoder";
// import TagCloud from "TagCloud";

onMounted(() => {
    nextTick(() => {
        gsap.timeline()
            .from(".ani-ich > *", { scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.05, duration: 0.7, delay: 0.3 })
            .from(".ani-flyin", { y: 100, opacity: 0, stagger: 0.2 }, "-=1.3")
            .fromTo(".ani-contact-me > *",
                { scale: 0.99 },
                { scale: 1, stagger: 0.01, duration: 0.2, ease: "back.out(180)" }
            )
    });


    // const texts = [
    //     'Java', 
    //     'JavaScript', 
    //     'TypeScript',
    //     'C', 
    //     'C++', 
    //     'SQL',
    //     'Spring-Boot', 
    //     'JavaFX', 
    //     'JCEF',
    //     'JUnit',
    //     'Maven', 
    //     'VueJS', 
    //     'DevExtreme', 
    //     'Leaflet', 
    //     'Self Contained Systems', 
    //     'TTD', 
    //     'DependencyTrack', 
    //     'Docker', 
    //     'TTD', 
    //     'OracleDB', 
    //     'MySQL', 
    //     'MongoDB', 
    //     'Firebase', 
    //     'FireStore', 
    //     'Keycloak', 
    //     'Oauth2', 
    //     'JWT', 
    //     'OpenID',
    //     'Flutter',
    // ];
    // const options = {radius: 400};

    // TagCloud('.tag-cloud', texts, options);
})


</script>

<style>
/* .tagcloud {
    height: 100% !important;
    width: 100% !important;
} */
</style>
