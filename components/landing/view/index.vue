<template>
  <LandingViewHero />
  <AppContainer>
    <AppSectionBackgroundLogo>
      <LandingViewServices />
    </AppSectionBackgroundLogo>

    <AppSectionSellingPoint
      title="Keunggulan Jejak Hasanah"
      subtitle="Jejak Hasanah Menawarkan Inovasi dan Profesionalisme kepada Mitra"
      class="mb-3"
      :items="point"
    />

    <LandingViewTestimony />
    <LandingViewPortfolio />
  </AppContainer>
</template>
<script lang="ts" setup>
import sellingPointMock from "~/app/mock/sellingPoint.mock";
const point = sellingPointMock.jh;
</script>
