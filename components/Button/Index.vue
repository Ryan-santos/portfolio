<template>
    <button
        class="
            after:clip_path
            before:clip_path

            group/button
            relative
            select-none
            text-lg
            font-semibold
            tracking-wide
            transition-all
            duration-300

            before:absolute
            before:inset-0
            before:transition-all
            before:duration-300

            after:absolute
            after:inset-0
            after:transition-all
            after:duration-300

            hover:scale-105
            hover:before:translate-x-1.5
            hover:before:translate-y-1.5

            activated:scale-100
            activated:cursor-not-allowed
            activated:hover:before:translate-x-0
            activated:hover:before:translate-y-0
        "
        :class="[_color, {'activated': activated, 'px-4 py-2': !noPadding}]"
    >
        <span class="relative z-10">
            <slot />
        </span>
    </button>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{
        color?: "primary" | "secondary" | "white" | "outline" | "custom"
        noPadding?: boolean
        activated?: boolean
    }>(), {
        color: "primary",
        noPadding: false,
        activated: false
    });

    const _color = computed(() => {
        return /* @tw */ {
            primary: [
                "text-white after:bg-primary before:bg-primary",
                "hover:text-background hover:after:bg-contrast",
                "activated:text-background activated:after:bg-contrast"
            ],
            secondary: [
                "text-contrast after:bg-background-100 before:bg-contrast",
                "hover:text-white hover:after:bg-primary",
                "activated:text-white activated:after:bg-primary"
            ],
            white: [
                "text-black after:bg-white before:bg-white",
                "hover:text-white hover:after:bg-black",
                "activated:text-white activated:after:bg-primary"
            ],
            outline: [
                "text-contrast after:bg-background before:bg-primary before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:-translate-x-px before:-translate-y-px",
                "hover:text-background hover:after:bg-contrast",
                "activated:text-background activated:after:bg-contrast"
            ],
            custom: ""
        }[props.color];
    });
</script>