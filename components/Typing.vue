<template>
    <TransitionGroup
        enterFromClass="opacity-0 translate-x-5 left-2"
        enterToClass="opacity-100"
    >
        <template v-for="value, key in _text" :key="key">
            <span v-if="value !== '.'" class="relative left-0 transition-all duration-300" :class="{ 'text-primary': _text[key+1] === '.' }">
                {{ value }}
            </span>
        </template>
        <span :key="99" class="pointer relative ml-2 border-r-4 border-primary" />
    </TransitionGroup>
</template>

<script setup lang="ts">
    const props = defineProps<{
        text: string
    }>();

    const _text = ref("");

    onMounted(() => {
        props.text.split("").forEach((el, i) => {
            setTimeout(() => {
                _text.value += el;
            }, 100 * i);
        });
    });
</script>

<style scoped>
    .pointer {
        animation: pointer 1s linear infinite;
    }

    @keyframes pointer {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
</style>