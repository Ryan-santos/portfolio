<template>
    <div class="flex flex-row items-center gap-6">
        <a
            v-for="value, key in socialMedia"
            :key="key"
            :href="value.link"
            target="_blank"
        >
            <Button
                class="
                    p-2
                    before:!clip-path-2
                    after:!clip-path-2
                "
                noPadding
            >
                <Icon
                    :name="value.icon"
                    size="1.5rem"
                />
            </Button>
        </a>
    </div>
</template>

<script setup lang="ts">
    class SocialMedia {
        constructor (
            public name: string,
            public link: string,
            public icon: string
        ) {}
    }

    const socialMedia: SocialMedia[] = [
        new SocialMedia(
            "linkedin",
            "https://www.linkedin.com/in/ryan-santos-felix/",
            "bi:linkedin"
        ),
        new SocialMedia(
            "github",
            "https://github.com/Ryan-santos",
            "bi:github"
        ),
        new SocialMedia(
            "instagram",
            "https://www.instagram.com/ryan.santos.felix",
            "bi:instagram"
        )
    ];
</script>