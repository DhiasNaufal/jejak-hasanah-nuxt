<template>
  <AppHeroImage class="h-[30vh] relative" :img="heroimg">
    <AppContainer class="h-full flex flex-col items-start justify-center">
      <AppTextH2 class="text-white">Layanan Transportasi</AppTextH2>
      <AppTextH2 class="text-white">Jejak Hasanah</AppTextH2>
    </AppContainer>
  </AppHeroImage>

  <AppContainer class="py-10">
    <v-row justify="center">
      <v-col cols="12" class="py-6" align="center">
        <AppTextH2 class="mb-3">Layanan Transportasi</AppTextH2>
        <p class="text-md text-neutral-500 md:w-3/5">
          Kenyamanan dan keamanan menjadi prioritas kami
        </p>
      </v-col>
    </v-row>
    <AppCardItem :items="transportation" route="transportation" />
    <AppSectionSellingPoint
      title="Keunggulan Layanan kami"
      subtitle="Kami berkomitmen untuk memberikan solusi transportasi yang efektif dan inovatif kepada klien dari berbagai sektor industri."
      :items="sellingPointMock.transport"
      class="py-16"
    />
    <AppCardPortfolio
      img-path="/img/service/Porto_cover_transport.png"
      :desc="portofolio"
      path="/portofolio/transportation"
    />
  </AppContainer>
</template>
<script lang="ts" setup>
import sellingPointMock from "~/app/mock/sellingPoint.mock";
import layananMock from "~/app/mock/layanan.mock";
const heroimg = "background-image: url('/img/service/transport_hero.png')";
const transportation = layananMock.transportation.variant;
const portofolio = layananMock.transportation.desc;
</script>
<style>
.test {
  filter: drop-shadow(7px 10px 0px #d82624);
}
</style>
