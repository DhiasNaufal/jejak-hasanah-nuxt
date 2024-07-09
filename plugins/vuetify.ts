// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";
import { JHLightColors } from "~/app/constant/colors";
const JHLightTheme: ThemeDefinition = {
  dark: false,
  colors: { ...JHLightColors },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "JHLightTheme",
      themes: {
        JHLightTheme,
      },
    },
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});
