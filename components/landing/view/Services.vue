<template>
  <v-container fluid>
    <v-row align="center" justify="end">
      <v-col cols="5" xl="6">
        <v-carousel
          show-arrows="hover"
          class="rounded-xl"
          hide-delimiters
          cycle
        >
          <v-carousel-item
            v-for="(item, index) in 5"
            :src="`/img/home/corousel/${index + 1}.png`"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col>
        <v-row justify="center">
          <v-col cols="12" align="start">
            <p>Our Services</p>
            <AppTextH2>We Provide Innovation</AppTextH2>
          </v-col>
          <v-col cols="12">
            <AppImageNumber
              img="background-image: url('/img/home/lv.jpeg')"
              title="Transportasi"
              number="1"
              desc="Jejak Hasanah menyediakan Bus, Minibus, LV, dan SUV dengan spesifikasi yang dapat disesuaikan serta layanan premium untuk berbagai kebutuhan transportasi perusahaan."
            />
          </v-col>
          <v-col cols="12">
            <AppImageNumber
              img="background-image: url('/img/home/vtrn.png')"
              title="Advertising"
              number="2"
              desc="Jejak Hasanah menyediakan layanan advertising, seperti billboard, videotron, mini display, dan café branding, dengan solusi yang efektif dan inovatif."
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
const corousel = [];
</script>
