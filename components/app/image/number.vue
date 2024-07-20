<template>
  <div class="flex gap-10 items-center">
    <div
      class="bg-cover bg-center h-[164px] w-[312px] rounded-xl relative"
      :style="img"
    >
      <div
        class="bg-secondary absolute -right-5 top-1/3 h-14 w-14 flex items-center justify-center text-3xl font-extrabold italic rounded-md"
      >
        {{ number }}
      </div>
    </div>
    <div class="w-1/2 flex flex-col gap-2 items-start">
      <AppTextH5 class="text-text">{{ title }}</AppTextH5>
      <p>
        {{ desc }}
      </p>
      <NuxtLink :to="path">
        <v-btn variant="outlined" color="primary">Lihat Detail</v-btn>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: "background-image: url('/img/home/homeBanner.png')",
    },
    number: {
      type: String,
      default: "1",
    },
    title: {
      type: String,
      default: "Title",
    },
    desc: {
      type: String,
      default:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam.",
    },
    path: {
      type: String,
      default: "/",
    },
  },
};
</script>
