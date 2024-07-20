<template>
  <v-tabs
    v-model="tab"
    color="secondary"
    align-tabs="center"
    density="compact"
    selected-class="font-weight-bold"
  >
    <v-tab
      v-for="(item, index) in tabs"
      :key="index"
      :value="item.value"
      class="text-none"
    >
      {{ item.text }}
    </v-tab>
  </v-tabs>
  <v-window v-model="tab" class="mt-4">
    <v-window-item v-for="item in items" :value="item.value">
      <v-container class="bg-light-gray rounded-lg pa-16">
        <v-row>
          <v-col align="start">
            <AppTextH2>{{ item.title }}</AppTextH2>
            <p>
              {{ item.desc }}
            </p>
          </v-col>
          <v-col align="center">
            <NuxtImg sizes="100vw sm:50vw md:400px" :src="item.img" />
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
  </v-window>
</template>
<script lang="ts" setup>
const tab = ref();
const options = [
  {
    text: "Tentang Perusahaan",
    value: "tentang",
  },
  {
    text: "Struktur Layanan",
    value: "struktur",
  },
  {
    text: "Sertifikasi",
    value: "sertifikasi",
  },
];
const items = [
  {
    value: "tentang",
    title: "Tentang Perusahaan",
    desc: "PT Jejak Hasanah merupakan perusahaan yang memberikan layanan transportasi dan periklanan. Didirikan pada tahun XXXX, PT Jejak Hasanah telah bekerja sama dengan puluhan perusahaan daerah hingga nasional.",
    img: "img/logo/JH-Logo.svg",
  },
  {
    value: "struktur",
    title: "Struktur Layanan",
    desc: "PT Jejak Hasanah memberikan layanan jasa transportasi seperti transportasi ringan hingga transportasi berat. Selain itu PT Jejak Hasanah juga menyediakan layanan periklanan seperti Billboard, Videotron, dan Branding ads.",
    img: "img/logo/JH-Logo.svg",
  },
  {
    value: "sertifikasi",
    title: "Sertifikasi",
    desc: "PT Jejak Hasanah telah tersertifikasi Risk-Based Business yang diterbitkan oleh pemerintah. Dengan sertifikasi ini, Jejak Hasanah selalu mendedikasikan dalam menjamin standar kualitas dan keselamatan para pekerja serta secara aktif berkontribusi dalam kegiatan sosial.",
    img: "img/logo/JH-Logo.svg",
  },
];

const tabs = computed(() => options);
</script>
