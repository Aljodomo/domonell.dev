<template>
    <div class="absolute bottom-5 right-5">
        <n-tooltip>
            <template #trigger>
                <n-button class="mr-2" text style="font-size: 24px" @click="openNewIssue">
                    <n-icon>
                        <BugIcon />
                    </n-icon>
                </n-button>
            </template>
            Problem gefunden? Öffne ein Ticket und hilf mir es zu beheben.
        </n-tooltip>

        <n-tooltip>
            <template #trigger>
                <n-button text style="font-size: 24px" @click="openSourceCode">
                    <n-icon>
                        <CodeIcon />
                    </n-icon>
                </n-button>
            </template>
            Interessiert am Quellcode dieser Seite? Dann schaue ihn dir hier an.
        </n-tooltip>
    </div>
</template>

<script setup lang="ts">
import { CodeSlashOutline as CodeIcon } from '@vicons/ionicons5'
import { BugOutline as BugIcon } from '@vicons/ionicons5'

const sourceCodeUrl = "https://github.com/Aljodomo/domonell.dev/";

function openSourceCode() {
    window.open(sourceCodeUrl, '_blank')?.focus();
}

function openNewIssue() {
    window.open(sourceCodeUrl + "issues/new", '_blank')?.focus();
}

</script>