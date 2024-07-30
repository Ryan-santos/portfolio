import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";

const colors = {
    white: {
        DEFAULT: "#FFFFFF",
        100: "#EEEEEE"
    },
    black: {
        DEFAULT: "#0C0D13",
        100: "#18191F"
    }
};

export default <Partial<Config>> {
    darkMode: "class",

    theme: {
        container: {
            center: true,
            padding: "1rem"
        },
        fontFamily: {
            sans: ["'Urbanist'", "sans-serif"],
            title: ["'Arkhip'", "sans-serif"]
        },
        extend: {
            screens: {
                xs: "475px"
            },
            colors: {
                primary: "#2250F4",
                ...colors
            }
        }
    },

    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("activated", ["&.active", "&.activated"]);
        }),

        createThemes({
            light: {
                background: colors.white,
                contrast: colors.black
            },
            dark: {
                background: colors.black,
                contrast: colors.white
            }
        })
    ]
};