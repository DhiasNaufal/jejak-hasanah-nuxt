<template>
  <section id="services" class="mb:py-16">
    <div class="bg-neutral-100 rounded-2xl">
      <div class="flex flex-col md:flex-row py-16 pb-28 md:py-24 md:pb-36">
        <div
          class="flex items-start justify-center flex-col md:w-1/2 gap-5 md:pl-16 px-10 mb-5"
        >
          <h1 :class="styling.title">Our Services</h1>
          <p class="w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
            quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
            tincidunt
          </p>
          <AppButtonPrimary label="Pelajari lebih lanjut" />
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
              class: 'right-[36%] md:right-[77%] top-[112%] rounded-none p-2 ',
            }"
          >
            <div
              class="relative w-full h-[300px] mt-0 flex items-end justify-end mx-10 bg-cover rounded-xl"
              style="background-image: url('/img/bg-jh.jpeg')"
            >
              <div
                class="h-full w-full bg-black bg-gradient-to-t from-JH-black to-transparent bg-opacity-5 rounded-xl flex flex-col text-white justify-end p-5"
              >
                <h4 class="text-2xl font-bold">Tranportation Services</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  dolor quam.
                </p>
              </div>
            </div>
          </UCarousel>
        </div>
      </div>
    </div>
  </section>
</template>
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
