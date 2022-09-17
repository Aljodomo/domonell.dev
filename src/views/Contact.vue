<template>
    <div class="h-full pl-5 p-5 font-['Arial']">
        <div class="h-full flex flex-col justify-between max-w-2xl">
            <div class="fading-text">
                <div class="ml-5">package main</div>
                <div class="ml-5">import "fmt"</div>
                <div class="ml-5">func  main(void){</div>
            </div>
            <div class="ml-10">
                <div>
                    <div class="fading-text">fmt.Println("</div>
                    <div class="ml-4">
                        <div class="hightlighted-big-letters">Kontakt</div>
                    </div>
                    <div class="fading-text">")</div>
                </div>
                <div>
                    <div class="fading-text">fmt.Println("</div>
                    <div class="ml-5 text-lg text-white">
                        <p>
                            Ich bin interessiert an Freiberuflicher Tätigkeit besonders in der Neuentwicklung.
                        </p>
                    </div>
                    <div class="fading-text">")</div>
                </div>
                <div>
                    <div class="fading-text mb-2">acceptInput(</div>
                    <n-form class="ml-5" ref="formRef" :model="formValue" :show-label="false" :rules="rules">
                        <n-grid span="2" :x-gap="10" :y-gap="0" :cols="2">
                            <n-form-item-gi required label="Name" span="1" path="name">
                                <n-input v-model:value="formValue.name" placeholder="Name" />
                            </n-form-item-gi>
                            <n-form-item-gi required span="1" path="email">
                                <n-input v-model:value="formValue.email" placeholder="Email" />
                            </n-form-item-gi>
                            <n-form-item-gi required span="2" path="subject">
                                <n-input v-model:value="formValue.subject" placeholder="Betreff" />
                            </n-form-item-gi>
                            <n-form-item-gi required span="2" path="message">
                                <n-input v-model:value="formValue.message" placeholder="Nachricht" type="textarea"
                                    :autosize="{
                                        minRows: 5
                                    }" />
                            </n-form-item-gi>
                            <n-form-item-gi span="1">
                                <n-tooltip>
                                    <template #trigger>
                                        <n-button class="w-full" size="large" @click="handleDirectMessage">
                                            Nachricht direkt senden
                                        </n-button>
                                    </template>
                                    Die Nachricht wird direkt per Instant Messenger zugestellt.
                                </n-tooltip>
                            </n-form-item-gi>
                            <n-form-item-gi span="1">
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
                    <div class="fading-text">)</div>
                </div>
            </div>
            <div class="fading-text">
                <div class="ml-5">}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FormInst } from 'naive-ui'
import { useFirestore } from '../composables/use-firestore';
import { addDoc, collection } from '@firebase/firestore';

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
                window.open(mailTo);
            }
        },
        (rule) => rule?.key === "subject" || rule?.key === "message"
    )

    timeout = setTimeout(() => formRef.value?.restoreValidation(), 5000);
}

</script>

<style scoped>

</style>
