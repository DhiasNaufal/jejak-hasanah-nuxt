<template>
  <AppHeroImage class="h-[30vh] relative">
    <v-container class="h-full">
      <v-row align="center" justify="center" class="h-full">
        <v-col justify="center" algin="center">
          <AppTextH2 class="text-white">{{ transportasiData?.name }}</AppTextH2>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </AppHeroImage>
  <AppContainer class="my-10 pb-10">
    <v-col align="center">
      <AppTextH2 class="mb-3">{{ transportasiData?.name }}</AppTextH2>
      <p class="text-md text-neutral-500 mb-5 px-24">
        {{ transportasiData?.desc }}
      </p>
    </v-col>
    <div v-for="(item, index) in transportasiData?.keunggulan">
      <v-row v-if="index % 2 == 0" align="center" class="my-10">
        <v-col class="pa-0" align="center">
          <NuxtImg
            :src="item?.imgPath"
            sizes="sm:500px 2xl:600px"
            class="rounded-lg"
          />
        </v-col>
        <v-col class="pl-5">
          <AppTextH2>{{ item.title }}</AppTextH2>
          <p class="text-lg text-neutral-500 py-2">{{ item.desc }}</p>
        </v-col>
      </v-row>
      <v-row v-if="index % 2 != 0" align="center" class="my-16">
        <v-col class="pl-5" align="end">
          <AppTextH2>{{ item.title }}</AppTextH2>
          <p class="text-lg text-neutral-500 py-2">{{ item.desc }}</p>
        </v-col>
        <v-col class="pa-0" align="center">
          <NuxtImg
            :src="item?.imgPath"
            sizes="sm:500px 2xl:600px"
            class="rounded-lg"
          />
        </v-col>
      </v-row>
    </div>
    <AppCardPortfolio
      img-path="/img/service/Porto_cover_transport.png"
      :desc="portofolio"
      path="/portofolio/transportation"
    />
  </AppContainer>
</template>
<script lang="ts" setup>
const route = useRoute();
import layananMock from "~/app/mock/layanan.mock";
const transportasi: any = layananMock.transportation.variant;
const transportasiData = transportasi.find(
  (item: any) => item.name == route.params.service
);
const portofolio = layananMock.transportation.desc;
</script>
