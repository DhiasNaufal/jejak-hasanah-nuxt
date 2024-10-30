<template>
  <LandingViewHero />
  <AppContainer>
    <!-- <LandingViewOverview /> -->
    <AppSectionBackgroundLogo>
      <LandingViewServices />
    </AppSectionBackgroundLogo>

    <AppSectionSellingPoint
      title="Keunggulan Jejak Hasanah"
      subtitle="Jejak Hasanah Menawarkan Inovasi dan Profesionalisme kepada Mitra"
      class="mb-3"
      :items="point"
    />

    <v-container class="mb-3">
      <v-col cols="12" align="start">
        <p>Testimoni</p>
        <AppTextH2>Mari dengar kata mereka</AppTextH2>
      </v-col>
      <v-row align="center">
        <v-col justify="center">
          <NuxtImg
            src="/img/home/Testimony/Testimoni.png"
            sizes="sm:800px 2xl:1000px"
          />
        </v-col>
        <v-col cols="7">
          <v-card
            variant="flat"
            v-for="item in testi"
            append-avatar="/img/home/Testimony/Testimoni.png"
            class="mx-auto bg-light-gray rounded-0 mb-2 mt-4"
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
    </v-container>
    <LandingViewPortfolio />
  </AppContainer>
</template>
<script lang="ts" setup>
import testiMock from "~/app/mock/testi.mock";
const testi = testiMock.testimoni;
import sellingPointMock from "~/app/mock/sellingPoint.mock";
const point = sellingPointMock.jh;
</script>
