<template>
  <section>
    <div class="flex flex-col items-center justify-center">
      <h1>Jejak Hasanah Advertising</h1>
      <p class="px-48 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
        quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
        tincidunt
      </p>
    </div>

    <div class="flex items-center justify-center pt-12">
      <UPagination v-model="page" :page-count="6" :total="items.length" />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      items: [
        { title: "Aku" },
        { title: "Aku" },
        { title: "Aku" },
        { title: "Aku" },
        { title: "Aku" },
        { title: "Aku" },
      ],
    };
  },
};
</script>
