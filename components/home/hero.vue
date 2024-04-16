<template>
  <section id="Hero Header" class="relative h-[85vh]">
    <div
      class="h-full bg-cover bg-center"
      style="background-image: url('/img/bus1.jpg')"
    >
      <div
        class="text-white h-full bg-JH-black md:bg-gradient-to-r md:from-JH-black md:to-transparent md:bg-opacity-5 bg-opacity-55"
      >
        <div
          class="md:w-2/3 flex md:h-full h-[80%] md:items-start items-end md:px-40 px-10 justify-center flex-col gap-5 relative"
        >
          <h1 class="md:text-6xl font-dsp font-bold text-end md:text-start">
            JEJAK HASANAH <br />InsyaAllah Amanah
          </h1>
          <p class="text-end md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitatio
          </p>
          <AppButtonPrimary label="Hubungi Kami" />
        </div>

        <div
          class="md:h-1/6 md:triangle w-full bg-JH-black bg-opacity- absolute right-0 justify-center bottom-0 grid md:grid-cols-4 grid-cols-2 gap-2 py-2"
        >
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
  </section>
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
    };
  },
};
</script>
