<template>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
            quam, placerat sit amet eros quis
          </p>
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
    };
  },
};
</script>
