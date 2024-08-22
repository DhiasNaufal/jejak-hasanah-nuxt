<template>
  <v-container class="bg-primary rounded-0 my-10">
    <v-container>
      <v-row>
        <v-col>
          <AppTextH2 class="text-white">
            Lihat Portofolio Project Kami
          </AppTextH2>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col>
          <NuxtImg :src="imgPath"></NuxtImg>
        </v-col>
        <v-col align="start" justify="between">
          <p>
            {{ desc }}
          </p>
          <NuxtLink :to="path">
            <AppButtonPrimary class="my-4"> Lihat Portofolio </AppButtonPrimary>
          </NuxtLink>
          <AppValue :items="items" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script lang="ts" setup>
const items = [
  { value: "50+", desc: "Customer" },
  { value: "98%", desc: "Kepuasan Pelanggan" },
  { value: "75+", desc: "Proyek dikerjakan" },
];
defineProps({
  imgPath: {
    type: String,
    default: "/img/home/footerBanner.jpeg",
  },
  desc: {
    type: String,
    default: "desc",
  },
  path: {
    type: String,
    default: "/",
  },
});
</script>
