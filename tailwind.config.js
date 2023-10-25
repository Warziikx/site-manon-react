/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: { title: ["Guavast", "Georgia"], body: "Montserrat" },
			colors: {
				primary: {
					DEFAULT: "#3B4F43",
					50: "#D9E3DD",
					100: "#CEDAD3",
					200: "#B6C9BE",
					300: "#9FB7A9",
					400: "#87A694",
					500: "#70947F",
					600: "#5E7E6B",
					700: "#4C6657",
					800: "#3B4F43",
					900: "#232F28",
					950: "#171F1A",
				},
				secondary: {
					DEFAULT: '#ABBBDD',
					50: '#F4F6FA',
					100: '#E5EAF5',
					200: '#C8D3E9',
					300: '#ABBBDD',
					400: '#839BCD',
					500: '#5B7ABD',
					600: '#405F9F',
					700: '#304777',
					800: '#202F4F',
					900: '#101727',
					950: '#080C13'
				},
				"link-water": {
					DEFAULT: "#EEF1FA",
					50: "#EEF1FA",
					100: "#D8DFF4",
					200: "#ADBBE7",
					300: "#8298DA",
					400: "#5674CD",
					500: "#3656B6",
					600: "#29418B",
					700: "#1C2D5F",
					800: "#0F1834",
					900: "#030409",
					950: "#000000",
				},
				ternary: {
					DEFAULT: "#E28371",
					50: "#FAEBE8",
					100: "#F7DCD7",
					200: "#F0BEB5",
					300: "#E9A193",
					400: "#E28371",
					500: "#D85A42",
					600: "#BC3E26",
					700: "#8E2F1D",
					800: "#5F1F13",
					900: "#31100A",
					950: "#190805",
				},
				accent: {
					DEFAULT: "#C3533D",
					50: "#E5B4AA",
					100: "#E0A69A",
					200: "#D68A7B",
					300: "#CD6F5C",
					400: "#C3533D",
					500: "#99412F",
					600: "#6E2E22",
					700: "#431C15",
					800: "#180A07",
					900: "#000000",
					950: "#000000",
				},
			},
		},
	},
	plugins: [],
};
