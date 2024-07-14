<template>
  <div class="bg-cover bg-center" :style="img">
    <div class="gradient-hero h-full">
      <slot />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  img: {
    type: String,
    default: "background-image: url('/img/home/homeBanner.png')",
  },
});

const img = computed(() => props.img);
</script>
