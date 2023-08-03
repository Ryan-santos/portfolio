<template>
    <Vue3Lottie
        :animationLink="`/lottie/${props.name}.json`"
    />
</template>

<script setup lang="ts">
    const props = defineProps<{
        name: string
    }>();
</script>