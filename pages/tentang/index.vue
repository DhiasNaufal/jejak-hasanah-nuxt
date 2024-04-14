<template>
  <main>
    <AppHero />
    <section class="container py-12">
      <UTabs
        :items="items"
        :ui="{
          list: {
            width: 'md:w-1/2',
            rounded: 'rounded-full',
            marker: {
              rounded: 'rounded-full',
            },
            tab: {
              rounded: 'rounded-full',
            },
          },
        }"
        class="flex flex-col justify-center items-center"
      >
        <template #tentang> <PerusahaanTentang /> </template>
        <template #struktur> <PerusahaanTentangLayanan /></template>
        <template #sertifikasi> <PerusahaanTentangSertifikasi /> </template>
      </UTabs>
    </section>

    <section class="container">
      <PerusahaanTimeline />
    </section>
  </main>
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
        {
          slot: "sertifikasi",
          label: "Sertifikasi",
        },
      ],
    };
  },
};
</script>
