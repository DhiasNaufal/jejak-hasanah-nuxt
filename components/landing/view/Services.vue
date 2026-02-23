<template>
  <v-row align="center" justify="end">
    <v-col cols="12" align="start">
      <p class="text-body-2 text-sm-body-1">Layanan Kami</p>
      <AppTextH2 class="text-h5 text-sm-h4 text-md-h3">
        Kami Memberikan Inovasi
      </AppTextH2>
    </v-col>

    <v-col cols="12">
      <v-row justify="center">
        <v-col
          v-for="service in services"
          :key="service.id"
          cols="12"
          sm="6"
          md="6"
          lg="6"
        >
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
      <v-carousel
        show-arrows="hover"
        class="rounded-0"
        hide-delimiters
        cycle
        :height="carouselHeight"
      >
        <v-carousel-item
          v-for="(item, index) in 5"
          :key="index"
          :src="`/img/home/corousel/${index + 1}.png`"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();

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

// Responsive carousel height
const carouselHeight = computed(() => {
  switch (name.value) {
    case "xs":
      return 200;
    case "sm":
      return 300;
    case "md":
      return 400;
    case "lg":
      return 500;
    case "xl":
      return 600;
    default:
      return 400;
  }
});
</script>

<style scoped>
/* Optional: Additional responsive styling */
p {
  margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
  p {
    font-size: 0.875rem;
  }
}
</style>
