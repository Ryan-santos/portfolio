<template>
    <div>
        <span
            v-if="aboveTitle"
            class="font-black text-primary uppercase"
        >
            {{ aboveTitle }}
        </span>
        <h1 class="font-title text-[calc(1.7rem_+_1.5vw)] leading-tight font-black uppercase">
            {{ title }}
            <slot />
        </h1>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        aboveTitle?: string
        title?: string
    }>();
</script>