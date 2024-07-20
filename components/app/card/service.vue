<template>
  <v-card class="mx-auto bg-text" width="300">
    <img class="align-end text-white object-cover h-[200px] w-[300px]"  :src="imgPath" cover>
    </img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ desc }} </v-card-subtitle>
    <v-card-actions>
      <NuxtLink>
        <v-btn color="white" text="Share"></v-btn>
      </NuxtLink>
      <NuxtLink :to="path">
        <v-btn color="white" text="Explore"></v-btn>
      </NuxtLink>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
defineProps({
  imgPath: {
    type: String,
    default: "/img/home/footerBanner.jpeg",
  },
  title: {
    type: String,
    default: "title",
  },
  desc: {
    type: String,
    default: "desc",
  },
  path: {
    type: String,
    default: "/",
  },
});
</script>
