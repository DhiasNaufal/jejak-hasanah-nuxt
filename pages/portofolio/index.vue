<template>
  <main>
    <AppHero />
    <section class="container py-12">
      <UTabs
        :items="items"
        :ui="{
          list: {
            width: 'md:w-1/2',
            rounded: 'rounded-full',
            marker: {
              rounded: 'rounded-full',
            },
            tab: {
              rounded: 'rounded-full',
            },
          },
        }"
        class="flex flex-col justify-center items-center"
      >
        <template #transportation> <PortofolioTransportation /> </template>
        <template #advertising> <PortofolioAdvertising /></template>
      </UTabs>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          slot: "transportation",
          label: "Transportation",
        },
        {
          slot: "advertising",
          label: "Advertising",
        },
      ],
    };
  },
};
</script>
