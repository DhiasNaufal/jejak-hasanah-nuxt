<template>
  <AppHeroImage class="h-[60vh]">
    <v-container class="h-full">
      <v-row align="center" justify="center" class="h-full">
        <v-col justify="center" algin="center">
          <AppTextH2 class="text-white">Layanan Kendaraan</AppTextH2>
          <AppTextH2 class="text-white">Jejak Hasanah</AppTextH2>
          <NuxtLink to="#layanan">
            <AppButtonPrimary>Pelajari lebih lanjut</AppButtonPrimary>
          </NuxtLink>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </AppHeroImage>
  <v-container>
    <v-row justify="center" class="mt-4 mb-4">
      <AppTextH2 id="layanan">Layanan Kendaraan</AppTextH2>
      <p class="text-center">
        Jejak Hasanah bangga menawarkan berbagai jenis kendaraan untuk memenuhi
        kebutuhan transportasi perusahaan di segala sektor. Kami menyediakan
        Bus, Minibus, Light Vehicle (LV), dan SUV dengan spesifikasi yang dapat
        disesuaikan serta layanan premium untuk memastikan kelancaran
        operasional.
      </p>
    </v-row>
    <v-timeline align="start">
      <v-timeline-item
        v-for="(i, index) in sejarah"
        :key="index"
        dot-color="primary"
        size="small"
      >
        <template v-slot:opposite> Opposite content </template>
        <div
          :class="[
            'flex',
            'flex-col',
            index % 2 === 0 ? 'items-start' : 'items-end',
          ]"
        >
          <div class="text-4xl font-bold">{{ i.year }}</div>
          <AppTextH5 class="text-primary">{{ i.title }}</AppTextH5>
          <p :class="[index % 2 === 0 ? 'text-start' : 'text-end']">
            {{ i.desc }}
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
    <v-row justify="center" class="mt-4 mb-4">
      <AppTextH2 id="layanan">Layanan Kendaraan</AppTextH2>
      <p class="text-center">
        Jejak Hasanah bangga menawarkan berbagai jenis kendaraan untuk memenuhi
        kebutuhan transportasi perusahaan di segala sektor. Kami menyediakan
        Bus, Minibus, Light Vehicle (LV), dan SUV dengan spesifikasi yang dapat
        disesuaikan serta layanan premium untuk memastikan kelancaran
        operasional.
      </p>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import sejarahMock from "~/app/mock/sejarah.mock";
const sejarah = sejarahMock.sejarah;
</script>
