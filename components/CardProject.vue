<template>
    <Button
        color="secondary"
        class="relative flex flex-col items-center !p-0 before:clip-path-8 after:clip-path-8"
        anime
    >
        <div class="p-4">
            <img src="/images/projects/super-controller.jpg" alt="" class="clip-path-8">
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
</template>