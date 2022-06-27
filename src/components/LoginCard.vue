<template>
    <n-card class="w-fit rounded-2xl">
        <n-space vertical>
            <div class="flex items-center">
                <n-icon size="18" color="gray" :component="ApertureOutline" />
                <div class="text-md ml-1">Domonell.dev</div>
            </div>
            <n-text class="font-bold text-lg">{{ $t("login") }}</n-text>
            <n-input
                v-model:value="username"
                type="text"
                :placeholder="$t('username')"
                :status="validationStatus"
                @keyup.enter="login"
            />
            <n-input
                v-model:value="password"
                type="password"
                show-password-on="mousedown"
                :placeholder="$t('password')"
                :maxlength="20"
                :status="validationStatus"
                @keyup.enter="login"
            />
            <n-button class="bg-blue-500 w-full" type="info" @click="login">{{ $t("sign-in") }}</n-button>
        </n-space>
        <template v-if="errorText" #action>
            {{ errorText }}
        </template>
    </n-card>
</template>

<script setup lang="ts">
import {useFirebaseSignIn} from "../composables/use-firebase-signIn";
import {useRouter} from "vue-router";

let username = $ref("");
let password = $ref("");
let validationStatus = $ref("");
let errorText = $ref("");

const router = useRouter();

function login() {
    validationStatus = "";

    useFirebaseSignIn(username, password)
        .then(() => {
            router.push("/");
        })
        .catch((error) => {
            console.log(error)
            errorText = error.message;
            validationStatus = "error";
        });
}

import {ApertureOutline} from "@vicons/ionicons5";

</script>

<style scoped>

</style>
