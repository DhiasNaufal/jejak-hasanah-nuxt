<template>
  <!-- Hero Section -->
  <div class="container">
    <section class="h-screen flex flex-col">
      <div
        class="flex flex-col md:flex-row gap-10 h-1/2 items-center justify-center mb-20 md:mb-10 mt-10 md:mt-0"
      >
        <h1
          class="text-5xl text-center md:text-8xl 2xl:text-9xl font-semibold md:text-start"
        >
          TRANSPORT SOLUTION
        </h1>
        <div
          class="flex flex-col md:items-start items-center justify-start gap-10"
        >
          <NuxtImg
            src="/img/bus1.jpg"
            width="230"
            height="100"
            class="rounded-full"
          />

          <p class="text-md w-4/5 text-center md:text-start">
            kami bangga dengan menyediakan transportasi dan periklanan terbaik
            yang tersedia di Indonesia
          </p>
        </div>
      </div>
      <div
        class="w-full bg-cover h-1/2 rounded-t-[70px] relative"
        style="background-image: url('/img/bus1.jpg')"
      >
        <UButton
          :ui="{ rounded: 'rounded-full' }"
          class="right-20 md:right-36 -top-12 absolute"
          color="red"
        >
          <UIcon
            name="i-heroicons-arrow-up-right-16-solid"
            class="text-[70px] md:text-[150px] rounded-full"
          />
        </UButton>
      </div>
    </section>
  </div>

  <!-- Client -->
  <section
    id="client"
    class="flex gap-20 items-center justify-center py-10 bg-neutral-100"
  >
    <div v-for="(item, index) in client" :key="index">
      <NuxtImg :src="item" format="webp" />
    </div>
  </section>

  <div class="container">
    <!-- Works Activity -->
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
              non ipsum. Nullam et consectetur elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <!-- <ButtonPrimary class="flex" /> -->
            <AppButtonPrimary label="Hubungi" />
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
    <section id="services" class="mb:py-16">
      <div class="bg-neutral-100 rounded-2xl">
        <div class="flex flex-col md:flex-row py-16 pb-28 md:py-24 md:pb-36">
          <div
            class="flex items-start justify-center flex-col md:w-1/2 gap-5 md:pl-16 px-10 mb-5"
          >
            <h1 :class="styling.title">Our Services</h1>
            <p class="w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dolor quam, placerat sit amet eros quis, scelerisque lobortis
              diam. Duis tincidunt
            </p>
            <ButtonPrimary />
          </div>
          <div class="md:w-2/4">
            <UCarousel
              :items="items"
              :ui="{ item: 'w-full' }"
              arrows
              :prev-button="{
                color: 'red',
                icon: 'i-heroicons-chevron-left-16-solid',
                class: 'left-[36%] md:left-[6%] top-[112%] rounded-none p-2',
              }"
              :nextButton="{
                color: 'red',
                icon: 'i-heroicons-chevron-right-16-solid',
                class:
                  'right-[36%] md:right-[77%] top-[112%] rounded-none p-2 ',
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
      <div class="flex flex-col text-center items-center pb-16 gap-3">
        <h1 :class="styling.title">Why Choose Us?</h1>
        <p class="text-lg text-neutral-500 md:w-3/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
          quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
          tincidunt
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-2 relative">
        <NuxtImg
          src="img/logo-shade.png"
          class="-z-10 absolute right-0 top-10"
          width="250"
        />
        <div v-for="(item, index) in whyUs" class="">
          <div class="flex flex-col items-center text-center gap-1 py-8 px-5">
            <UBadge class="py-2 bg-JBlue-100">
              <UIcon
                name="i-heroicons-check-badge-16-solid"
                class="text-3xl text-JH-blue"
              />
            </UBadge>
            <h1 class="text-2xl">Title lalal yeyeye</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dolor quam, placerat sit amet eros quis
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimony -->
    <section class="py-16">
      <div class="text-center pb-16">
        <h1 :class="styling.title">Let's See what we've been working on</h1>
        <p class="leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <UCarousel
        :items="items"
        :ui="{ item: 'w-full' }"
        class="mx-auto rounded-lg"
        arrows
        :prev-button="{
          color: 'red',
          icon: 'i-heroicons-chevron-left-16-solid',
          class: 'left-[46%] -top-8 rounded-none p-2',
        }"
        :nextButton="{
          color: 'red',
          icon: 'i-heroicons-chevron-right-16-solid',
          class: 'right-[46%] -top-8 rounded-none p-2 ',
        }"
      >
        <div
          class="relative w-full h-[400px] mt-0 flex items-end justify-end mx-10 bg-cover rounded-xl"
          style="background-image: url('/img/bg-jh.jpeg')"
        >
          <div
            class="h-full w-full bg-black bg-gradient-to-t from-JH-black to-transparent bg-opacity-5 rounded-xl flex flex-col text-white justify-end p-5"
          >
            <h4 class="text-2xl font-bold">Trasnportation Services</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dolor quam.
            </p>
          </div>
        </div>
        <!-- <div
          class="relative w-full h-[300px] mt-10 flex items-end justify-end mx-5"
        >
          <div class="w-1/2 h-full flex items-end justify-end">
            <NuxtImg src="/img/bg-jh.jpeg" class="h-full" />
          </div>
          <div class="bg-JH-blue h-full w-9/12 left-0 absolute testi" id="ijo">
            <div class="flex flex-col text-white px-12 justify-center h-full">
              <h1 class="text-white text-4xl font-bold">Jumbotron Jl. anu</h1>
              <p class="pr-16">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dolor quam, placerat sit amet eros quis, scelerisque lobortis
                diam. Duis tincidunt
              </p>
            </div>
          </div>
        </div> -->
      </UCarousel>
    </section>
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
