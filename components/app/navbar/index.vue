<template>
  <div class="md:flex gap-3 hidden">
    <div class="sm:w-[40%] hidden sm:flex justify-end py-5">
      <NuxtLink to="/">
        <NuxtImg src="/img/JH-biru.png" width="228" />
      </NuxtLink>
    </div>

    <div class="flex flex-col justify-end w-[60%]">
      <div id="contact" class="flex gap-10 items-center pl-12 pb-4">
        <NavbarInformation
          icon="mdi:email"
          title="Email"
          information="jhAnais@gmail.com"
        />
        <NavbarInformation
          icon="mdi:map-marker"
          title="Email"
          information="jhAnais@gmail.com"
        />
      </div>

      <div
        id="navbar"
        class="triangle text-white px-16 w-full h-[40%] bg-JH-black flex items-center gap-20 text-sm"
      >
        <div v-for="(menu, index) in navMenu">
          <NuxtLink :to="menu.path">{{ menu.title }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="md:hidden flex justify-between container bg-JH-black py-3">
    <NuxtImg src="/img/logo/JH-Logo.svg" format="webp" sizes="30" />
    <UButton variant="ghost">
      <UIcon
        name="i-heroicons-bars-3-bottom-right-16-solid"
        class="text-3xl text-white"
      />
    </UButton>
  </div>
</template>
<script>
import navMenu from "~/app/mock/menu.mock";
export default {
  data() {
    return {
      navMenu: navMenu.menu,
    };
  },
};
</script>
