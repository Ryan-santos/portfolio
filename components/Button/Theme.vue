<template>
    <ClientOnly fallback="...">
        <div class="w-fit">
            <input
                id="check_tema_modo"
                type="checkbox"
                class="hidden opacity-0"
                :checked="$colorMode.value === 'dark'"
                @change="ColorModePreference($event)"
            >
            <label for="check_tema_modo" class="clip_path relative z-0 block h-auto w-auto cursor-pointer bg-background-100 text-contrast text-opacity-30 [--clip:0.5rem] dark:text-opacity-30">
                <span class="absolute inset-0 block h-full w-1/2 transition-all duration-200 ease-linear" :class="{'translate-x-full': $colorMode.value == 'dark'}">
                    <span class="clip_path block h-full w-full bg-primary [--clip:0.5rem]" />
                </span>
                <div class="flex items-center justify-between text-lg">
                    <Icon name="tabler:sun-filled" class="p-1 transition-all duration-200 ease-linear" size="1.5rem" :class="{'relative text-white': $colorMode.value === 'light'}" />
                    <Icon name="akar-icons:moon-fill" class="p-1 transition-all duration-200 ease-linear" size="1.5rem" :class="{'relative text-white': $colorMode.value === 'dark'}" />
                </div>
            </label>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
    const ColorModePreference = (event:Event) => {
        (event.target as HTMLInputElement).checked ? useColorMode().preference = "dark" : useColorMode().preference = "light";
    };
</script>