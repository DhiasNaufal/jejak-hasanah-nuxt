<template>
  <v-row align="center" justify="end">
    <v-col cols="12" align="start">
      <p>Layanan Kami</p>
      <AppTextH2>Kami Memberikan Inovasi</AppTextH2>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col v-for="service in services" cols="6">
          <AppImageNumber
            :img="service.image"
            :title="service.title"
            :number="service.id"
            :desc="service.desc"
            :path="service.path"
          />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-carousel show-arrows="hover" class="rounded-0" hide-delimiters cycle>
        <v-carousel-item
          v-for="(item, index) in 5"
          :src="`/img/home/corousel/${index + 1}.png`"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
const services = [
  {
    id: "1",
    image:
      "background-image: url('/img/home/service/Landing_service_transport.png')",
    title: "Transportation",
    desc: "Layanan transportasi kami selalu mengutamakan kenyamanan, keamanan, dan ketepatan waktu.",
    path: "/transportation",
  },
  {
    id: "2",
    image: "background-image: url('/img/home/vtrn.png')",
    title: "Advertising",
    desc: "Kami selalu mengutamakan kreativitas, efektivitas, dan hasil yang maksimal",
    path: "/advertising",
  },
];
</script>
