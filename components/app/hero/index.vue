<template>
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
</template>
