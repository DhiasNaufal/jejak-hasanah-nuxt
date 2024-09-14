<template>
  <div class="bg-text pt-10 relative overflow-hidden">
    <v-container class="">
      <v-row no-gutters justify="between">
        <v-col cols="3" align="center">
          <img src="/img/app/official_logo_jh_white.png" width="150" />
        </v-col>
        <v-col cols="2">
          <p class="font-bold py-1">Jejak Hasanah</p>
          <div class="flex items-center py-1" v-for="item in menuMock.menu">
            <!-- <v-icon>mdi-menu-right</v-icon> -->
            <NuxtLink :to="item.path as string">
              <p class="text-opacity-5">
                {{ item.title }}
              </p>
            </NuxtLink>
          </div>
        </v-col>
        <v-col cols="3">
          <p class="font-bold py-1">Contact Us</p>
          <div class="flex gap-2 items-start py-1" v-for="item in contact">
            <v-icon>{{ item.icon }}</v-icon>
            <NuxtLink>{{ item.value }}</NuxtLink>
          </div>
        </v-col>
        <v-col cols="2">
          <p class="font-bold py-1">Follow Us For Update</p>
          <div class="flex gap-2">
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
    <div class="text-center text-[12px] py-1 pb-4 pt-10">
      Copyright © 2024 Jejak Hasanah. All right reserved.
    </div>
  </div>
</template>
<script lang="ts" setup>
import menuMock from "~/app/mock/menu.mock";
import informationMock from "~/app/mock/information.mock";
const contact = [
  {
    icon: "mdi-map-marker",
    value: informationMock.alamat,
  },
  { icon: "mdi-phone", value: informationMock.kontak.nomor },
];
const socialMedia = [
  { icon: "mdi-instagram", link: "/" },
  { icon: "mdi-facebook", link: "/" },
  { icon: "mdi-linkedin", link: "/" },
];
</script>
