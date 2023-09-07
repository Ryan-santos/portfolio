<template>
    <main>
        <NavBar />

        <NuxtPage />

        <footer>
            <article class="container pb-6">
                <hr class="my-8">
                <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <VSvg name="logo" />
                    <p>
                        Copyright © {{ new Date().getFullYear() }}. Todos os direitos reservados.
                    </p>
                    <SocialMedia />
                </div>
            </article>
        </footer>
    </main>
</template>

<script setup lang="ts">
    const elementsAnime = {
        elements: undefined as undefined | NodeListOf<HTMLDivElement>,
        idChild: "child_anime",
        windowTop: 0,

        active () {
            this.elements = document.querySelectorAll<HTMLDivElement>("[containerAnime]");
        },

        scroll () {
            const windowTop = window.scrollY + ((window.innerHeight * 4) / 6);

            this.elements!.forEach((element) => {
                if (windowTop! > element.offsetTop) {
                    const childS = element.querySelectorAll("[anime]");
                    let promise = Promise.resolve();

                    childS.forEach((child) => {
                        promise = promise.then(() => {
                            child.classList.add("_ANIME");

                            return new Promise((resolve) => {
                                setTimeout(resolve, 200);
                            });
                        });
                    });
                }
            });
        }
    };

    onMounted(() => {
        elementsAnime.active();
        elementsAnime.scroll();
        window.addEventListener("scroll", () => elementsAnime.scroll());
    });
</script>

<style lang="postcss">
    [containerAnime] [anime] {
        @apply translate-y-12 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.250,0.460,0.450,0.940)]
    }

    [containerAnime] [anime]._ANIME {
        @apply transform-none opacity-100
    }
</style>