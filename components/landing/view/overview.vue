<template>
  <div class="flex flex-col items-end">
    <p>Tentang Kami</p>
    <AppTextH2 class="pb-5"
      >Kami lebih dari sekadar jasa transportasi dan periklanan</AppTextH2
    >
  </div>
  <v-row>
    <v-col cols="7">
      <v-carousel show-arrows="hover" hide-delimiters cycle>
        <v-carousel-item
          v-for="(item, index) in 5"
          :src="`/img/home/corousel/${index + 1}.png`"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="5" class="flex flex-col justify-between">
      <NuxtImg src="/img/home/lv.jpeg" />

      <NuxtImg src="/img/home/vtrn.png" />
    </v-col>
  </v-row>
</template>
