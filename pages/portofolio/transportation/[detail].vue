<template>
  <div class="relative">
    <div class="bg-black h-[18vh] absolute -z-10 w-full"></div>
    <AppContainer class="pt-8 pb-3">
      <v-row class="pb-20 pt-4">
        <v-col class="pa-0 pt-5">
          <NuxtImg
            v-for="item in data?.imgPath"
            :src="item"
            sizes="sm:800px 2xl:1000px"
            class="mb-4 rounded-lg "
          />
        </v-col>
        <v-col class="pa-0 pl-10">
          <div class="h-[15vh] flex items-center">
            <AppTextH2 class="text-white text-2xl">
              {{ route.params.detail }}</AppTextH2
            >
          </div>
          <p class="pt-3 text-neutral-500">
            {{ data?.desc1 }}
          </p>
          <div class="flex gap-2 my-5">
            <NuxtImg
              v-for="item in data?.logo"
              :src="item"
              fit="cover"
              height="80"
            />
          </div>
          <p>Mitra:</p>
          <AppTextH5 class="text-primary mb-2">{{ data?.mitra }}</AppTextH5>
          <p>Lokasi:</p>
          <AppTextH5 class="text-primary mb-2">{{ data?.lokasi }}</AppTextH5>
          <p>Service:</p>
          <AppTextH5 class="text-primary mb-2">{{ data?.service }}</AppTextH5>
          <p>Testimoni:</p>
          <v-card
            variant="flat"
            v-for="item in testi"
            class="mx-auto bg-light-gray rounded-lg mb-2 mt-5 py-3  px-3"
            :subtitle="item.jabatan"
            :title="item.nama"
          >
            <template v-slot:append>
              <v-avatar size="50">
                <NuxtImg alt="John" :src="item.img"></NuxtImg>
              </v-avatar>
            </template>
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
