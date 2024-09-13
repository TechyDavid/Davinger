module.exports = {
  darkMode: 'class',
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        fontFamily: {
          monument: ['Monument', 'sans-serif'],
        },
        animation: {
          ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        },
        keyframes: {
          ripple: {
            "0%, 100%": {
              transform: "translate(-50%, -50%) scale(1)",
            },
            "50%": {
              transform: "translate(-50%, -50%) scale(0.9)",
            },
          },
        },
        animation: {
          "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
          slide: "slide var(--speed) ease-in-out infinite alternate",
        },
        keyframes: {
          "spin-around": {
            "0%": {
              transform: "translateZ(0) rotate(0)",
            },
            "15%, 35%": {
              transform: "translateZ(0) rotate(90deg)",
            },
            "65%, 85%": {
              transform: "translateZ(0) rotate(270deg)",
            },
            "100%": {
              transform: "translateZ(0) rotate(360deg)",
            },
          },
          slide: {
            to: {
              transform: "translate(calc(100cqw - 100%), 0)",
            },
          },
        },
        animation: {
          marquee: "marquee var(--duration) linear infinite",
          "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        },
        keyframes: {
          marquee: {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(calc(-100% - var(--gap)))" },
          },
          "marquee-vertical": {
            from: { transform: "translateY(0)" },
            to: { transform: "translateY(calc(-100% - var(--gap)))" },
          },
        },
      },
    },
    plugins: [],
  }