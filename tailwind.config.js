/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,ts,jsx,tsx,mdx}"]
    ,
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",

    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                amazon_blue: {
                    light: "#232F3E",
                    DEFAULT: "#131921",
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
}
