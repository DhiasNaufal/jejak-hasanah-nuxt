<template>
  <div class="bg-white md:flex gap-3 hidden">
    <div class="sm:w-[30%] hidden sm:flex justify-end py-5 pr-16">
      <NuxtLink to="/">
        <img src="/img/app/official_logo_jh.png" width="150" />
      </NuxtLink>
    </div>

    <div class="flex flex-col justify-end w-[70%]">
      <div id="contact" class="flex gap-10 items-center pl-12 pb-4">
        <AppNavbarInformation
          icon="mdi-email"
          title="Email"
          :information="information.kontak.email"
        />
        <AppNavbarInformation
          icon="mdi-map-marker"
          title="Location"
          :information="information.alamat"
        />
      </div>

      <div
        id="navbar"
        class="triangle text-white px-16 w-full h-[40%] bg-black flex items-center gap-20 text-sm"
      >
        <div v-for="(menu, index) in navMenu">
          <NuxtLink v-if="typeof menu.path == 'string'" :to="menu.path">
            <v-btn variant="text" class="text-subtitle-1 font-sans">
              {{ menu.title }}
            </v-btn>
          </NuxtLink>
          <v-btn v-else variant="text" class="text-subtitle-1 font-sans">
            {{ menu.title }}
            <template v-slot:append>
              <v-icon> mdi-chevron-down</v-icon>
            </template>

            <v-menu activator="parent" class="">
              <v-list class="bg-text">
                <NuxtLink
                  v-for="(item, index) in menu.path"
                  :key="index"
                  :to="item.path"
                >
                  <v-list-item :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </NuxtLink>
              </v-list>
            </v-menu>
          </v-btn>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <!-- <div class="md:hidden flex justify-between container bg-JH-black py-3">
    <NuxtImg src="/img/logo/JH-Logo.svg" format="webp" sizes="30" />
    <UButton variant="ghost">
      <v-icon
        name="i-heroicons-bars-3-bottom-right-16-solid"
        class="text-3xl text-white"
      />
    </UButton>
  </div> -->
</template>
<script>
import informationMock from "~/app/mock/information.mock";
import navMenu from "~/app/mock/menu.mock";
export default {
  data() {
    return {
      navMenu: navMenu.menu,
      information: informationMock,
    };
  },
};
</script>
