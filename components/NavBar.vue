<template>
  <div class="md:flex gap-3">
    <div class="sm:w-[40%] hidden sm:flex justify-end py-5">
      <NuxtImg src="/img/JH-biru.png" width="228" />
    </div>

    <div class="flex flex-col justify-end w-[70%]">
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
        <NuxtLink
          to="/"
          class="flex items-center bg-JH-blue h-[44px] rounded-sm"
        >
          <p class="font-normal pl-4 pr-2 text-white">Contact Us</p>
          <div
            class="flex items-center justify-center btn h-full bg-black w-[30px] rounded-e-sm"
          >
            <Icon name="mdi:chevron-right" class="text-white" />
          </div>
        </NuxtLink>
      </div>
      <div
        id="navbar"
        class="triangle text-white px-16 w-full h-[40%] bg-JH-black flex items-center gap-16 text-xs"
      >
        <NuxtLink to="/">Beranda</NuxtLink>
        <NuxtLink to="/tentang">Tentang Perusahaan</NuxtLink>
        <NuxtLink to="/layanan">Layanan</NuxtLink>
        <NuxtLink to="/portofolio">Projek</NuxtLink>
        <UButton label="Hubungi Kami" />
      </div>
    </div>
  </div>
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
<style>
.triangle {
  clip-path: polygon(5% 0, 100% 0%, 100% 100%, 0% 100%);
}
.btn {
  clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
}
</style>
