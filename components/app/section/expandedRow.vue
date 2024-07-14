<template>
  <!-- <v-container>
    <v-row
      class="bg-neutral-100 rounded-xl expanded hover:h-[500px] h-[150px] transition-all duration-500 mb-5 px-10 overflow-hidden"
    >
      <div class="flex gap-10">
        <AppTextH2>01</AppTextH2>
        <AppTextH2>Billboard</AppTextH2>
      </div>
      <v-img src="public/img/service/ads_port.png" height="125"></v-img>
    </v-row>
  </v-container> -->
  <v-container>
    <v-row align="center">
      <v-col cols="7">
        <v-row
          class="bg-neutral-100 rounded-xl transition-all duration-500 mb-5 px-10 hover:h-[500px] h-[225px]"
          @mouseover="isHover = true"
          @mouseleave="isHover = false"
        >
          <v-col cols="1">
            <AppTextH2>01</AppTextH2>
          </v-col>
          <v-col>
            <AppTextH2>Billboard</AppTextH2>
            <transition>
              <div v-if="isHover" class="transition">
                <p>
                  Kami menawarkan layanan billboard dengan keunggulan desain
                  panel yang sedikit melengkung untuk visualisasi konten yang
                  lebih baik. Billboard kami ditempatkan di lokasi-lokasi
                  strategis dengan lalu lintas tinggi, memastikan bahwa pesan
                  iklan Anda menjangkau audiens yang lebih luas. 
                </p>
                <v-btn></v-btn>
              </div>
            </transition>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" justify="end" align-self="center">
        <v-img src="public/img/service/ads_port.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      isHover: false,
      services: [
        {
          no: "01",
          title: "Billboard",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulladolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt interdum tortor, non fringilla maurismolestie at",
        },
        {
          no: "02",
          title: "Billboard",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulladolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt interdum tortor, non fringilla maurismolestie at",
        },
      ],
    };
  },
};
</script>
<style>
.hide {
  visibility: hidden;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<!-- <v-container>
    <div
      v-for="item in services"
      class="h-[200px] flex items-start duration-500 bg-neutral-100 hover:h-[500px] hover:text-white px-12 py-6 rounded-3xl mb-3 transition-all ease-in-out"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
    >
      <h1 class="w-[10%]">01</h1>
      <div class="w-[60%]">
        <h1>Billboard</h1>
        <div class="flex flex-col items-start gap-5">
          :class="{
                hidden: !isHover,
                'block animate-fade-down animate-duration-500': isHover,
              }"
          <p class="pr-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
            quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
            tincidunt interdum tortor, non fringilla mauris molestie at
          </p>
          <AppButtonPrimary label="Pelajari lebih lanjut" />
        </div>
      </div>
      <div class="w-[30%] h-full flex justify-end items-center">
        <NuxtImg
          src="img/bus1.jpg"
          width="230"
          height="100"
          class="rounded-3xl hover:scale-110"
        />
      </div>
    </div>
  </v-container> -->
