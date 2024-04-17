<template>
  <section class="bg-JH-black text-white">
    <div class="flex items-center h-[90vh] pr-0">
      <div class="md:w-1/2 flex flex-col items-start gap-4 px-24">
        Tentang Perusahaan
        <h1 class="text-5xl font-semibold">
          Kami Menyediakan Layanan Transportasi dan Periklanan
        </h1>
        <AppButtonPrimary label="Pelajari lebih lanjut" />
      </div>
      <div class="h-full w-1/2 relative">
        <NuxtImg
          src="/img/bus.png"
          class="rounded-t-xl absolute bottom-0 left-5 h-[80%] object-cover"
          format="webp"
        />
        <NuxtImg
          src="/img/bus.png"
          class="rounded-tl-xl absolute bottom-0 right-0 h-[60%] object-cover"
          format="webp"
        />
      </div>
    </div>
  </section>
</template>
