<template>
  <AppHeroImage class="h-[30vh] relative" :img="heroimg">
    <AppContainer class="h-full flex flex-col items-start justify-center">
      <AppTextH2 class="text-white">Layanan Advertising</AppTextH2>
      <AppTextH2 class="text-white">Jejak Hasanah</AppTextH2>
    </AppContainer>
  </AppHeroImage>

  <AppContainer class="my-10">
    <v-row justify="center">
      <AppTextH2 id="layanan">Layanan Kendaraan</AppTextH2>
      <p class="text-center">
        {{ portofolio }}
      </p>
    </v-row>

    <v-row class="mt-10">
      <div class="w-full flex justify-center">
        <div class="grid grid-cols-2 gap-x-10 gap-y-10">
          <AppCardService
            v-for="service in transportation"
            :title="service.name"
            :desc="service.desc"
            :path="`/transportation/${service.name}`"
          />
        </div>
      </div>
    </v-row>

    <AppSectionSellingPoint
      title="Keunggulan Layanan kami"
      subtitle="Kami berkomitmen untuk memberikan solusi periklanan yang efektif dan inovatif kepada klien dari berbagai sektor industri. "
      :items="sellingPointMock.transport"
    />
    <AppCardPortfolio :desc="portofolio" path="/portofolio/transportation" />
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
