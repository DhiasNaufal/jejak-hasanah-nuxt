<template>
  <UButton class="rounded-full" variant="outline" size="lg">
    {{ label }}
  </UButton>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Primary",
    },
  },
};
</script>
