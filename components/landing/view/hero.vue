<template>
  <div class="min-h-[50vh] sm:min-h-[60vh] md:h-[70vh]">
    <AppSectionBackgroundImage class="h-[90%]">
      <AppContainer class="h-full mb-6">
        <v-row align="center" class="h-full text-white" no-gutters>
          <v-col cols="12" md="6" class="py-8 md:py-0">
            <AppTextH2
              class="text-white text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6"
            >
              {{ content.title }}
            </AppTextH2>

            <p
              class="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed"
            >
              {{ content.desc }}
            </p>

            <NuxtLink :to="`/tentang`" class="inline-block">
              <AppButtonPrimary color="secondary" class="text-sm sm:text-base">
                Lebih lanjut
              </AppButtonPrimary>
            </NuxtLink>
          </v-col>
        </v-row>
      </AppContainer>
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
