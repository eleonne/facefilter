import { BrazilTheme, MyDarkTheme, MyLightTheme } from "./themes"

export default {
    AppName: 'SEM GRAVIDADE',
    API_SECRET: 'AQIp+raLdMi0r0EuMbss1lXf66sCe36/8q4gc/h40uw=',
    ServerBaseURL: 'https://108.167.168.27',
    APIEndpoint: '/api',
    environment: 'DEVELOPMENT',
    debug: true,
    defaultParticipantAvatar: 'https://web.semgravidade.com/assets/img/participant.jpg',
    defaultUserAvatar: 'https://web.semgravidade.com/assets/img/user.png',
    maxPlaylistQueue: 10,
    themeFile: '/theme.config',
    themes: {
        'DARK': MyDarkTheme,
        'LIGHT': MyLightTheme,
        'BRAZIL': BrazilTheme,
    },
}