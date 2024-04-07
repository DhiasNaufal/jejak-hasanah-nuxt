<template>
  <main>
    <section class="bg-JH-black text-white">
      <div class="flex container items-center h-[90vh]">
        <div class="md:w-1/2 flex flex-col items-start gap-4">
          About Company
          <h1 class="text-6xl font-semibold">
            Kami Menyediakan Layanan Transportasi dan Periklanan
          </h1>
          <AppButtonPrimary label="Pelajari lebih lanjut" />
        </div>
        <div
          id="picture"
          class="md:w-1/2 flex items-end justify-end md:gap-12 gap-5"
        >
          <NuxtImg
            src="/img/bus.png"
            heigth="600"
            width="700"
            class="rounded-xl"
            format="webp"
          />
          <NuxtImg
            src="img/bus.png"
            height="241"
            class="rounded-xl"
            format="webp"
          />
        </div>
      </div>
    </section>
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
        <template #tentang> <Tentang /> </template>
        <template #struktur> <Tentang /></template>
        <template #sertifikasi> <Tentang /> </template>
      </UTabs>
    </section>

    <section class="container">
      <div class="flex flex-col items-center">
        <h1 class="text-JH-blue font-semibold">Sejarah perusahaan</h1>
        <p>
          Perjalanan kami dimotivasi untuk menjadi perusahaan yang xxx & xxxx
        </p>
      </div>
    </section>
    <section class="container">
      <AppBannerFooter />
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
