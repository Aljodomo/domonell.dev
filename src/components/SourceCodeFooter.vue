<template>
    <div class="hidden sm:block absolute bottom-5 right-5">
        <NTooltip>
            <template #trigger>
                <NButton class="mr-2" text style="font-size: 24px" @click="openNewIssue">
                    <NIcon>
                        <BugIcon />
                    </NIcon>
                </NButton>
            </template>
            Problem gefunden? Öffne ein Ticket und hilf mir es zu beheben.
        </NTooltip>

        <NTooltip>
            <template #trigger>
                <NButton text style="font-size: 24px" @click="openSourceCode">
                    <NIcon>
                        <CodeIcon />
                    </NIcon>
                </NButton>
            </template>
            Interessiert am Quellcode dieser Seite? Dann schaue ihn dir hier an.
        </NTooltip>
    </div>
</template>

<script setup lang="ts">
import { CodeSlashOutline as CodeIcon } from '@vicons/ionicons5'
import { BugOutline as BugIcon } from '@vicons/ionicons5'
import { NIcon, NButton, NTooltip } from 'naive-ui';

const sourceCodeUrl = "https://github.com/Aljodomo/domonell.dev/";

function openSourceCode() {
    window.open(sourceCodeUrl, '_blank')?.focus();
}

function openNewIssue() {
    window.open(sourceCodeUrl + "issues/new", '_blank')?.focus();
}

</script>