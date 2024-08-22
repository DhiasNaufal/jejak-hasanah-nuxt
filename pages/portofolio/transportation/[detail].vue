<template>
  <div class="relative">
    <div class="bg-black h-[15vh] absolute -z-10 w-full"></div>
    <AppContainer class="pt-3 pb-3">
      <v-row class="">
        <v-col class="pa-0 pt-5">
          <NuxtImg src="img/mitra/mitra.png" sizes="sm:800px 2xl:1000px" />
          <NuxtImg src="img/mitra/mitra.png" sizes="sm:800px 2xl:1000px" />
        </v-col>
        <v-col class="pa-0 pl-5">
          <div class="h-[15vh] flex items-center">
            <AppTextH2 class="text-white text-2xl">
              {{ route.params.detail }}</AppTextH2
            >
          </div>
          <p class="pt-3">
            {{ data?.desc1 }}
          </p>
          <NuxtImg src="img/mitra/mitra.png" sizes="sm:800px 2xl:1000px" />
          <p>Mitra:</p>
          <AppTextH5>{{ data?.mitra }}</AppTextH5>
          <p>Lokasi:</p>
          <AppTextH5>{{ data?.lokasi }}</AppTextH5>
          <p>Service:</p>
          <AppTextH5>{{ data?.service }}</AppTextH5>

          <v-card
            variant="flat"
            v-for="item in testi"
            append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            class="mx-auto bg-light-gray rounded-lg mb-2 mt-4"
            :subtitle="item.jabatan"
            :title="item.nama"
          >
            <v-card-text>{{ item.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </AppContainer>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
import testiMock from "~/app/mock/testi.mock";
const testi = testiMock.testimoni;
import portofolioMock from "~/app/mock/portofolio.mock";
const data = portofolioMock.transportasi.find(
  (item) => item.title == route.params.detail
);
</script>
