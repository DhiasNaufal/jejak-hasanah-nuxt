<template>
  <v-container class="pa-0">
    <section
      class="h-full bg-cover bg-center rounded-tl-3xl rounded-tr-3xl"
      style="background-image: url('/img/home/footerBanner.jpeg')"
    >
      <div
        class="opacity flex flex-col items-center justify-center py-16 gap-5 rounded-tl-3xl rounded-tr-3xl"
      >
        <h1 class="text-4xl font-semibold text-white">
          Hubungi kami untuk obrolan lebih lanjut
        </h1>
        <div class="flex gap-3">
          <AppButtonPrimary>{{ kontak.nomor }}</AppButtonPrimary>
          <AppButtonPrimary>{{ kontak.email }}</AppButtonPrimary>
        </div>
      </div>
    </section>
  </v-container>
</template>
<script lang="ts" setup>
import informationMock from "~/app/mock/information.mock";
const kontak = informationMock.kontak;
</script>
<style>
.opacity {
  background-color: rgba(47, 49, 139, 0.6);
}
</style>
