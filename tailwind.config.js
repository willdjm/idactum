/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      "colors": {
        "green": {
          "500": "#1eaf8e"
        },
          "gray": {
            "300": "#f4f4f4",
            "500": "#433e43",
            "600": "#bdbdbd"
          },
        }
    },
  },
  plugins: [],
}
