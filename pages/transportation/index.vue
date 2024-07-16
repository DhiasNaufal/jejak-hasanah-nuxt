<template>
  <AppHeroImage class="h-[60vh]" :img="heroimg">
    <v-container class="h-full">
      <v-row align="center" justify="center" class="h-full">
        <v-col justify="center" algin="center">
          <AppTextH2 class="text-white">Layanan Kendaraan</AppTextH2>
          <AppTextH2 class="text-white">Jejak Hasanah</AppTextH2>
          <AppButtonPrimary>Pelajari lebih lanjut</AppButtonPrimary>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </AppHeroImage>
  <v-container class="my-10">
    <v-row justify="center">
      <AppTextH2>Layanan Kendaraan</AppTextH2>
      <p class="text-center">
        Jejak Hasanah bangga menawarkan berbagai jenis kendaraan untuk memenuhi
        kebutuhan transportasi perusahaan di segala sektor. Kami menyediakan
        Bus, Minibus, Light Vehicle (LV), dan SUV dengan spesifikasi yang dapat
        disesuaikan serta layanan premium untuk memastikan kelancaran
        operasional.
      </p>
    </v-row>
  </v-container>

  <AppSectionSellingPoint
    title="Keunggulan Layanan kami"
    subtitle="Kami berkomitmen untuk memberikan solusi periklanan yang efektif dan inovatif kepada klien dari berbagai sektor industri. "
    :items="sellingPointMock.transport"
  />
  <AppCardPortfolio />
</template>
<script lang="ts" setup>
import sellingPointMock from "~/app/mock/sellingPoint.mock";
const heroimg = "background-image: url('/img/service/transport_hero.png')";
</script>
<style>
.test {
  filter: drop-shadow(7px 10px 0px #d82624);
}
</style>
