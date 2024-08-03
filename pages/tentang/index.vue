<template>
  <AppHeroImage class="h-[60vh]">
    <AppContainer class="h-full">
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
    </AppContainer>
  </AppHeroImage>
  <AppContainer>
    <v-row>
      <v-col align="center">
        <TentangTabs />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col align="center">
        <NuxtImg src="img/mitra-all.png" sizes="sm:400px 2xl:400px"
      /></v-col>
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
        <AppTextH2 id="layanan">Sejarah Perusahaan</AppTextH2>
      </v-col>
      <v-col>
        <p class="text-center">
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
      </v-col>
      <v-col>
        <p class="text-center">
          Jejak Hasanah berkomitmen untuk terus berkarya dalam pembangunan
          Indonesia dengan mengedepankan tiga pilar utama: 'Amanah', 'Hasanah',
          dan 'Alhamdulillah'. Dengan landasan kepercayaan, kebaikan, dan rasa
          syukur, kami berusaha memberikan kontribusi nyata untuk kemajuan
          Indonesia. Setiap langkah yang kami ambil didorong oleh semangat untuk
          memberikan dampak positif dan berkelanjutan bagi masyarakat dan
          negara. Melalui inovasi, kolaborasi, dan integritas, Jejak Hasanah
          bertujuan untuk menjadi bagian penting dalam perjalanan menuju
          Indonesia yang lebih maju dan sejahtera.
        </p>
      </v-col>
    </v-row>
  </AppContainer>
</template>
<script lang="ts" setup>
import sejarahMock from "~/app/mock/sejarah.mock";
const sejarah = sejarahMock.sejarah;
</script>
