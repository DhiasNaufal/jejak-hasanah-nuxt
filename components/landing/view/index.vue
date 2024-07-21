<template>
  <LandingViewHero />

  <AppSectionBackgroundLogo>
    <LandingViewServices class="my-14" />
  </AppSectionBackgroundLogo>

  <AppSectionSellingPoint
    title="Keunggulan Jejak Hasanah"
    subtitle="Jejak Hasanah Menawarkan Inovasi dan Profesionalisme kepada Mitra"
    class="my-24"
    :items="point"
  />
  <LandingViewPortfolio />
</template>
<script lang="ts" setup>
import sellingPointMock from "~/app/mock/sellingPoint.mock";
const point = sellingPointMock.jh;
</script>
