<template>
  <div class="flex gap-20 items-center justify-center py-10 bg-neutral-100">
    <div v-for="(item, index) in client" :key="index">
      <NuxtImg :src="item" format="webp" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      client: [
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
