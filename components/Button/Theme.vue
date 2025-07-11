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
            <label for="check_tema_modo" class="clip-path-1 relative z-0 block size-auto cursor-pointer bg-background-100 text-contrast/30">
                <span class="absolute inset-0 block h-full w-1/2 transition-all duration-200 ease-linear" :class="{ 'translate-x-full': $colorMode.value == 'dark' }">
                    <span class="clip-path-1 block size-full bg-primary" />
                </span>
                <div class="flex items-center justify-between text-lg">
                    <Icon
                        name="tabler:sun-filled"
                        class="m-1 transition-all duration-200 ease-linear"
                        size="1rem"
                        :class="{ 'relative text-light': $colorMode.value === 'light' }"
                    />
                    <Icon
                        name="akar-icons:moon-fill"
                        class="m-1 transition-all duration-200 ease-linear"
                        size="1rem"
                        :class="{ 'relative text-light': $colorMode.value === 'dark' }"
                    />
                </div>
            </label>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
    const ColorModePreference = (event: Event) => {
        (event.target as HTMLInputElement).checked ? useColorMode().preference = "dark" : useColorMode().preference = "light";
    };
</script>