<template>
  <AppCardUnique />
  <section class="flex items-center relative justify-center pt-16">
    <NuxtImg
      src="img/logo-shade.png"
      class="-z-10 absolute left-0 bottom-0"
      width="200"
    />
    <div class="w-1/2">
      <h1 class="font-extrabold text-JH-blue">Layanan Kami</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
        quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
        tincidunt
      </p>
    </div>
    <div class="flex flex-col">
      <div v-for="(item, index) in whyUs" :key="index" class="">
        <AppCardUnique :no="item.no" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      whyUs: [{ no: "1" }, { no: "2" }],
    };
  },
};
</script>
