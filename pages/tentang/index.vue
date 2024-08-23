<template>
  <AppHeroImage class="h-[30vh]">
    <AppContainer class="h-full flex flex-col items-start justify-center">
      <AppTextH2 class="text-white">Tentang Perusahaan</AppTextH2>
      <AppTextH2 class="text-white">Jejak Hasanah</AppTextH2>
    </AppContainer>
  </AppHeroImage>
  <AppContainer class="mt-5">
    <v-row>
      <v-col align="center">
        <TentangTabs />
      </v-col>
    </v-row>
    <v-row align="center" class="my-10">
      <v-col align="center">
        <NuxtImg src="img/mitra/Mitra.png" sizes="sm:800px 2xl:1000px" />
      </v-col>
      <v-col align="start">
        <AppTextH2 class="pb-5">Dipercaya oleh Banyak Perusahaan</AppTextH2>
        <p>
          Sudah banyak perusahaan yang memberikan kepercayaan serta bekerja sama
          dengan kami untuk menghasilkan produk periklanan serta jasa
          transportasi dengan profesionalisme, mengedepankan inovasi, serta
          kualitas maksimum.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-4 mb-4">
      <v-col cols="12" align="center">
        <AppTextH2 class="mb-3">Sejarah Perusahaan</AppTextH2>
        <p class="text-lg text-neutral-500 mb-5">
          Perjalanan kami didorong oleh komitmen untuk menjadi perusahaan yang
          inovatif dan terpercaya. Kami adalah perusahaan transportasi dan
          periklanan yang mengkhususkan diri dalam layanan seperti videotron dan
          billboard.
        </p>
      </v-col>
    </v-row>
    <v-timeline align="start">
      <v-timeline-item
        v-for="(i, index) in sejarah"
        :key="index"
        dot-color="primary"
        size="small"
      >
        <template v-slot:opposite>
          <NuxtImg :src="i.img" sizes="sm:180px 2xl:180px" />
        </template>
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
      <v-col cols="12" align="center">
        <AppTextH2 id="layanan">Tetap Teguh dalam Membangun Negeri</AppTextH2>
        <p class="text-lg text-neutral-500 mb-5">
          Melalui inovasi, kolaborasi, dan integritas, Jejak Hasanah bertujuan
          untuk menjadi bagian penting dalam perjalanan menuju Indonesia yang
          lebih maju dan sejahtera.
        </p>
      </v-col>
    </v-row>
  </AppContainer>
</template>
<script lang="ts" setup>
import sejarahMock from "~/app/mock/sejarah.mock";
const sejarah = sejarahMock.sejarah;
</script>
