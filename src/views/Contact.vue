<template>
    <div class="h-full pl-5 p-5 font-['Arial']">
        <div class="h-full flex flex-col justify-between max-w-2xl">
            <div class="fading-text sm:ml-5">
                <div class="hidden sm:block">package main</div>
                <div class="hidden sm:block">import "fmt"</div>
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
                        Ich bin interessiert an freiberuflicher Tätigkeit, besonders in der Neuentwicklung.
                    </div>
                    <div class="fading-text">")</div>
                </div>
                <div class="mt-5">
                    <NForm class="res-mlr-5" ref="formRef" :model="formValue" :show-label="false" :rules="rules">
                        <NGrid span="2" :x-gap="10" :y-gap="0" cols="1 s:2 m:2 l:2 xl:2 2xl:2"  responsive="screen">
                            <NFormItemGi class="ani-flyin" required label="Name" span="1" path="name">
                                <NInput v-model:value="formValue.name" placeholder="Name" />
                            </NFormItemGi>
                            <NFormItemGi class="ani-flyin" required span="1" path="email">
                                <NInput v-model:value="formValue.email" placeholder="Email" />
                            </NFormItemGi>
                            <NFormItemGi class="ani-flyin" required span="2" path="subject">
                                <NInput v-model:value="formValue.subject" placeholder="Betreff" />
                            </NFormItemGi>
                            <NFormItemGi class="ani-flyin" required span="2" path="message">
                                <NInput v-model:value="formValue.message" placeholder="Nachricht" type="textarea"
                                    :autosize="{
                                        minRows: 5
                                    }" />
                            </NFormItemGi><!-- ani-flyin class has to be on this level. I dont know why... -->
                            <NFormItemGi class="ani-flyin" span="1">
                                <NTooltip>
                                    <template #trigger>
                                        <NButton class="w-full" :loading="loading" :disabled="disabled" size="large" @click="handleDirectMessage">
                                            Direkt senden
                                        </NButton>
                                    </template>
                                    Die Nachricht wird direkt per Instant Messenger zugestellt.
                                </NTooltip>
                            </NFormItemGi>
                            <!-- ani-flyin class has to be on this level. I dont know why... -->
                            <NFormItemGi class="ani-flyin" span="1"> 
                                <NTooltip>
                                    <template #trigger>
                                        <NButton class="w-full" size="large" @click="handleSendMail">
                                            Email senden
                                        </NButton>
                                    </template>
                                    Nachricht über den eigenen Mail Client versenden.
                                </NTooltip>
                            </NFormItemGi>
                        </NGrid>
                    </NForm>
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
import { FormInst, useNotification, NForm, NGrid, NFormItemGi, NTooltip, NButton, NInput } from 'naive-ui'
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

const notification = useNotification();

let timeout: number;

const loading = ref(false);
const disabled = ref(false);

async function handleDirectMessage(e: MouseEvent) {
    e.preventDefault();
    clearTimeout(timeout);
    loading.value = true;

    const {useFirestore} = await import("../composables/use-firestore");
    const firestore = useFirestore();

    formRef.value?.validate(
        (errors) => {
            if (!errors) {
                firestore.addMessage({
                    name: formValue.value.name,
                    email: formValue.value.email,
                    subject: formValue.value.subject,
                    message: formValue.value.message
                }).then(() => {
                    loading = false;
                    notification["success"]({
                        title: "Nachricht abgeschickt",
                        duration: 2500,
                        keepAliveOnHover: true
                    });
                }).catch((e) => {
                    loading.value = false;
                    disabled.value = true;
                    console.error(e);
                    notification["error"]({
                        title: "Nachricht konnte nicht abgeschickt werden",
                        duration: 2500,
                        keepAliveOnHover: true
                    });
                });
            } else {
                loading.value = false;
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
            .from(".ani-contact > *", { scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.1, duration: 0.7, delay: 0.3 })
            .from(".ani-flyin", { y: 100, opacity: 0, stagger: 0.2 }, "-=1.3")
    });
})

</script>

<style scoped>

</style>
