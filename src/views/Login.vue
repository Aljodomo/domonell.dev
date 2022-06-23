<template>
    <div class="flex-center bg-gray-600">
        <login-card id="lc"></login-card>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import {onMounted} from "vue";

onMounted(() => {
    gsap.fromTo(
        "#lc",
        {
            opacity: 0,
            x: "-100%",
        },
        {
            duration: 1.0,
            opacity: 1,
            x: 0,
            ease: "power3.inOut",
            delay: 0.5,
        }
    );
});
</script>

<style scoped>

</style>
