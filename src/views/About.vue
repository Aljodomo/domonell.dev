<template>
    <div class="h-full p-5 font-['Arial']">
        <div class="h-full flex flex-col justify-between max-w-4xl">
            <div class="res-mlr-5 fading-text">
                <div>#include&lt;stdio.h&gt;</div>
                <div>void main(void){</div>
            </div>
            <div class="res-mlr-10">
                <div>
                    <div class="fading-text">printf("</div>
                    <div class="res-mlr-5">
                        <div class="hightlighted-big-letters">Ich, ich, ich...</div>
                    </div>
                    <div class="fading-text">");</div>
                </div>
                <div>
                    <div class="fading-text">printf("</div>
                    <div class="res-mlr-5 normal-text">
                        <p>
                            Ich bin Software Enwickler und lebe in Berlin. 
                            Ich genieße es die Möglichkeiten der digitalen Welt zu endecken und zur Anwendung zu bringen.</p>
                        <br>
                        <p>
                            Meine Passion ist es komplexe Welten einfacher zugänglich zu machen. 
                            Die digitale Welt in der wir uns als Enwickler bewegen hat viel zu bieten,
                            was jedoch meist aus Unwissenheit ungenutzt bleibt.
                            Ich sehe das lernen als integralen Bestandteil meiner Arbeit und folge dem Vorsatz etwas lieber richtig als doppelt zu machen.
                            Ein Problem hat immer eine Lösung auch wenn es nicht die ist, die man gerne hören möchte.
                        </p>
                        <br>
                        <p>
                            Ich sehe eine gute Kommunkation als das größte Kapital eines Unternehmens.
                        </p>
                        <br>
                        <router-link class="text-p-hightlight" to="/contact">Ich freue mich auf ihre Nachricht.</router-link>
                    </div>
                    <div class="fading-text">");</div>
                </div>
            </div>
            <div class="fading-text res-mlr-5">
                <div >}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
