<template>
  <v-container>
    <div class="text-center">
      <AppTextH2>Let's See what we've been working on</AppTextH2>
      <p class="leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <v-carousel show-arrows="hover" hide-delimiters>
      <v-carousel-item v-for="(item, index) in 5">
        <v-sheet height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2 bg-black h-5/6 w-2/3">Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<!-- <v-container align="center">
  <v-row
    align="center"
    justify="center"
    class="h-full transparent_black"
    no-gutters
  >
    <v-col align="start" justify="center" cols="3">
      <p>Project Transportasi</p>
      <AppTextH2>Kalimantan selatan</AppTextH2>
      <v-btn color="secondary">Lihat Selengkapnya</v-btn>
    </v-col>
    <v-col align="center" justify="center" cols="3">
      <v-img
        src="public/img/home/corousel/1.png"
        class="rounded-xl"
      ></v-img>
    </v-col>
  </v-row>
</v-container> -->
