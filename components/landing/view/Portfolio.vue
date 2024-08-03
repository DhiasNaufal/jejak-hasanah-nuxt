<template>
  <div class="text-center">
    <AppTextH2 class="pb-5">Lihat apa yang sudah kita kerjakan</AppTextH2>
    <p class="leading-tight">
      Dengan pengalaman luas di berbagai sektor, kami telah berhasil menangani
      banyak proyek, mulai dari layanan antar jemput karyawan hingga pemasangan
      media periklanan. Kami terus berinovasi dan berkomitmen untuk selalu
      memberikan hasil terbaik, memastikan setiap proyek memenuhi standar
      tertinggi dalam kualitas dan kepuasan pelanggan.
    </p>
  </div>
  <v-carousel show-arrows="hover" hide-delimiters>
    <v-carousel-item v-for="(item, index) in portofolio">
      <NuxtLink
        to="/transportation"
        class="flex fill-height justify-center align-center"
      >
        <AppCardPortofolioShort
          :title="item.title"
          :desc="item.short"
          :img="item.img"
          class="hover:scale-105 transition-all"
        />
      </NuxtLink>
    </v-carousel-item>
  </v-carousel>
</template>
<script lang="ts" setup>
import portofolioMock from "~/app/mock/portofolio.mock";
const portofolio = portofolioMock.transportasi;
</script>
