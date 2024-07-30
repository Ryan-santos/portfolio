import { withNuxt } from "./.nuxt/eslint.config.mjs";
import tailwind from "eslint-plugin-tailwindcss";

export default withNuxt(
    ...tailwind.configs["flat/recommended"]
)
    .override("nuxt/rules", {
        rules: {
            camelcase: [
                "warn",
                {
                    properties: "never",
                    ignoreDestructuring: true
                }
            ],
            eqeqeq: [
                "error",
                "always"
            ],
            curly: "error",
            "no-console": [
                "warn",
                {
                    allow: [
                        "warn",
                        "error"
                    ]
                }
            ],
            "import/order": [
                "warn",
                {
                    groups: [
                        "type",
                        "index",
                        "sibling",
                        "parent",
                        "internal",
                        "external",
                        "builtin",
                        "object"
                    ]
                }
            ]
        }
    })
    .override("nuxt/stylistic", {
        rules: {
            "@stylistic/indent": [
                "error",
                4,
                {
                    SwitchCase: 1
                }
            ],
            "@stylistic/quotes": [
                "error",
                "double"
            ],
            "@stylistic/semi": [
                "error",
                "always"
            ],
            "@stylistic/comma-dangle": [
                "error",
                "never"
            ],
            "@stylistic/eol-last": [
                "error",
                "never"
            ],
            "@stylistic/brace-style": [
                "error",
                "stroustrup"
            ],
            "@stylistic/space-before-function-paren": [
                "error",
                "always"
            ],
            "@stylistic/quote-props": [
                "error",
                "as-needed"
            ],
            "@stylistic/type-generic-spacing": "off"
        }
    })
    .override("nuxt/typescript/rules", {
        rules: {
            "@typescript-eslint/ban-types": [
                "error",
                {
                    types: {
                        "{}": false
                    }
                }
            ]
        }
    })
    .override("nuxt/vue/rules", {
        rules: {
            "@stylistic/ts/indent": "off",
            "vue/html-indent": [
                "error",
                4,
                {
                    baseIndent: 1
                }
            ],
            "vue/script-indent": [
                "error",
                4,
                {
                    baseIndent: 1,
                    switchCase: 1
                }
            ],
            "vue/multi-word-component-names": "off",
            "vue/no-lone-template": [
                "error",
                {
                    ignoreAccessible: true
                }
            ],
            "vue/attribute-hyphenation": ["error", "never"],
            "vue/v-on-event-hyphenation": [
                "error",
                "never",
                {
                    autofix: true
                }
            ],
            "vue/block-order": [
                "error",
                {
                    order: [
                        "template",
                        "script",
                        "style"
                    ]
                }
            ],
            "vue/comma-dangle": [
                "error",
                "never"
            ],
            "vue/max-attributes-per-line": ["error", {
                singleline: {
                    max: 3
                },
                multiline: {
                    max: 1
                }
            }]
        }
    })
    .override("tailwindcss:rules", {
        rules: {
            "tailwindcss/no-custom-classname": "off"
        }
    })
    .append({
        name: "force",
        files: ["**/*.vue"],
        rules: {
            "@stylistic/indent": "off"
        }
    });