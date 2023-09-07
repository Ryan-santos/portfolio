<template>
    <div class="overflow-hidden">
        <section id="inicio" class="relative flex h-full min-h-screen flex-row items-center" containerAnime>
            <div class="absolute inset-0 -z-10">
                <div class="absolute left-0 top-0 h-[10vw] w-[10vw] bg-primary" anime />
                <div class="absolute bottom-0 right-0 h-[10vw] w-[10vw] bg-primary" anime />
                <div class="absolute inset-0 z-10 h-[200%] backdrop-blur-[300px]" />
            </div>
            <article class="container relative flex h-full flex-row items-center justify-center gap-12 pt-12 text-center">
                <div class="max-w-screen-md">
                    <VSvg name="keys" class="mask-transparent mx-auto w-full max-w-[10rem] [--percentage:10%]" anime />
                    <SuperTitle class="mb-8" anime>
                        <Typing text="Desenvolvendo um novo f.u.t.u.r.o." />
                    </SuperTitle>
                    <p class="mb-8" anime>
                        Estou aqui para ajudar você a criar produtos digitais incríveis. Vamos trabalhar juntos e construir algo verdadeiramente extraordinário! 😊
                    </p>
                    <div class="grid auto-cols-auto grid-flow-col justify-center gap-8" anime>
                        <Button href="#quem-sou">
                            Quem sou
                        </Button>
                        <Button :href="linkContato" color="outline">
                            Entrar em contato
                        </Button>
                    </div>
                </div>
            </article>
        </section>

        <section id="quem-sou" class="relative" containerAnime>
            <div class="container">
                <VSvg name="squares" class="absolute bottom-0 left-0 max-w-screen-sm" filled anime />
                <article class="clip_path relative z-10 mx-auto flex h-full max-w-screen-xs flex-col items-center justify-center gap-12 bg-background-100 p-6 [--clip:2rem] lg:max-w-screen-lg lg:flex-row" anime>
                    <div class="clip_path w-full max-w-screen-xs [--clip:2rem]">
                        <img src="/images/presentation.png" alt="Ryan" anime>
                    </div>
                    <div class="w-full text-center lg:text-left">
                        <SuperTitle
                            aboveTitle="Óla, sou"
                            title="Ryan santos"
                            class="mb-6"
                            anime
                        />
                        <h3 class="mb-6" anime>
                            Desenvolvedor Front-end
                        </h3>
                        <p class="mb-8" anime>
                            Sou apaixonado em criar aplicações web atraentes e fáceis de usar. Sou criativo e sempre estou procurando novas maneiras de melhorar minhas habilidades. Adoro aprender coisas novas e estou sempre disposto a enfrentar desafios.
                        </p>
                        <SocialMedia anime class="justify-center lg:justify-start" />
                    </div>
                </article>
            </div>
        </section>

        <section id="conhecimentos" class="container py-24" containerAnime>
            <article>
                <SuperTitle
                    aboveTitle="Conhecimentos"
                    title="Explorando meus conhecimentos"
                    class="mx-auto mb-6 max-w-screen-md text-center"
                    anime
                />
                <p class="mb-12 text-center" anime>
                    <Icon name="fluent:cursor-click-20-filled" size="1.5rem" />
                    Clique no card para ver mais informação
                </p>
                <div class="flex flex-col gap-12 lg:flex-row">
                    <Transition
                        enterFromClass="grid grid-cols-[0fr] grid-rows-[0fr] opacity-0"
                        enterToClass="grid grid-cols-[1fr] grid-rows-[1fr] opacity-100"
                        leaveFromClass="grid grid-cols-[1fr] grid-rows-[1fr] opacity-100"
                        leaveToClass="grid grid-cols-[0fr] grid-rows-[0fr] opacity-0"
                    >
                        <div v-show="knowledge.open" ref="knowledgeInfo" class="transition-all duration-500">
                            <div class="clip_path w-full justify-items-start overflow-hidden bg-background-100 p-4 text-center [--clip:1.5rem] sm:p-8 lg:max-w-screen-sm lg:text-left">
                                <div class="mb-8 flex flex-row items-center justify-center gap-6 lg:justify-start">
                                    <Icon :name="knowledge.items[knowledge.activated!]?.icon" size="4rem" />
                                    <h1 class="font-title uppercase">
                                        {{ knowledge.items[knowledge.activated!]?.name }}
                                    </h1>
                                </div>
                                <div class="mb-8 flex flex-row items-center gap-6">
                                    <hr class="w-full lg:hidden">
                                    <h5 class="whitespace-nowrap font-bold uppercase">
                                        O que é?
                                    </h5>
                                    <hr class="w-full">
                                </div>
                                <p class="mb-8">
                                    {{ knowledge.items[knowledge.activated!]?.description }}
                                    <br><br>
                                    <a :href="knowledge.items[knowledge.activated!]?.link" target="_blank" class="link">
                                        <Icon name="fa6-solid:arrow-up-right-from-square" size="0.7rem" class="mr-1" /> Saiba mais
                                    </a>
                                </p>
                                <div class="mb-8 flex flex-row items-center gap-6">
                                    <hr class="w-full lg:hidden">
                                    <h5 class="whitespace-nowrap font-bold uppercase">
                                        Grau de conhecimento
                                    </h5>
                                    <hr class="w-full">
                                </div>
                                <div class="mb-8 grid grid-flow-col">
                                    <div
                                        v-for="i in 5"
                                        :key="i"
                                        class="clip_path h-4"
                                        :class="[
                                            knowledge.items[knowledge.activated!]?.competence >= i ? 'bg-primary' : 'bg-primary/20',
                                            {'[--clip-left:0]': i === 1, '[--clip-right:100%]': i === 5}
                                        ]"
                                    />
                                </div>
                                <Button @click="knowledge.activate(false)">
                                    <Icon name="line-md:close" />
                                    Fechar
                                </Button>
                            </div>
                        </div>
                    </Transition>
                    <div class="grid h-fit w-full gap-12 xs:grid-cols-2 md:grid-cols-3" :class="knowledge.open ? 'lg:grid-cols-3 2xl:grid-cols-4' : 'lg:grid-cols-4 2xl:grid-cols-5'">
                        <div
                            v-for="value, key in knowledge.items"
                            :key="key"
                            anime
                        >
                            <Button
                                color="outline"
                                class="w-full before:[--clip:1.5rem] after:[--clip:1.5rem]"
                                noPadding
                                :activated="knowledge.activated === key && knowledge.open"
                                @click="knowledge.activate(key)"
                            >
                                <div class="relative flex flex-col items-center p-6">
                                    <Icon v-if="value.love" name="ph:heart-fill" class="absolute right-2 top-2 text-red-600" />
                                    <Icon :name="value.icon" size="5rem" class="mb-6 transition-all duration-300" :class="{'grayscale group-hover/button:grayscale-0 group-[.activated]/button:grayscale-0': knowledge.open}" />
                                    {{ value.name }}
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <section id="projetos" class="container" containerAnime>
            <article>
                <SuperTitle
                    aboveTitle="Projetos"
                    title="Demonstrando Minhas Habilidades"
                    class="mx-auto mb-12 max-w-screen-md text-center"
                    anime
                />
                <div v-if="false" class="grid h-fit w-full grid-cols-3 gap-12">
                    <Button
                        v-for="value, key in 3"
                        :key="key"
                        color="secondary"
                        class="relative flex flex-col items-center !p-0 before:[--clip:2rem] after:[--clip:2rem]"
                        anime
                    >
                        <div class="p-4">
                            <img src="/images/projects/super-controller.jpg" alt="" class="clip_path [--clip:2rem]">
                        </div>
                        <div class="p-4">
                            <span class="text-sm opacity-50">
                                nome
                            </span>
                            <h3 class="mb-6 capitalize">
                                Super Controller
                            </h3>
                            <span class="text-sm opacity-50">
                                tecnologias
                            </span>
                            <div class="flex flex-row justify-center gap-4">
                                <Icon name="vscode-icons:file-type-vue" size="2rem" />
                                <Icon name="vscode-icons:file-type-nuxt" size="2rem" />
                                <Icon name="vscode-icons:file-type-typescript-official" size="2rem" />
                                <Icon name="devicon:tailwindcss" size="2rem" />
                            </div>
                        </div>
                    </Button>
                </div>
                <div v-else class="clip_path mx-auto w-full max-w-screen-xs bg-background-100 text-center [--clip:2rem]" anime>
                    <h4 class="p-8">
                        Estou finalizando os preparativos para a demonstração final de meus projetos.
                    </h4>
                    <Lottie name="organizing" class="!-mt-48 w-full" />
                    <h4 class="p-8">
                        Estou animado para compartilhá-los com o mundo :)
                    </h4>
                </div>
            </article>
        </section>

        <div class="container py-12" containerAnime>
            <div class="clip_path bg-primary p-4 py-12 text-center text-white [--clip:2rem] md:px-12" anime>
                <SuperTitle class="mb-12" anime>
                    Eai? Vamos tirar esse projeto do papel?
                </SuperTitle>
                <Button :href="linkContato" color="white" anime>
                    Entrar em contato
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const linkContato = "mailto:ryandossantosfelix22@gmail.com";

    class KnowledgeItem {
        // eslint-disable-next-line no-useless-constructor
        constructor (
            public name: string,
            public competence: 1 | 2 | 3 | 4 | 5,
            public description: string,
            public link: string,
            public icon: string,
            public love?: boolean
        ) {}
    }

    const knowledgeInfo = ref<HTMLDivElement>();
    const knowledge = ref({
        open: false,
        activated: 0,
        items: [
            new KnowledgeItem(
                "HTML",
                4,
                "HTML (Hypertext Markup Language) é uma linguagem de marcação utilizada para estruturar e exibir conteúdo na web. É composta por tags que definem elementos como cabeçalhos, parágrafos, links, imagens e tabelas, permitindo a criação de páginas web interativas e acessíveis.",
                "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                "vscode-icons:file-type-html"
            ),
            new KnowledgeItem(
                "CSS",
                4,
                "CSS (Cascading Style Sheets) é uma linguagem de estilização utilizada para controlar a aparência e o layout dos elementos em uma página web. Com o CSS, é possível definir cores, fontes, tamanhos, espaçamentos, posicionamentos e efeitos visuais, tornando a apresentação visualmente atraente e consistente em diferentes dispositivos e navegadores. Ele trabalha em conjunto com o HTML para separar a estrutura e o estilo do conteúdo.",
                "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                "vscode-icons:file-type-css"
            ),
            new KnowledgeItem(
                "JavaScript",
                4,
                "JavaScript é uma linguagem de programação versátil e poderosa que permite a criação de conteúdo dinâmico e interativo em páginas web. Com ele, é possível adicionar comportamentos, manipular elementos da página, realizar validações e interagir com o usuário, tornando a experiência do usuário mais rica e dinâmica.",
                "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                "vscode-icons:file-type-js-official"
            ),
            new KnowledgeItem(
                "Node.js",
                2,
                "Node.js é um ambiente de execução JavaScript no lado do servidor, permitindo a construção de aplicativos web escaláveis e em tempo real.",
                "https://nodejs.org",
                "devicon:nodejs"
            ),
            new KnowledgeItem(
                "TypeScript",
                3,
                "TypeScript é uma linguagem de programação que adiciona recursos de tipagem estática opcional ao JavaScript, proporcionando maior segurança e escalabilidade ao desenvolvimento de aplicativos web.",
                "https://www.typescriptlang.org",
                "vscode-icons:file-type-typescript-official"
            ),
            new KnowledgeItem(
                "Vue.js",
                3,
                "Vue.js é um framework JavaScript de código aberto para criar interfaces de usuário reativas. É altamente personalizável e escalável, e pode ser usado para criar uma ampla variedade de aplicativos da web, desde sites simples até aplicativos de página única complexos.",
                "https://vuejs.org",
                "vscode-icons:file-type-vue",
                true
            ),
            new KnowledgeItem(
                "Nuxt",
                3,
                "Nuxt.js é um poderoso framework para construir sites renderizados no servidor (SSR) e estáticos usando Vue.js. Ele oferece uma experiência de desenvolvimento simplificada e ajuda os desenvolvedores a criar aplicações web escaláveis, eficientes e de alto desempenho.",
                "https://nuxt.com",
                "vscode-icons:file-type-nuxt",
                true
            ),
            new KnowledgeItem(
                "tailwindCss",
                3,
                "Tailwind CSS é um framework de desenvolvimento front-end de código aberto que oferece uma abordagem única para a criação de interfaces de usuário modernas e responsivas. Diferente de muitos outros frameworks, que se concentram em componentes pré-estilizados, o Tailwind CSS se baseia em uma filosofia de utilitários de classes altamente configuráveis.",
                "https://tailwindcss.com",
                "devicon:tailwindcss",
                true
            ),
            new KnowledgeItem(
                "PHP",
                2,
                "PHP é uma linguagem de programação interpretada, livre e de código aberto amplamente usada para desenvolvimento web. É uma linguagem de script do lado do servidor, o que significa que é executado no servidor web e não no navegador do usuário. Isso permite que o PHP interaja com o banco de dados e outros recursos do servidor, e gere uma saída personalizada para o usuário.",
                "https://www.php.net",
                "vscode-icons:file-type-php2"
            ),
            new KnowledgeItem(
                "Laravel",
                1,
                "Laravel é um popular framework de desenvolvimento web, conhecido por sua facilidade de uso e recursos poderosos. Ele é uma ferramenta que ajuda os desenvolvedores a construir aplicativos e sites modernos de forma eficiente. Com o Laravel, é possível criar aplicações web robustas e dinâmicas, mesmo para aqueles que não têm muita experiência técnica.",
                "https://laravel.com",
                "devicon:laravel"
            ),
            new KnowledgeItem(
                "Bootstrap",
                4,
                "Bootstrap é um framework de código aberto amplamente utilizado para criar sites e aplicativos web visualmente atraentes e responsivos. Ele oferece uma série de componentes pré-projetados, como botões, menus, formulários e carrosséis, que permitem aos desenvolvedores construir interfaces de usuário de forma rápida e fácil, sem a necessidade de começar do zero.",
                "https://getbootstrap.com",
                "devicon:bootstrap"
            ),
            new KnowledgeItem(
                "Git",
                2,
                "Git é um sistema de controle de versão amplamente utilizado na programação. Ele permite que desenvolvedores acompanhem e gerenciem as mudanças em seus projetos de forma eficiente.",
                "https://git-scm.com",
                "devicon:git"
            ),
            new KnowledgeItem(
                "Figma",
                2,
                "Figma é uma poderosa ferramenta de design gráfico e prototipagem colaborativa baseada em nuvem. Permite que designers e equipes criem, compartilhem e colaborem em projetos de design de interfaces de usuário (UI) e experiência do usuário (UX).",
                "https://www.figma.com",
                "devicon:figma"
            )
        ],

        activate (item: number | boolean) {
            if (typeof item === "boolean") {
                this.open = item;
            }
            else {
                this.open = true;
                this.activated = item;
            }

            if (this.open) {
                knowledgeInfo.value?.scrollIntoView();
            }
        }
    });
</script>

<style scoped lang="postcss">
    section {
        @apply min-h-screen py-16 flex flex-col justify-center
    }
</style>