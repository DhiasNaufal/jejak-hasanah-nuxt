<template>
  <section class="flex items-center relative justify-center pt-16">
    <NuxtImg
      src="img/logo-shade.png"
      class="-z-10 absolute left-0 bottom-0"
      width="200"
    />
    <div class="">
      <h1 class="font-extrabold text-JH-blue">Our Services</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
        quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
        tincidunt
      </p>
    </div>
    <div class="relative">
      <div v-for="(item, index) in whyUs" :key="index" class="">
        <div class="flex justify-center gap-10 pb-10">
          <div class="relative">
            <NuxtImg src="img/dummy.png" width="300" class="rounded-2xl" />
            <div
              class="absolute bottom-1/3 -right-5 bg-JH-blue w-[50px] h-[50px] text-white flex items-center justify-center text-3xl rounded-lg font-extrabold italic"
            >
              {{ item.no }}
            </div>
          </div>
          <div class="w-3/5 flex flex-col justify-center">
            <h1 class="text-2xl font-semibold">Advertising</h1>
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
</template>
<script>
export default {
  data() {
    return {
      whyUs: [{ no: 1 }, { no: 1 }],
    };
  },
};
</script>
