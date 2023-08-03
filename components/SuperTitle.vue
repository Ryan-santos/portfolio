<template>
    <div>
        <span v-if="aboveTitle" class="font-black uppercase text-primary">
            {{ aboveTitle }}
        </span>
        <h1 class="font-title text-[calc(2rem_+_1vw)] font-black uppercase leading-tight">
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