<template>
  <div class="container border-b">
    <div class="hidden md:flex items-center h-full justify-between py-3">
      <NuxtImg src="/img/logo/JH-Logo.svg" format="webp" class="w-[50px]" />
      <div
        class="flex gap-16 col-start-2 col-span-4 font-semibold text-JH-grey"
      >
        <div v-for="menu in navMenu">
          <NuxtLink :to="menu.path" class="hover:text-JH-black">{{
            menu.title
          }}</NuxtLink>
        </div>
      </div>
      <AppButtonPrimary class="flex items-center" label="Hubungi Kami" />
    </div>
    <div class="flex md:hidden justify-between">
      <NuxtImg src="/img/logo/JH-Logo.svg" format="webp" sizes="30" />
      <UButton variant="ghost" :ui="{ rounded: 'rounded-full' }">
        <UIcon
          name="i-heroicons-bars-3-bottom-right-16-solid"
          class="text-3xl text-black"
        />
      </UButton>
    </div>
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
