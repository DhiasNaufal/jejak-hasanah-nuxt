<template>
  <section class="relative">
    <NuxtImg
      class="absolute z-10 md:-left-32 -left-10 -bottom-5 md:-bottom-16 xl:-left-28"
      src="/img/lengkung.png"
      format="webp"
      sizes="180px sm:250px 2xl:300px"
    />
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-20 py-10 md:py-16"
    >
      <div
        id="picture"
        class="md:w-1/2 flex items-end justify-end md:gap-12 gap-5"
      >
        <NuxtImg
          src="img/bus.png"
          sizes="md:590 300"
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
      <div id="Text" class="md:w-1/2 relative">
        <div class="flex flex-col items-start">
          <p>Tentang Kami</p>
          <h1 class="text-4xl font-extrabold font-dms text-JH-blue">
            PT. Jejak Hasanah
          </h1>
          <p class="font-thin pt-3 pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
            quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
            tincidunt interdum tortor, non fringilla mauris molestie at. Duis eu
            consectetur ipsum. In fringilla ut purus eu facilisis. Vivamus sit
            amet erat sed ligula aliquam pulvinar non non ipsum. Nullam et
            consectetur elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <NuxtLink to="/tentang">
            <AppButtonPrimary label="Pelajari lebih lanjut" />
          </NuxtLink>
        </div>
        <NuxtImg
          src="img/logo-shade.png"
          class="-z-10 absolute right-0 top-0"
          width="200"
        />
      </div>
    </div>
  </section>
</template>
