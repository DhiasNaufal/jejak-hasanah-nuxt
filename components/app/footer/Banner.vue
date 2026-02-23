<template>
  <v-container class="pa-0">
    <section
      class="h-full bg-cover bg-center rounded-tl-3xl rounded-tr-3xl"
      style="background-image: url(&quot;/img/home/footerBanner.jpeg&quot;)"
    >
      <div
        class="opacity flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 gap-3 sm:gap-4 md:gap-5 rounded-tl-3xl rounded-tr-3xl px-4 sm:px-6 md:px-8"
      >
        <p
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center"
        >
          Hubungi kami untuk obrolan lebih lanjut
        </p>
        <div class="flex gap-3 w-full max-w-md">
          <AppButtonPrimary class="text-subtitle-2 sm:text-subtitle-1 flex-1">
            {{ kontak.nomor }}
          </AppButtonPrimary>
          <AppButtonPrimary class="text-subtitle-2 sm:text-subtitle-1 flex-1">
            {{ kontak.email }}
          </AppButtonPrimary>
        </div>
      </div>
    </section>
  </v-container>
</template>

<script lang="ts" setup>
import informationMock from "~/app/mock/information.mock";
const kontak = informationMock.kontak;
</script>

<style scoped>
.opacity {
  background-color: rgba(47, 49, 139, 0.85);
}

/* Optional: Adjust background image position on mobile */
@media (max-width: 640px) {
  section {
    background-position: center center;
  }
}
</style>
