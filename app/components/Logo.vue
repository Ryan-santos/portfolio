<template>
    <span
        class="flex-row items-center gap-1 font-title text-3xl leading-none uppercase select-none"
        @mouseenter="width = overflow?.scrollWidth ?? 0"
        @mouseleave="width = 0"
    >
        <span class="text-primary">
            {
        </span>
        <span>
            R
            <span
                ref="overflow"
                class="-mr-2 overflow-hidden pr-2 transition-[width_opacity] duration-500"
                :class="{ 'opacity-0': !width }"
                :style="`width: ${width}px;`"
            >
                YAN
            </span>
        </span>
        <span class="text-primary">
            }
        </span>
    </span>
</template>

<script setup lang="ts">
    const overflow = useTemplateRef("overflow");

    const width = ref(0);
</script>

<style scoped>
    span {
        display: inline-flex;
    }
</style>