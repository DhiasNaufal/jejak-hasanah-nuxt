<template>
  <div class="bg-cover bg-center" :style="style">
    <slot />
  </div>
</template>
<script>
export default {
  data() {
    return {
      style: "background-image: url('/img/home/homeBanner.png')",
    };
  },
};
</script>
