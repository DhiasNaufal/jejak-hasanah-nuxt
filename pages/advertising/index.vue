<template>
  <AppHeroImage class="h-[60vh]" :img="heroimg">
    <v-container class="h-full">
      <v-row align="center" justify="center" class="h-full">
        <v-col justify="center" algin="center">
          <AppTextH2 class="text-white">Layanan Advertising</AppTextH2>
          <AppTextH2 class="text-white">Jejak Hasanah</AppTextH2>
          <v-btn class="my-3" color="secondary">Pelajari lebih lanjut</v-btn>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </AppHeroImage>

  <v-container class="my-10">
    <v-row justify="center">
      <AppTextH2>Layanan Advertising</AppTextH2>
      <p class="text-center">
        Jejak Hasanah menyediakan layanan advertising yang beragam, meliputi
        billboard, videotron, mini display, dan café branding.
      </p>
    </v-row>
  </v-container>

  <!-- <AppSectionExpandedRow /> -->

  <AppSectionSellingPoint
    title="Pelayanan Tambahan"
    subtitle="Jejak Hasanah menyediakan layanan yang komprehensif untuk memastikan kelancaran operasional Anda"
    :items="sellingPointMock.ads"
  />
  <AppCardPortfolio />
</template>
<script lang="ts" setup>
import sellingPointMock from "~/app/mock/sellingPoint.mock";
const heroimg = "background-image: url('/img/service/ads_hero.png')";
const items = [
  { value: "50+", desc: "Customer" },
  { value: "98%", desc: "Kepuasan Pelanggan" },
  { value: "75+", desc: "Proyek dikerjakan" },
];
</script>
<style>
.test {
  filter: drop-shadow(7px 10px 0px #d82624);
}
</style>
