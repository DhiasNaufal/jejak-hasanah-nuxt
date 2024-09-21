<template>
  <AppHeroImage class="h-[30vh] relative" :img="heroimg">
    <AppContainer class="h-full flex flex-col items-start justify-center">
      <AppTextH2 class="text-white">Portofolio Advertising</AppTextH2>
    </AppContainer>
  </AppHeroImage>

  <AppContainer class="my-10">
    <v-row justify="center">
      <v-col cols="12" align="center">
        <AppTextH2 class="mb-3">Portofolio Proyek Advertising</AppTextH2>
        <p class="text-md text-neutral-500 mb-5 px-24">
          {{ portofolio }}
        </p>
      </v-col>
    </v-row>
    <AppCardItemPorto
      path="/portofolio/advertising"
      :items="portoAdvertising"
    />
    <!-- <v-row class="mt-10">
      <div class="w-full flex justify-center">
        <div class="grid grid-cols-3 gap-x-10 gap-y-10">
          <AppCardService
            v-for="item in portoAdvertising"
            :title="item.title"
            :desc="item.desc"
            :path="`/portofolio/advertising/${item.title}`"
          />
        </div>
      </div>
    </v-row> -->
  </AppContainer>
</template>
<script lang="ts" setup>
import portofolioMock from "~/app/mock/portofolio.mock";
import layananMock from "~/app/mock/layanan.mock";
const heroimg = "background-image: url('/img/service/transport_hero.png')";
const portoAdvertising = portofolioMock.advertising.variant;
const portofolio = layananMock.advertising.desc;
</script>
<style>
.test {
  filter: drop-shadow(7px 10px 0px #d82624);
}
</style>
