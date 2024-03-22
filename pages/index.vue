<template>
  <!-- Hero Section -->
  <section id="Hero Header" class="relative h-[85vh]">
    <div
      class="h-full bg-cover bg-center"
      style="background-image: url('/img/bg-jh.jpeg')"
    >
      <div
        class="text-white h-full bg-gradient-to-r from-JH-black to-transparent bg-opacity-5"
      >
        <div
          class="w-2/3 flex h-full items-start px-40 justify-center flex-col gap-5"
        >
          <h1 class="text-6xl font-dsp">
            JEJAK HASANAH <br />InsyaAllah Amanah
          </h1>
          <p class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitatio
          </p>
          <ButtonPrimary />
        </div>
      </div>
    </div>
  </section>
  <section id="client" class="flex gap-20 items-center justify-center py-10">
    <div v-for="(item, index) in client">
      <NuxtImg :src="item" format="webp" sizes="sm:900px" />
    </div>
  </section>
  <section class="container py-10">
    <div class="flex justify-center items-center gap-20">
      <div id="picture" class="w-1/2 flex items-end justify-end gap-12">
        <NuxtImg
          src="img/bus.png"
          height="900"
          class="rounded-xl"
          format="webp"
        />
        <NuxtImg src="img/bus.png" height="241" class="rounded-xl" />
      </div>
      <div id="Text" class="w-1/2 relative">
        <div class="flex flex-col items-start">
          <p>About us</p>
          <h1 class="text-4xl font-extrabold font-dms text-JH-blue">
            See Our Works Activity
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
          <ButtonPrimary class="flex" />
        </div>
        <NuxtImg
          src="img/logo-shade.png"
          class="-z-10 absolute right-0 top-0"
          width="200"
        />
      </div>
    </div>
  </section>

  <div class="flex justify-center">
    <section id="ourservices" class="container">
      <div class="bg-neutral-100">
        <div class="flex p-20">
          <div class="flex items-start flex-col w-1/2">
            <h1 class="text-4xl font-extrabold text-JH-blue">Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dolor quam, placerat sit amet eros quis, scelerisque lobortis
              diam. Duis tincidunt
            </p>
            <ButtonPrimary />
          </div>
          <div class="w-1/2">
            <!-- <UCarousel
              v-slot="{ item }"
              :items="items"
              :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
              indicators
              class="rounded-lg overflow-hidden"
            >
              <img :src="item" class="w-full" draggable="false" />
            </UCarousel> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      client: [
        "img/telkom.png",
        "img/clasmil.png",
        "img/pama.png",
        "img/gudgar.png",
        "img/djarum.png",
      ],
      items: [
        "https://picsum.photos/600/600?random=1",
        "https://picsum.photos/600/600?random=2",
        "https://picsum.photos/600/600?random=3",
        "https://picsum.photos/600/600?random=4",
        "https://picsum.photos/600/600?random=5",
        "https://picsum.photos/600/600?random=6",
      ],
    };
  },
};
</script>
