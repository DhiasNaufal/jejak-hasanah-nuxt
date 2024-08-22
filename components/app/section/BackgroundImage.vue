<template>
  <div class="bg-cover bg-center" :style="img">
    <slot />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  img: {
    type: String,
    default: "background-image: url('/img/home/homeBanner.png')",
  },
});

const img = computed(() => props.img);
</script>
