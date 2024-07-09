<template>
  <v-container>
    <v-col cols="12" align="center">
      <AppTextH2>Why Choose Us?</AppTextH2>
      <p class="text-lg text-neutral-500 md:w-3/5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
        quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
        tincidunt
      </p>
    </v-col>
    <v-row>
      <v-col align="center" v-for="item in whyUs" cols="4">
        <v-icon size="x-large">{{ item.icon }}</v-icon>
        <h1 class="text-2xl">{{ item.title }}</h1>
        <p>
          {{ item.desc }}
        </p></v-col
      >
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      styling: {
        title: "text-4xl font-extrabold text-JH-blue leading-10",
      },
      whyUs: [
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Harga yang Murah",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt",
        },
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Harga yang Murah",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt",
        },
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Harga yang Murah",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt",
        },
      ],
    };
  },
};
</script>
