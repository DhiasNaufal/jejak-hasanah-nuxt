<template>
  <div class="bg-cover bg-center h-5/6 w-5/6 rounded-0" :style="img">
    <div class="portfolio-card h-full rounded-0">
      <div class="h-full flex flex-col justify-center w-7/12 p-10">
        <AppTextH2 class="text-white font-semibold">{{ title }}</AppTextH2>
        <p class="text-white">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  img: {
    type: String,
    default: "background-image: url('/img/home/homeBanner.png')",
  },
  title: {
    type: String,
    default: "Site Palembang (Muara Enim)",
  },
  desc: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt",
  },
});

const img = computed(() => props.img);
</script>
