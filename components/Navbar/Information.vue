<template>
  <div class="flex items-center gap-2">
    <Icon :name="icon" size="40" class="text-JH-blue" />
    <div>
      <p class="text-JH-grey text-sm my-0">{{ title }}</p>
      <p class="">{{ information }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    information: String,
    icon: String,
  },
};
</script>
