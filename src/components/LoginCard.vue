<template>
    <n-card title="Login" class="w-fit" hoverable>
        <n-space vertical>
            <n-input
                v-model:value="username"
                type="text"
                placeholder="Email"
                :status="validationStatus"
                @keyup.enter="login"
            />
            <n-input
                v-model:value="password"
                type="password"
                show-password-on="mousedown"
                placeholder="Password"
                :maxlength="20"
                :status="validationStatus"
                @keyup.enter="login"
            />
        </n-space>
        <template v-if="errorText" #action>
            {{ errorText }}
        </template>
    </n-card>
</template>

<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

let username = $ref("");
let password = $ref("");
let validationStatus = $ref("");
let errorText = $ref("");

function login() {
    validationStatus = "";
    const auth = getAuth();
    const email = username + "@domonell.dev";
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            errorText = "Login successful"
        })
        .catch((error) => {
            console.log(error)
            errorText = error.message;
            validationStatus = "error";
        });
}

</script>

<style scoped>

</style>
