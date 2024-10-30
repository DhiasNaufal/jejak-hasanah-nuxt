<template>
  <v-container class="pa-0">
    <section
      class="h-full bg-cover bg-center rounded-tl-3xl rounded-tr-3xl"
      style="background-image: url('/img/home/footerBanner.jpeg')"
    >
      <div
        class="opacity flex flex-col items-center justify-center py-16 gap-5 rounded-tl-3xl rounded-tr-3xl"
      >
        <p class="text-3xl font-semibold text-white">
          Hubungi kami untuk obrolan lebih lanjut
        </p>
        <div class="flex gap-3">
          <AppButtonPrimary class="text-subtitle-1">{{
            kontak.nomor
          }}</AppButtonPrimary>
          <AppButtonPrimary class="text-subtitle-1">{{
            kontak.email
          }}</AppButtonPrimary>
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
  background-color: rgba(47, 49, 139, 0.85);
}
</style>
