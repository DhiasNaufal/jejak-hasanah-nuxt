<template>
  <div class="flex items-center gap-2">
    <v-icon size="24" color="primary">{{ icon }}</v-icon>
    <div>
      <p class="text-JH-grey text-xs my-0">{{ title }}</p>
      <p class="text-sm font-semibold text-primary">{{ information }}</p>
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
