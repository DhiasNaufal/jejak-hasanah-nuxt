<template>
  <v-tabs
    v-model="tab"
    color="secondary"
    align-tabs="center"
    selected-class="font-weight-bold"
  >
    <v-tab
      v-for="(item, index) in tabs"
      :key="index"
      :value="item.value"
      class="text-none"
    >
      {{ item.text }}
    </v-tab>
  </v-tabs>
  <v-window v-model="tab" class="mt-4">
    <v-window-item value="transportation" class="pa-10">
      <PortofolioTransportation />
    </v-window-item>
    <v-window-item value="advertising" class="pa-10">
      <PortofolioAdvertising />
    </v-window-item>
  </v-window>
</template>
<script lang="ts" setup>
const tab = ref();
const options = [
  {
    text: "Transportation",
    value: "transportation",
  },
  {
    text: "Advertising",
    value: "advertising",
  },
];

const tabs = computed(() => options);
</script>
