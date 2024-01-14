/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily:{
                "inter": "Inter, sans-serif",
                "roboto": "Roboto, sans-serif",
                "dhyana": "Dhyana, sans-serif"
            },
            colors:{
                "primary":"#0E333C",
                "secondary": "#F6B8A9",
                "pink": "#F8C9BE",
                "new-black": "#262626",
                "gray": "#393939",
                "gray-2": "#939393",
                "gray-3": "#7D7D7D",
                "red": "#B20000",
            },
            backgroundColor:{
                "primary":"#0E333C",
                "secondary": "#F6B8A9",
                "gray": "#F3F5F5",
                "gray-2": "#D9D9D9",
            },
            borderColor:{
                "yellow": "#FAE185",
                "primary":"#0E333C",
                "secondary": "#F6B8A9",
                "gray": "#D0D5DD",
                "gray-2": "#EAECF0"
            }
    },
    plugins: [],
    }
}
