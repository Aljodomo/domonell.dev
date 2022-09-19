<template>
    <div class="h-full pl-5 p-5 font-['Arial']">
        <div class="h-full flex flex-col justify-between max-w-2xl">
            <div class="fading-text sm:ml-5">
                <div>package main</div>
                <div>import "fmt"</div>
                <div>func  main(void){</div>
            </div>
            <div class="res-mlr-10">
                <div>
                    <div class="fading-text">fmt.Println("</div>
                    <div class="res-mlr-5 hightlighted-big-letters children_inline-block ani-contact">
                            <span v-for="char in encode('Kontakt')" v-html="char"></span>
                        </div>
                    <div class="fading-text">")</div>
                </div>
                <div>
                    <div class="fading-text">fmt.Println("</div>
                    <div class="res-mlr-5 normal-text ani-flyin">
                        Ich bin interessiert an Freiberuflicher Tätigkeit besonders in der Neuentwicklung.
                    </div>
                    <div class="fading-text">")</div>
                </div>
                <div class="mt-5">
                    <n-form class="res-mlr-5" ref="formRef" :model="formValue" :show-label="false" :rules="rules">
                        <n-grid span="2" :x-gap="10" :y-gap="0" cols="1 s:2 m:2 l:2 xl:2 2xl:2"  responsive="screen">
                            <n-form-item-gi class="ani-flyin" required label="Name" span="1" path="name">
                                <n-input v-model:value="formValue.name" placeholder="Name" />
                            </n-form-item-gi>
                            <n-form-item-gi class="ani-flyin" required span="1" path="email">
                                <n-input v-model:value="formValue.email" placeholder="Email" />
                            </n-form-item-gi>
                            <n-form-item-gi class="ani-flyin" required span="2" path="subject">
                                <n-input v-model:value="formValue.subject" placeholder="Betreff" />
                            </n-form-item-gi>
                            <n-form-item-gi class="ani-flyin" required span="2" path="message">
                                <n-input v-model:value="formValue.message" placeholder="Nachricht" type="textarea"
                                    :autosize="{
                                        minRows: 5
                                    }" />
                            </n-form-item-gi><!-- ani-flyin class has to be on this level. I dont know why... -->
                            <n-form-item-gi class="ani-flyin" span="1">
                                <n-tooltip>
                                    <template #trigger>
                                        <n-button class="w-full" size="large" @click="handleDirectMessage">
                                            Direkt senden
                                        </n-button>
                                    </template>
                                    Die Nachricht wird direkt per Instant Messenger zugestellt.
                                </n-tooltip>
                            </n-form-item-gi>
                            <!-- ani-flyin class has to be on this level. I dont know why... -->
                            <n-form-item-gi class="ani-flyin" span="1"> 
                                <n-tooltip>
                                    <template #trigger>
                                        <n-button class="w-full" size="large" @click="handleSendMail">
                                            Email senden
                                        </n-button>
                                    </template>
                                    Nachricht über den eigenen Mail Client versenden.
                                </n-tooltip>
                            </n-form-item-gi>
                        </n-grid>
                    </n-form>
                </div>
            </div>
            <div class="fading-text res-mlr-5">
                <div>}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { FormInst, useNotification } from 'naive-ui'
import { useFirestore } from '../composables/use-firestore';
import { addDoc, collection } from '@firebase/firestore';
import { encode } from "../utils/html-encoder";
import { gsap } from "gsap";

const formRef = ref<FormInst | null>(null);

const formValue = ref({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const rules = {
    name: {
        required: true,
        message: 'Bitte geben sie ihren Namen an',
        trigger: ['input']
    },
    email: {
        required: true,
        message: 'Bitte geben sie ihre Email Adresse an',
        trigger: ['input']
    },
    subject: {
        key: "subject",
        required: true,
        message: 'Bitte geben sie einen Betreff an',
        trigger: ['input']
    },
    message: {
        key: "message",
        required: true,
        message: 'Bitte beschreiben sie ihr Anliegen',
        trigger: ['input']
    },
};

const db = useFirestore();

const notification = useNotification();

let timeout: number;

function handleDirectMessage(e: MouseEvent) {
    clearTimeout(timeout);

    e.preventDefault();
    formRef.value?.validate(
        (errors) => {
            if (!errors) {
                addDoc(collection(db, "messenges"), {
                    name: formValue.value.name,
                    email: formValue.value.email,
                    subject: formValue.value.subject,
                    message: formValue.value.message
                }).then(() => {
                    notification["success"]({
                        title: "Nachricht abgeschickt",
                        duration: 2500,
                        keepAliveOnHover: true
                    });
                }).catch((e) => {
                    console.error(e);
                    notification["error"]({
                        title: "Nachricht konnte nicht abgeschickt werden",
                        duration: 2500,
                        keepAliveOnHover: true
                    });
                });
            }
        }
    );

    timeout = setTimeout(() => formRef.value?.restoreValidation(), 5000);
}

function handleSendMail(e: MouseEvent) {

    clearTimeout(timeout);

    e.preventDefault();
    formRef.value?.validate(
        (errors) => {
            const mailTo = `mailto:contact@domonell.dev?subject=${formValue.value.subject}&body=${formValue.value.message}`;
            if (!errors) {
                console.log(window.open(mailTo));
            }
        },
        (rule) => rule?.key === "subject" || rule?.key === "message"
    )

    timeout = setTimeout(() => formRef.value?.restoreValidation(), 5000);
}

onMounted(() => {
    nextTick(() => {
        gsap.timeline()
            .from(".ani-contact > *", { scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.1, duration: 0.7 })
            .from(".ani-flyin", { y: 100, opacity: 0, stagger: 0.2 }, "-=1.3")
    });
})

</script>

<style scoped>

</style>
