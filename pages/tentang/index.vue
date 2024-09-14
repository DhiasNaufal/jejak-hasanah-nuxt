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
    <v-row align="center" class="py-24">
      <v-col align="center" class="pr-4">
        <NuxtImg src="img/mitra/Mitra.png" sizes="sm:500px 2xl:1000px" />
      </v-col>
      <v-col align="start" class="pl-4">
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
        <p class="mx-24">
          Perjalanan kami didorong oleh komitmen untuk menjadi perusahaan yang
          inovatif dan terpercaya. Kami adalah perusahaan transportasi dan
          periklanan yang mengkhususkan diri dalam layanan seperti videotron dan
          billboard.
        </p>
      </v-col>
    </v-row>

    <v-timeline>
      <v-timeline-item
        v-for="(i, index) in sejarah"
        :key="index"
        dot-color="primary"
        size="small"
        fill-dot
      >
        <template v-slot:opposite>
          <div class="flex py-10">
            <NuxtImg :src="i.img" sizes="sm:180px 2xl:180px" />
          </div>
        </template>
        <v-card
          variant="flat"
          :class="[index % 2 === 0 ? 'text-start' : 'text-end']"
        >
          <v-card-title>
            <AppTextH2 class="text-black">{{ i.year }}</AppTextH2>
            <AppTextH5 class="text-primary py-1">{{ i.title }}</AppTextH5>
          </v-card-title>
          <v-card-text>
            {{ i.desc }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-row justify="center" class="mt-2 pb-24">
      <v-col cols="12" align="center">
        <AppTextH5 id="layanan" class="text-primary mb-3"
          >Tetap Teguh dalam Membangun Negeri</AppTextH5
        >
        <p class="mx-24">
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
