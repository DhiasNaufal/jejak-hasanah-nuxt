<template>
  <div class="flex gap-3">
    <div
      class="text-white flex flex-col items-center"
      v-for="(item, index) in items"
      :key="index"
    >
      <AppTextH2 class="text-white">{{ item.value }}</AppTextH2>
      <p>{{ item.desc }}</p>
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
