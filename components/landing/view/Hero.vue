<template>
  <div class="h-[90vh]">
    <AppSectionBackgroundImage class="h-4/5 relative">
      <v-container class="h-full mb-6">
        <v-row align="center" class="h-full text-white" no-gutters>
          <v-col cols="6">
            <AppTextTitle> {{ content.title }}</AppTextTitle>
            <AppTextTitle> Insya Allah Amanah</AppTextTitle>
            <br />
            <p>{{ content.desc }}</p>
            <br />
            <v-btn color="secondary">Lebih lanjut</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <LandingValue />
    </AppSectionBackgroundImage>
    <div class="h-1/5 flex items-center" align="center">
      <v-container align="center">
        <v-row align="center">
          <v-col> Our Clients: </v-col>
          <v-col v-for="url in mitra" cols="2">
            <v-img :height="100" aspect-ratio="16/9" :src="url"> </v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script lang="ts">
import homepageMock from "~/app/mock/homepage.mock";
export default {
  setup() {
    const content = ref(homepageMock.landingPage);
    const mitra: any = [
      "/img/mitra/logo-telkomsel-baru.webp",
      "/img/mitra/PAMA.png",
      "/img/mitra/class_mild.png",
      "/img/mitra/gudang_garam.webp",
      "/img/mitra/djarum.svg",
    ];
    return {
      content,
      mitra,
    };
  },
};
</script>
