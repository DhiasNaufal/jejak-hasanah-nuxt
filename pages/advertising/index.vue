<template>
  <AppHeroImage class="h-[30vh]" :img="heroimg">
    <AppContainer class="h-full flex flex-col items-start justify-center">
      <AppTextH2 class="text-white">Layanan Advertising</AppTextH2>
      <AppTextH2 class="text-white">Jejak Hasanah</AppTextH2>
    </AppContainer>
  </AppHeroImage>

  <AppContainer class="my-10">
    <v-row justify="center">
      <v-col cols="12" align="center">
        <AppTextH2>Layanan Advertising</AppTextH2>
        <p class="text-lg text-neutral-500 md:w-3/5 mb-5">
          Jejak Hasanah menyediakan layanan advertising yang beragam, meliputi
          billboard, videotron, mini display, dan café branding.
        </p>
      </v-col>
    </v-row>
    <!-- <v-row class="mt-10">
      <div class="w-full flex justify-center">
        <div class="grid grid-cols-3 gap-x-10 gap-y-10">
          <AppCardService
            v-for="service in advertising"
            :title="service.name"
            :desc="service.desc"
            :path="`/advertising/${service.name}`"
          />
        </div>
      </div>
    </v-row> -->
    <AppCardItem :items="advertising" />
    <AppSectionSellingPoint
      title="Pelayanan Tambahan"
      subtitle="Jejak Hasanah menyediakan layanan yang komprehensif untuk memastikan kelancaran operasional Anda"
      :items="sellingPointMock.ads"
    />
    <AppCardPortfolio
      img-path="/img/service/Porto_cover_transport.png"
      :desc="portofolio"
      path="/portofolio/advertising"
    />
  </AppContainer>
</template>
<script lang="ts" setup>
import sellingPointMock from "~/app/mock/sellingPoint.mock";
import layananMock from "~/app/mock/layanan.mock";
const heroimg = "background-image: url('/img/service/ads_hero.png')";
const advertising = layananMock.advertising.variant;
const portofolio = layananMock.advertising.desc;
</script>
<style>
.test {
  filter: drop-shadow(7px 10px 0px #d82624);
}
</style>
