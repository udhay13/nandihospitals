/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e8f4fd',
                    100: '#c6e3fa',
                    200: '#92cbf7',
                    300: '#57aef2',
                    400: '#2d94eb',
                    500: '#0A66C2',
                    600: '#0854a5',
                    700: '#064285',
                    800: '#04326b',
                    900: '#022454',
                },
                teal: {
                    50: '#e6fafa',
                    100: '#b3f0f0',
                    200: '#80e6e6',
                    300: '#4ddcdc',
                    400: '#26d2d2',
                    500: '#00B8B8',
                    600: '#00999a',
                    700: '#007a7b',
                    800: '#005c5c',
                    900: '#003d3d',
                },
                lavender: {
                    500: '#7C3AED',
                    400: '#8B5CF6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
                heading: ['Poppins', 'Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 9s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 20s linear infinite',
                'gradient': 'gradient 8s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            },
            backgroundSize: {
                '300%': '300%',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
