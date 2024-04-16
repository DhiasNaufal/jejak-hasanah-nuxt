<template>
  <AppHero />
  <main class="container">
    <section class="pt-16">
      <div class="flex justify-between">
        <h1 class="font-bold animate-fade-down w-1/3">
          Layanan Pengiklanan Kami
        </h1>
        <p class="text-end w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
          quam, placerat sit amet eros quis,
        </p>
      </div>
    </section>
    <section>
      <div
        v-for="item in services"
        class="w-full flex items-start duration-500 bg-neutral-100 hover:bg-JH-blue hover:scale-105 hover:text-white pl-12 px-6 py-6 rounded-3xl mb-1"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
      >
        <h1 class="w-[10%]">01</h1>
        <div class="w-[60%]">
          <h1>Billboard</h1>
          <div class="flex flex-col items-start gap-5">
            <p class="pr-28">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dolor quam, placerat sit amet eros quis, scelerisque lobortis
              diam. Duis tincidunt interdum tortor, non fringilla mauris
              molestie at
            </p>
            <AppButtonPrimary label="Pelajari lebih lanjut" />
          </div>
        </div>
        <div class="w-[30%] h-full flex justify-end items-center pr-0">
          <img src="/img/bus1.jpg" class="rounded-3xl object-cover h-[200px]" />
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="p-10 bg-JH-blue text-white rounded-3xl">
        <h1>Lihat Portofolio Project Kami</h1>
        <div class="flex">
          <img
            src="/img/bus1.jpg"
            class="w-1/2 h-[300px] object-cover rounded-3xl"
          />
          <div class="w-1/2 p-10 h-[300px] flex flex-col gap-10 items-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dolor quam, placerat sit ame Ada LIght Vehicle ada Bus
              blabalbalbalballa
            </p>
            <AppButtonPrimary label="Pelajari lebih lanjut" />
            <div class="flex gap-3">
              <div
                v-for="(item, index) in Jhensen"
                class="flex flex-col justify-center items-center"
              >
                <h1 class="md:text-5xl">{{ item.value }}</h1>
                <p class="md:text-base text-xs">{{ item.desc }}</p>
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
      Jhensen: [
        { value: "50+", desc: "Project Done" },
        { value: "100+", desc: "Project Done" },
        { value: "5+", desc: "Project Done" },
        { value: "5+", desc: "Project Done" },
      ],
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
