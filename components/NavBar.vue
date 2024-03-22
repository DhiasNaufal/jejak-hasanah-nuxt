<template>
  <div class="flex gap-3">
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
        class="triangle text-white px-10 w-full h-[40%] bg-JH-black flex items-center gap-12"
      >
        <NuxtLink>Beranda</NuxtLink>
        <NuxtLink>Tentang Perusahaan</NuxtLink>
        <NuxtLink>Layanan</NuxtLink>
        <NuxtLink>Project</NuxtLink>
        <NuxtLink>Project</NuxtLink>
        <NuxtLink>Project</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style>
.triangle {
  clip-path: polygon(3% 0, 100% 0%, 100% 100%, 0% 100%);
}
.btn {
  clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
}
</style>
