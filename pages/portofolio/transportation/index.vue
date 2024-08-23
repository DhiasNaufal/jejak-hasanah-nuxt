<template>
  <AppHeroImage class="h-[30vh] relative" :img="heroimg">
    <AppContainer class="h-full flex flex-col items-start justify-center">
      <AppTextH2 class="text-white">Transportation</AppTextH2>
    </AppContainer>
  </AppHeroImage>

  <AppContainer class="my-10">
    <v-row justify="center">
      <v-col cols="12" align="center">
        <AppTextH2 class="mb-3">Portofolio Proyek Transportasi</AppTextH2>
        <p class="text-lg text-neutral-500 mb-5">
          {{ portofolio }}
        </p>
      </v-col>
    </v-row>
    <AppCardItemPorto
      path="/portofolio/transportation"
      :items="transportation"
    />
  </AppContainer>
</template>
<script lang="ts" setup>
import portofolioMock from "~/app/mock/portofolio.mock";
import layananMock from "~/app/mock/layanan.mock";
const heroimg = "background-image: url('/img/service/transport_hero.png')";
const transportation = portofolioMock.transportasi;
const portofolio = layananMock.transportation.desc;
</script>
<style>
.test {
  filter: drop-shadow(7px 10px 0px #d82624);
}
</style>
