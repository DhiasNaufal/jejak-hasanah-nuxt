<!-- <template>
  <LandingView />
</template> -->
<template>
  <v-container class="h-[100vh]">
    <v-row class="h-full" align="end">
      <v-row align="start" justify="center">
        <v-col cols="12" lg="5" class="pa-10">
          <NuxtImg sizes="100vw sm:50vw md:400px" src="img/logo/JH-Logo.svg" />
          <AppTextH2 class="text-5xl py-4">SORRY</AppTextH2>
          <p class="text-neutral-500">The page you looking for is under construction.</p>
          <!-- <AppButtonPrimary @click="goBack">Back To Home</AppButtonPrimary> -->
        </v-col>
        <v-col align="center" align-self="end" class="pa-1">
          <NuxtImg sizes="2300vw sm:50vw md:1000px" src="/img/404.png" />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const route = useRouter();
const goBack = () => {
  route.push("/");
};
definePageMeta({
  layout: "404",
});
</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
