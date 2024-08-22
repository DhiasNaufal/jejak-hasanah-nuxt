<template>
  <AppHeroImage class="h-[40vh]">
    <v-container class="h-full">
      <v-row align="center" justify="center" class="h-full">
        <v-col justify="center" algin="center">
          <AppTextH2 class="text-white">{{ transportasiData?.name }}</AppTextH2>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </AppHeroImage>
  <AppContainer class="pt-3 pb-3">
    <p class="text-lg">
      {{ transportasiData?.desc }}
    </p>
    <div v-for="(item, index) in transportasiData?.keunggulan">
      <v-row v-if="index % 2 == 0" align="center">
        <v-col class="pa-0 pt-5">
          <!-- <NuxtImg src="img/mitra/mitra.png" sizes="sm:800px 2xl:1000px" /> -->
        </v-col>
        <v-col class="pl-5">
          <AppTextH2>{{ item.title }}</AppTextH2>
          <p class="text-lg">{{ item.desc }}</p>
        </v-col>
      </v-row>
      <v-row v-if="index % 2 != 0" align="center">
        <v-col class="pl-5">
          <AppTextH2>{{ item.title }}</AppTextH2>
          <p class="text-lg">{{ item.desc }}</p>
        </v-col>
        <v-col class="pa-0 pt-5">
          <!-- <NuxtImg src="img/mitra/mitra.png" sizes="sm:800px 2xl:1000px" /> -->
        </v-col>
      </v-row>
    </div>
  </AppContainer>
</template>
<script lang="ts" setup>
import layananMock from "~/app/mock/layanan.mock";
const transportasi = layananMock.transportation.variant;
const transportasiData = transportasi.find((item) => item.id == "1");
</script>
