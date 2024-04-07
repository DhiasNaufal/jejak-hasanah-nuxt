<template>
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
          <h4 class="text-2xl font-bold">Transportation Services</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
            quam.
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
      items: [
        "img/telkom.png",
        "img/clasmil.png",
        "img/pama.png",
        "img/gudgar.png",
        "img/djarum.png",
      ],
    };
  },
};
</script>
