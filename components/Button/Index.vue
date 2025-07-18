<template>
    <component
        :is="href ? NuxtLink : 'button'"
        :href="href"
        class="
            group/button relative inline-block text-lg font-semibold tracking-wide transition-all
            duration-300 select-none
            before:absolute before:inset-0 before:transition-all before:duration-300
            before:clip-path-4
            after:absolute after:inset-0 after:transition-all after:duration-300 after:clip-path-4
            hover:scale-105 hover:before:translate-x-1.5 hover:before:translate-y-1.5
            activated:scale-100 activated:cursor-not-allowed activated:hover:before:translate-x-0
        "
        :class="[
            _color,
            {
                'activated': activated,
                'px-4 py-2': !noPadding
            }
        ]"
    >
        <span class="relative z-10 flex flex-row items-center gap-1">
            <slot />
        </span>
    </component>
</template>

<script setup lang="ts">
    import { NuxtLink } from "#components";

    const props = withDefaults(defineProps<{
        color?: "primary" | "secondary" | "white" | "outline" | "custom"
        noPadding?: boolean
        activated?: boolean
        href?: string
    }>(), {
        color: "primary",
        noPadding: false,
        activated: false,
        href: ""
    });

    const _color = computed(() => {
        return /* @tw */ {
            primary: [
                "text-light after:bg-primary before:bg-primary",
                "hover:text-background hover:after:bg-contrast",
                "activated:text-background activated:after:bg-contrast"
            ],
            secondary: [
                "text-contrast after:bg-background-100 before:bg-contrast",
                "hover:text-light hover:after:bg-primary",
                "activated:text-light activated:after:bg-primary"
            ],
            white: [
                "text-black after:bg-light before:bg-light",
                "hover:text-light hover:after:bg-black",
                "activated:text-light activated:after:bg-primary"
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