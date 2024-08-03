<template>
  <div
    class="h-[100px] w-1/2 trapezoid absolute bottom-0 right-0 px-28 flex gap-16 items-center justify-center"
  >
    <div
      class="text-white flex flex-col items-center"
      v-for="(item, index) in items"
      :key="index"
    >
      <AppTextH2 class="text-white">{{ item.value }}</AppTextH2>
      <p class="text-sm 2xl:text-base">{{ item.desc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backgroundUrl: "/img/home/homeBanner.png",
      items: [
        { value: "19+", desc: "Tahun Berdiri" },
        { value: "98%", desc: "Kepuasan Pelanggan" },
        { value: "75+", desc: "Proyek dikerjakan" },
      ],
    };
  },
};
</script>
