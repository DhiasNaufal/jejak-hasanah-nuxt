<template>
  <v-container class="bg-primary rounded-xl my-10">
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
          <v-img src="public/img/service/ads_port.png"></v-img>
        </v-col>
        <v-col align="start" justify="between">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
            quam, placerat sit ame Ada LIght Vehicle ada Bus blabalbalbalballa
          </p>
          <AppButtonPrimary class="my-4"
            >Lihat Portofolio Kami</AppButtonPrimary
          >
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
</script>
