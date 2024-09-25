<template>
  <div class="h-[70vh]">
    <AppSectionBackgroundImage class="h-[90%] relative">
      <AppContainer class="h-full mb-6">
        <v-row align="center" class="h-full text-white" no-gutters>
          <v-col cols="6">
            <AppTextTitle> {{ content.title }}</AppTextTitle>
            <AppTextTitle> Insya Allah Amanah</AppTextTitle>
            <br />
            <p>{{ content.desc }}</p>
            <!-- <br /> -->
            <NuxtLink
              :to="`/tentang`"
              class="text-primary hover:underline hover:cursor-pointer"
            >
            <AppButtonPrimary color="secondary">Lebih lanjut</AppButtonPrimary>
          </NuxtLink>
          </v-col>
        </v-row>
      </AppContainer>
      <LandingValue />
    </AppSectionBackgroundImage>
  </div>
</template>
<script lang="ts">
import homepageMock from "~/app/mock/homepage.mock";
export default {
  setup() {
    const content = ref(homepageMock.landingPage);
    const mitra: any = [
      "/img/mitra/logo-telkomsel.png",
      "/img/mitra/PAMA.png",
      "/img/mitra/class_mild.png",
      "/img/mitra/gudang_garam.png",
      "/img/mitra/djarum.png",
    ];
    return {
      content,
      mitra,
    };
  },
};
</script>
