<template>
  <div class="bg-text py-10 relative overflow-hidden">
    <v-container class="">
      <v-row no-gutters justify="center">
        <v-col cols="3" align="center">
          <img src="/img/logo/JH-white.png" width="200" />
        </v-col>
        <v-col cols="2">
          <AppTextH5>Another Page</AppTextH5>
          <div class="flex items-center" v-for="item in menuMock.menu">
            <v-icon>mdi-menu-right</v-icon>
            <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
          </div>
        </v-col>
        <v-col cols="3">
          <AppTextH5>Contact Us</AppTextH5>
          <div class="flex items-start" v-for="item in contact">
            <v-icon>{{ item.icon }}</v-icon>
            <NuxtLink>{{ item.value }}</NuxtLink>
          </div>
        </v-col>
        <v-col cols="2">
          <AppTextH5>Follow Us</AppTextH5>
          <p>Follow Us For Update</p>
          <div>
            <v-icon v-for="item in socialMedia">{{ item.icon }}</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <NuxtImg
      src="img/logo-shade.png"
      class="-z-9 absolute -bottom-12 opacity-5 right-20"
      sizes="sm:180px 2xl:180px"
    />
  </div>
  <div class="text-center bg-white">
    Copyright © 2024 Jejak Hasanah. All right reserved.
  </div>
</template>
<script lang="ts" setup>
import menuMock from "~/app/mock/menu.mock";
const contact = [
  {
    icon: "mdi-map-marker",
    value: "Jl. BKR, Kahuripan, Kec. Tawang, Kab. Tasikmalaya, Jawa Barat",
  },
  { icon: "mdi-phone", value: "+5834682368" },
];
const socialMedia = [
  { icon: "mdi-instagram", link: "/" },
  { icon: "mdi-facebook", link: "/" },
  { icon: "mdi-linkedin", link: "/" },
];
</script>
