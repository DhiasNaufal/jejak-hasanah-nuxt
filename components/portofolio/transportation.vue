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
    <div class="grid grid-cols-3 gap-10 px-24">
      <div v-for="item in items">
        <NuxtLink to="portofolio/a">
          <UCard
            :ui="{
              header: {
                base: 'h-[250px]',
                background: '',
                padding: 'px-0 py-0 sm:px-0',
              },
              footer: {
                base: ' rounded-b-lg text-white',
                background: 'bg-JH-black',
                padding: 'px-4 py-4 sm:px-6',
              },
            }"
            class="hover:scale-105 duration-500"
          >
            <template #header>
              <img
                src="/img/bus1.jpg"
                class="object-cover w-full p-0 rounded-t-lg h-full"
              />
            </template>

            <template #footer>
              <div>
                <p class="text-sm">17 November 2019</p>
                <h2>Jumbotron jl anu anu anu</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  dolor quam, placerat sit ame
                </p>
              </div>
            </template>
          </UCard>
        </NuxtLink>
      </div>
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
