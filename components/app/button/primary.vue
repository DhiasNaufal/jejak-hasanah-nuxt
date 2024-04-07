<template>
  <UButton color="red" class="rounded-full py-3 px-6" size="lg">
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
