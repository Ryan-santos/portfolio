import { withNuxt } from "./.nuxt/eslint.config.mjs";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export default withNuxt()
    .override("nuxt/rules", {
        rules: {
            camelcase: [
                "warn",
                {
                    properties: "never",
                    ignoreDestructuring: true
                }
            ],
            eqeqeq: ["error", "always"],
            curly: "error",
            "no-console": [
                "warn",
                {
                    allow: ["warn", "error"]
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
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/eol-last": ["error", "never"],
            "@stylistic/brace-style": ["error", "stroustrup"],
            "@stylistic/space-before-function-paren": ["error", "always"],
            "@stylistic/quote-props": ["error", "as-needed"],
            "@stylistic/type-generic-spacing": "off",
            "@stylistic/object-curly-newline": [
                "error",
                {
                    ObjectExpression: {
                        multiline: true,
                        minProperties: 2,
                        consistent: true
                    },
                    ExportDeclaration: {
                        multiline: true,
                        minProperties: 1,
                        consistent: true
                    }
                }
            ],
            "@stylistic/object-property-newline": [
                "error",
                {
                    allowAllPropertiesOnSameLine: false
                }
            ],
            "@stylistic/array-bracket-newline": [
                "error",
                {
                    multiline: true,
                    minItems: 3
                }
            ],
            "@stylistic/array-element-newline": [
                "error",
                {
                    ArrayExpression: {
                        multiline: true,
                        minItems: 3
                    }
                }
            ],
            "@stylistic/array-bracket-spacing": ["error", "never"]
        }
    })
    .override("nuxt/vue/rules", {
        rules: {
            "vue/html-indent": [
                "error",
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: false
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
            "vue/comma-dangle": ["error", "never"],
            "vue/max-attributes-per-line": [
                "error",
                {
                    singleline: {
                        max: 1
                    },
                    multiline: {
                        max: 1
                    }
                }
            ],
            "vue/object-curly-newline": [
                "error",
                {
                    ObjectExpression: {
                        multiline: true,
                        minProperties: 2,
                        consistent: true
                    },
                    ExportDeclaration: {
                        multiline: true,
                        minProperties: 2,
                        consistent: true
                    }
                }
            ],
            "vue/object-property-newline": [
                "error",
                {
                    allowAllPropertiesOnSameLine: false
                }
            ],
            "vue/array-bracket-newline": [
                "error",
                {
                    multiline: true,
                    minItems: 3
                }
            ],
            "vue/array-element-newline": [
                "error",
                {
                    ArrayExpression: {
                        multiline: true,
                        minItems: 3
                    }
                }
            ],
            "vue/array-bracket-spacing": ["error", "never"]
        }
    })
    .append({
        name: "force",
        files: ["**/*.vue"],
        rules: {
            "@stylistic/indent": "off"
        }
    })
    .append({
        name: "better-tailwindcss",
        plugins: {
            "better-tailwindcss": eslintPluginBetterTailwindcss
        },
        settings: {
            "better-tailwindcss": {
                entryPoint: "assets/css/main.css",
                attributes: [
                    "class",
                    "className",
                    ".*Class"
                ],
                variables: [
                    "className",
                    "classNames",
                    "classes",
                    "style",
                    "styles",
                    [
                        ".*classes",
                        [
                            {
                                match: "objectValues"
                            }
                        ]
                    ]
                ]
            }
        },
        rules: {
            ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
            "better-tailwindcss/enforce-consistent-line-wrapping": [
                "warn",
                {
                    printWidth: 100,
                    indent: 4,
                    lineBreakStyle: "windows"
                }
            ],
            "better-tailwindcss/no-unregistered-classes": [
                "warn",
                {
                    detectComponentClasses: true
                }
            ]
        }
    });