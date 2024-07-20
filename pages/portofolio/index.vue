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
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          slot: "tentang",
          label: "Tentang perusahaan",
        },
        {
          slot: "struktur",
          label: "Struktur Layanan",
        },
      ],
    };
  },
};
</script>
