<!-- eslint-disable vue/no-v-html -->
<template>
    <span
        class="_SVG block"
        :class="{ '_SVG_CURRENTCOLOR': currentcolor }"
        v-html="icon"
    />
</template>

<script setup lang="ts">
    import { ref, watchEffect } from "vue";

    const props = withDefaults(defineProps<{
        name: string;
        currentcolor?: boolean
    }>(), {
        currentcolor: false
    });

    const icon = ref("");

    watchEffect(async () => {
        try {
            const iconsImport = import.meta.glob<false, string, string>("/assets/svg/**/**.svg", {
                query: "?raw",
                import: "default"
            });

            const rawIcon = await iconsImport[`/assets/svg/${props.name}.svg`]();
            icon.value = rawIcon;
        }
        catch {
            console.error(
                `[SVG] Svg '${props.name}' não existe em 'assets/svg'`
            );
        }
    });
</script>

<style>
    ._SVG svg {
        width: 100%;
        height: auto;
    }

    ._SVG._SVG_CURRENTCOLOR,
    ._SVG._SVG_CURRENTCOLOR * {
        fill: currentColor !important;
    }
</style>