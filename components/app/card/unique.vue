<template>
  <div class="flex justify-center gap-10 pb-10">
    <div class="relative">
      <NuxtImg src="img/dummy.png" width="300" class="rounded-2xl" />
      <div
        class="absolute bottom-1/3 -right-5 bg-JH-blue w-[50px] h-[50px] text-white flex items-center justify-center text-3xl rounded-lg font-extrabold italic"
      >
        {{ no }}
      </div>
    </div>
    <div class="w-3/5 flex flex-col justify-center">
      <h1 class="text-2xl font-semibold">{{ title }}</h1>
      <p class="text-lg">
        {{ desc }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    no: {
      type: String,
      default: "1",
    },
    title: {
      type: String,
      default: "Title",
    },
    desc: {
      type: String,
      default: "Lorem Ipsum",
    },
  },
};
</script>
