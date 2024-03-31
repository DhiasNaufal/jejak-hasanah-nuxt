<template>
  <!-- Hero Section -->
  <section id="Hero Header" class="relative h-[85vh]">
    <div
      class="h-full bg-cover bg-center"
      style="background-image: url('/img/bus1.jpg')"
    >
      <div
        class="text-white h-full bg-gradient-to-r from-JH-black to-transparent bg-opacity-5"
      >
        <div
          class="w-2/3 flex h-full items-start px-40 justify-center flex-col gap-5 relative"
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
        <div
          class="h-1/6 bg-JH-black bg-opacity-70 absolute right-0 justify-center gap-32 bottom-0 flex px-32"
        >
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-5xl">5+</h1>
            <p>Years Of Serving</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-5xl">50+</h1>
            <p>Project Done</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-5xl">100+</h1>
            <p>Team Members</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-5xl">40+</h1>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Container -->
  <div class="flex flex-col items-center">
    <div class="container">
      <!-- Client -->
      <section
        id="client"
        class="flex gap-20 items-center justify-center py-10"
      >
        <div v-for="(item, index) in client">
          <NuxtImg :src="item" format="webp" sizes="sm:900px" />
        </div>
      </section>

      <!-- Works Activity -->
      <section>
        <div class="flex justify-center items-center gap-20 py-16">
          <div id="picture" class="w-1/2 flex items-end justify-end gap-12">
            <NuxtImg
              src="img/bus.png"
              height="900"
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
          <div id="Text" class="w-1/2 relative">
            <div class="flex flex-col items-start">
              <p>About us</p>
              <h1 class="text-4xl font-extrabold font-dms text-JH-blue">
                See Our Works Activity
              </h1>
              <p class="font-thin pt-3 pb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dolor quam, placerat sit amet eros quis, scelerisque lobortis
                diam. Duis tincidunt interdum tortor, non fringilla mauris
                molestie at. Duis eu consectetur ipsum. In fringilla ut purus eu
                facilisis. Vivamus sit amet erat sed ligula aliquam pulvinar non
                non ipsum. Nullam et consectetur elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
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

      <!-- Services -->
      <section id="services" class="py-16">
        <div class="bg-neutral-100 rounded-2xl">
          <div class="flex py-24 pb-36">
            <div
              class="flex items-start justify-center flex-col w-1/2 gap-5 pl-16"
            >
              <h1 :class="styling.title">Our Services</h1>
              <p class="w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dolor quam, placerat sit amet eros quis, scelerisque lobortis
                diam. Duis tincidunt
              </p>
              <ButtonPrimary />
            </div>
            <div class="w-2/4">
              <UCarousel
                :items="items"
                :ui="{ item: 'basis-4/5' }"
                arrows
                :prev-button="{
                  color: 'red',
                  icon: 'i-heroicons-chevron-left-16-solid',
                  class: 'left-[6%] top-[112%] rounded-none p-2',
                }"
                :nextButton="{
                  color: 'red',
                  icon: 'i-heroicons-chevron-right-16-solid',
                  class: 'right-[82%] top-[112%] rounded-none p-2 ',
                }"
              >
                <div
                  class="relative w-full h-[300px] mt-0 flex items-end justify-end mx-10 bg-cover rounded-xl"
                  style="background-image: url('/img/bg-jh.jpeg')"
                >
                  <div
                    class="h-full w-full bg-black bg-gradient-to-t from-JH-black to-transparent bg-opacity-5 rounded-xl flex flex-col text-white justify-end p-5"
                  >
                    <h4 class="text-2xl font-bold">Trasnportation Services</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla dolor quam.
                    </p>
                  </div>
                </div>
              </UCarousel>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="py-16">
        <div class="flex flex-col text-center items-center pb-16">
          <h1 :class="styling.title">Why Choose Us?</h1>
          <p class="text-lg text-neutral-500 w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
            quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
            tincidunt
          </p>
        </div>
        <div class="relative">
          <NuxtImg
            src="img/logo-shade.png"
            class="-z-10 absolute right-0 top-0"
            width="400"
          />
          <div v-for="(item, index) in whyUs" :key="index" class="">
            <div class="flex justify-center gap-10 pb-10">
              <div class="relative">
                <NuxtImg src="img/dummy.png" width="400" class="rounded-2xl" />
                <div
                  class="absolute bottom-1/3 -right-5 bg-JH-blue w-[70px] h-[70px] text-white flex items-center justify-center text-5xl rounded-lg font-extrabold italic"
                >
                  {{ item.no }}
                </div>
              </div>
              <div class="w-2/5 flex flex-col justify-center">
                <h1 class="text-2xl font-semibold">Harga yang Murah</h1>
                <p class="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  dolor quam, placerat sit amet eros quis, scelerisque lobortis
                  diam. Duis tincidunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimony -->
      <section class="py-16">
        <div class="text-center pb-16">
          <h1 :class="styling.title">Let's See what've been working on</h1>
          <p class="leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <UCarousel
          :items="items"
          :ui="{ item: 'basis-3/4' }"
          class="w-[1000px] mx-auto rounded-lg"
          arrows
          :prev-button="{
            color: 'red',
            icon: 'i-heroicons-chevron-left-16-solid',
            class: 'left-[46%] top-2 rounded-none p-2',
          }"
          :nextButton="{
            color: 'red',
            icon: 'i-heroicons-chevron-right-16-solid',
            class: 'right-[46%] top-2 rounded-none p-2 ',
          }"
        >
          <div
            class="relative w-full h-[300px] mt-10 flex items-end justify-end mx-5"
          >
            <div class="w-1/2 h-full flex items-end justify-end">
              <NuxtImg src="/img/bg-jh.jpeg" class="h-full" />
            </div>
            <div
              class="bg-JH-blue h-full w-9/12 left-0 absolute testi"
              id="ijo"
            >
              <div class="flex flex-col text-white px-12 justify-center h-full">
                <h1 class="text-white text-4xl font-bold">Jumbotron Jl. anu</h1>
                <p class="pr-16">
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  dolor quam, placerat sit amet eros quis, scelerisque lobortis
                  diam. Duis tincidunt
                </p>
              </div>
            </div>
          </div>
        </UCarousel>
      </section>
    </div>
  </div>
</template>
<style>
.testi {
  clip-path: polygon(0% 0, 100% 0%, 90% 100%, 0% 100%);
}
</style>
<script>
export default {
  data() {
    return {
      styling: {
        title: "text-4xl font-extrabold text-JH-blue leading-10",
      },
      whyUs: [
        {
          no: 1,
          title: "Harga yang Murah",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt",
        },
        {
          no: 2,
          title: "Harga yang Murah",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt",
        },
        {
          no: 3,
          title: "Harga yang Murah",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt",
        },
      ],
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
