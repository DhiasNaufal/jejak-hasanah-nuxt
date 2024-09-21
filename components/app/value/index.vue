<template>
  <div class="flex gap-8">
    <div
      class="text-black flex flex-col items-start"
      v-for="(item, index) in items"
      :key="index"
    >
      <AppTextH2 class="text-black">{{ item.value }}</AppTextH2>
      <p class="text-neutral-500">{{ item.desc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: [
        { value: "16+", desc: "Tahun Berdiri" },
        { value: "98%", desc: "Kepuasan Pelanggan" },
        { value: "75+", desc: "Proyek dikerjakan" },
      ],
    },
  },
};
</script>
