<template>
    <nav
        class="fixed z-50 w-full overflow-hidden border-b transition-all duration-300"
        :class="navbar.transparent || navbar.open ? 'bg-background/90 backdrop-blur-lg shadow-xl border-contrast/10' : 'border-transparent'"
        containerAnime
    >
        <div class="container" anime>
            <div class="flex flex-col items-center justify-center border-b py-3 lg:flex-row" :class="!navbar.transparent ? 'border-contrast/10' : 'border-transparent'">
                <div class="flex w-full flex-row items-center justify-between lg:w-fit">
                    <a
                        href="#"
                        class="group w-40"
                        anime
                        @mouseenter="logo.toggleDirection()"
                        @mouseleave="logo.toggleDirection()"
                    >
                        <ClientOnly>
                            <Vue3Lottie
                                ref="lottieLogo"
                                animationLink="/lottie/logo.json"
                                :loop="false"
                                class="logo"
                            />
                        </ClientOnly>
                    </a>
                    <button class="relative size-10 lg:hidden" :class="{ 'text-red-600': navbar.open }" @click="navbar.toggle()">
                        <div class="absolute left-1/2 top-1/2 block w-6 -translate-x-1/2 -translate-y-1/2">
                            <span
                                aria-hidden="true"
                                class="absolute block h-0.5 w-6 bg-current transition duration-300 ease-in-out"
                                :class="navbar.open ? 'rotate-45': '-translate-y-2'"
                            />
                            <span
                                aria-hidden="true"
                                class="absolute block h-0.5 w-6 bg-current transition duration-300 ease-in-out"
                                :class="{ 'opacity-0': navbar.open } "
                            />
                            <span
                                aria-hidden="true"
                                class="absolute block h-0.5 w-6 bg-current transition duration-300 ease-in-out"
                                :class="navbar.open ? '-rotate-45': 'translate-y-2'"
                            />
                        </div>
                    </button>
                </div>
                <div
                    class="flex h-0 w-full flex-col items-center overflow-hidden transition-all duration-500 lg:h-auto lg:flex-row lg:overflow-visible"
                    :class="{ 'h-[calc(100dvh-4.125rem)] sm:h-32': navbar.open }"
                >
                    <hr class="mt-6 w-full sm:hidden">
                    <ul class="my-auto flex flex-col gap-6 sm:flex-row lg:ml-auto">
                        <li v-for="value, key in navbar.links" :key="key" anime>
                            <a :href="`/#${useKebabCase(value)}`" class="group font-medium transition-all duration-300 hover:text-primary" @click="navbar.toggle()">
                                <span class="font-bold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100"> { </span>
                                {{ useCapitalize(value) }}
                                <span class="font-bold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100"> } </span>
                            </a>
                        </li>
                    </ul>
                    <hr class="mb-6 w-full sm:hidden">
                    <div class="lg:ml-auto" anime>
                        <ButtonTheme />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    const lottieLogo = ref();

    const logo = ref({
        direction: "forward",

        play () {
            lottieLogo.value.play();
        },

        pause () {
            lottieLogo.value.pause();
        },

        toggleDirection () {
            if (this.direction === "forward") {
                this.pause();
                lottieLogo.value.setDirection("reverse");
                this.play();
                this.direction = "reverse";
            }
            else {
                this.pause();
                lottieLogo.value.setDirection("forward");
                this.play();
                this.direction = "forward";
            }
        }
    });

    const navbar = ref({
        open: false,
        transparent: false,
        links: [
            "Inicio",
            "Quem sou",
            "conhecimentos",
            "Projetos"
        ],

        toggle () {
            this.open = !this.open;

            const _class = "max-sm:overflow-hidden";
            this.open ? document.body.classList.add(_class) : document.body.classList.remove(_class);
        }
    });

    onMounted(() => {
        window.addEventListener("scroll", useDebounce(() => {
            if (!navbar.value.open) {
                navbar.value.transparent = window.scrollY > 0;
            }
        }, 100));

        setTimeout(() => {
            logo.value.toggleDirection();
        }, 5000);
    });
</script>

<style>
    .logo path[fill="rgb(255,255,255)"] {
        fill: currentColor;
    }
</style>