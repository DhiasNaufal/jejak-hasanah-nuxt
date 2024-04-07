<template>
  <AppHero />
  <main class="container">
    <section class="py-16">
      <div class="flex justify-between">
        <h1 class="font-bold animate-fade-down w-1/3">
          Layanan Pengiklanan Kami
        </h1>
        <p class="text-end w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
          quam, placerat sit amet eros quis,
        </p>
      </div>
      <section>
        <div
          v-for="item in services"
          class="w-full flex items-start duration-500 bg-neutral-100 hover:bg-JH-blue hover:scale-105 hover:text-white px-12 py-6 rounded-3xl mb-3"
          @mouseover="isHover = true"
          @mouseleave="isHover = false"
        >
          <h1 class="w-[10%]">01</h1>
          <div class="w-[60%]">
            <h1>Billboard</h1>
            <div class="flex flex-col items-start gap-5">
              <!-- :class="{
                hidden: !isHover,
                'block animate-fade-down animate-duration-500': isHover,
              }" -->
              <p class="pr-28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dolor quam, placerat sit amet eros quis, scelerisque lobortis
                diam. Duis tincidunt interdum tortor, non fringilla mauris
                molestie at
              </p>
              <AppButtonPrimary label="Pelajari lebih lanjut" />
            </div>
          </div>
          <div class="w-[30%] h-full flex justify-end items-center">
            <NuxtImg
              src="img/bus1.jpg"
              width="230"
              height="100"
              class="rounded-3xl hover:scale-110"
            />
          </div>
        </div>
      </section>
    </section>

    <section class="pb-16">
      <div class="bg-JH-blue text-white rounded-3xl p-10 px-16">
        <h1>Lihat Portofolio Porject Kami</h1>
        <div class="flex gap-20 items-center pt-5">
          <NuxtImg src="img/bus1.jpg" class="h-[300px] rounded-3xl" />
          <div class="flex flex-col items-start gap-4">
            <p class="pr-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dolor quam, placerat sit ame Ada LIght Vehicle ada Bus
              blabalbalbalballa
            </p>
            <AppButtonPrimary label="Pelajari lebih lanjut" />
            <div class="flex gap-5 pt-4">
              <div class="flex flex-col justify-center">
                <h1>50+</h1>
                <p class="text-flex">Client</p>
              </div>
              <div class="flex flex-col justify-center">
                <h1>50+</h1>
                <p class="text-flex">Client</p>
              </div>
              <div class="flex flex-col justify-center">
                <h1>50+</h1>
                <p class="text-flex">Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isHover: false,
      services: [
        {
          no: "01",
          title: "Billboard",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulladolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt interdum tortor, non fringilla maurismolestie at",
        },
        {
          no: "02",
          title: "Billboard",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulladolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt interdum tortor, non fringilla maurismolestie at",
        },
      ],
    };
  },
};
</script>
