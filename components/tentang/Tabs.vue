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
    <v-window-item value="tentang">
      <v-container class="bg-light-gray rounded-3xl pa-16">
        <v-row align="center">
          <v-col align="start">
            <AppTextH2 class="pb-5">Tentang Perusahaan</AppTextH2>
            <p>
              PT Jejak Hasanah adalah perusahaan yang bergerak di bidang layanan
              transportasi dan periklanan. Didirikan pada tahun 2008, PT Jejak
              Hasanah telah menjalin kerja sama dengan berbagai perusahaan, baik
              di tingkat daerah maupun nasional.
            </p>
          </v-col>
          <v-col align="center">
            <img src="/public/img/logo-jh-new.png" class="h-[300px]" />
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
    <v-window-item value="struktur">
      <v-container class="bg-light-gray rounded-lg pa-16">
        <v-row align="center">
          <v-col align="start">
            <AppTextH2 class="pb-5">Struktur Layanan</AppTextH2>
            <p>
              PT Jejak Hasanah memberikan layanan jasa transportasi seperti
              transportasi ringan hingga transportasi berat. Selain itu PT Jejak
              Hasanah juga menyediakan layanan periklanan seperti Billboard,
              Videotron, dan Branding ads.
            </p>
          </v-col>
          <v-col align="center">
            <img src="/public/img/struktur.png" class="h-[300px]" />
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
    <v-window-item value="sertifikasi">
      <v-container class="bg-light-gray rounded-lg pa-16">
        <v-row align="center">
          <v-col align="start">
            <AppTextH2 class="pb-5">Sertifikasi</AppTextH2>
            <p>
              PT Jejak Hasanah telah tersertifikasi Risk-Based Business yang
              diterbitkan oleh pemerintah. Dengan sertifikasi ini, Jejak Hasanah
              selalu mendedikasikan dalam menjamin standar kualitas dan
              keselamatan para pekerja serta secara aktif berkontribusi dalam
              kegiatan sosial.
            </p>
          </v-col>
          <v-col align="center">
            <img src="/public/img/sertifikasi.png" class="h-[400px]" />
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
    desc: "PT Jejak Hasanah adalah perusahaan yang bergerak di bidang layanan transportasi dan periklanan. Didirikan pada tahun 2008, PT Jejak Hasanah telah menjalin kerja sama dengan berbagai perusahaan, baik di tingkat daerah maupun nasional.",
    img: "/public/img/logo-jh-new.png",
  },
  {
    value: "struktur",
    title: "Struktur Layanan",
    desc: "PT Jejak Hasanah memberikan layanan jasa transportasi seperti transportasi ringan hingga transportasi berat. Selain itu PT Jejak Hasanah juga menyediakan layanan periklanan seperti Billboard, Videotron, dan Branding ads.",
    img: "/public/img/struktur.png",
  },
  {
    value: "sertifikasi",
    title: "Sertifikasi",
    desc: "PT Jejak Hasanah telah tersertifikasi Risk-Based Business yang diterbitkan oleh pemerintah. Dengan sertifikasi ini, Jejak Hasanah selalu mendedikasikan dalam menjamin standar kualitas dan keselamatan para pekerja serta secara aktif berkontribusi dalam kegiatan sosial.",
    img: "/public/img/sertifikasi.png",
  },
];

const tabs = computed(() => options);
</script>
