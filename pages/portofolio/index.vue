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
  <v-row justify="center" class="mt-4 mb-4">
    <v-col cols="12" align="center">
      <AppTextH2 id="layanan">Jejak Hasanah Project</AppTextH2>
    </v-col>
    <v-col>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
        quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
        tincidunt
      </p>
    </v-col>
  </v-row>
  <v-container>
    <PortofolioTabs />
  </v-container>
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
