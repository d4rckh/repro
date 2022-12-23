import '@mdi/font/css/materialdesignicons.css'

import { createVuetify, ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/**
{
  "name": "Blue Matrix",
  "black": "#101116",
  "red": "#ff5680",
  "green": "#00ff9c",
  "yellow": "#fffc58",
  "blue": "#00b0ff",
  "purple": "#d57bff",
  "cyan": "#76c1ff",
  "white": "#c7c7c7",
  "brightBlack": "#686868",
  "brightRed": "#ff6e67",
  "brightGreen": "#5ffa68",
  "brightYellow": "#fffc67",
  "brightBlue": "#6871ff",
  "brightPurple": "#d682ec",
  "brightCyan": "#60fdff",
  "brightWhite": "#ffffff",
  "background": "#101116",
  "foreground": "#00a2ff",
  "selectionBackground": "#c1deff",
  "cursorColor": "#76ff9f"
}
 */

const myCustomLightTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#101116',
    surface: '#13141a',
    primary: '#60fdff',
    cyan: '#60fdff',
    'primary-darken-1': '#006769',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#ff5680',
    info: '#00b0ff',
    success: '#00ff9c',
    green: '#5ffa68',
    warning: '#fffc67',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components, directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    },
    aliases,
    icons: { defaultSet: 'mdi' ,sets: { mdi } }
  });

  nuxtApp.vueApp.use(vuetify);
})