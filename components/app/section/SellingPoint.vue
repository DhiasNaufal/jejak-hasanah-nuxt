<template>
  <v-container>
    <v-col cols="12" align="center">
      <AppTextH2 class="mb-3">{{ title }}</AppTextH2>
      <p class="text-lg text-neutral-500 md:w-3/5 mb-5">
        {{ subtitle }}
      </p>
    </v-col>
    <v-row>
      <v-col align="center" v-for="item in items" cols="4">
        <v-icon size="x-large" color="primary">{{ item.icon }}</v-icon>
        <h1 class="text-2xl font-semibold">{{ item.title }}</h1>
        <p class="text-center">
          {{ item.desc }}
        </p></v-col
      >
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Selling Point",
    },
    subtitle: {
      type: String,
      default: "description",
    },
    items: {
      type: Array,
      default: () => [
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Title",
          desc: "Description",
        },
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Title",
          desc: "Description",
        },
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Title",
          desc: "Description",
        },
      ],
    },
  },
};
</script>
