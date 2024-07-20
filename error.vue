<template>
  <NuxtLayout name="404">
    <v-row class="h-[100vh] flex">
      <v-col cols="5" class="pa-10">
        <v-row class="h-1/2 flex pa-10" align="center">
          <v-col cols="5"> </v-col>
          <v-col>
            <NuxtImg
              sizes="100vw sm:50vw md:400px"
              src="img/logo/JH-Logo.svg"
            />
            <AppTextH2 class="text-5xl">SORRY</AppTextH2>
            <p>404 - The page you looking for is not available.</p>
            <AppButtonPrimary @click="goBack">Back To Home</AppButtonPrimary>
          </v-col>
        </v-row>
        <v-row class="h-1/2" align="end">
          <NuxtImg sizes="100vw sm:50vw md:400px" src="img/logo-shade.png"
        /></v-row>
      </v-col>
      <v-col align="center" align-self="end">
        <!-- <v-img src="public/img/404.png"></v-img> -->
        <NuxtImg sizes="100vw sm:50vw md:1000px" src="/img/404.png" />
      </v-col>
    </v-row>
  </NuxtLayout>
</template>
<!-- <v-row class="bg-grey">
  <v-col cols="12" align="center">
    <v-img src="public/img/logo/JH-Logo.svg" height="200"></v-img>
    SORRY 404 - The page you looking for is not available
    <AppButtonPrimary>Back To Home</AppButtonPrimary>
  </v-col>
  <v-col>
    <v-img src="public/img/logo/JH-Logo.svg" height="200"></v-img>
  </v-col>
</v-row>
<v-row align="end">
</v-row> -->

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
