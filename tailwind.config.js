/** @type {import('tailwindcss').Config} */
module.exports =
{
    content:
    [
        './views/*.{pug, html}',
    ],
    theme:
    {
        extend:
        {
                keyframes: {
                    slidein: {
                        from: {
                            opacity: "0",
                            transform: "translateY(-10px)",
                        },
                        to: {
                            opacity: "1",
                            transform: "translateY(0)",
                        },
                    },
                },
                animation: {
                    slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
                },
        },
    },
    plugins:
    [

    ],
}