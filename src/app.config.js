import { BrazilTheme, MyDarkTheme, MyLightTheme } from "./themes"

export default {
    AppName: 'Face Filter',
    environment: 'DEVELOPMENT',
    debug: true,
    themes: {
        'DARK': MyDarkTheme,
        'LIGHT': MyLightTheme,
        'BRAZIL': BrazilTheme,
    },
}