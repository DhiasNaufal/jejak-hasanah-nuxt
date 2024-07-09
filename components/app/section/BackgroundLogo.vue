<template>
  <v-container class="relative">
    <slot />
    <NuxtImg
      src="img/logo-shade.png"
      class="-z-10 absolute right-0 bottom-0"
      sizes="180px sm:250px 2xl:300px"
    />
    <NuxtImg
      class="absolute z-10 md:-left-32 -left-10 -bottom-5 md:-bottom-16 xl:-left-28"
      src="/img/lengkung.png"
      format="webp"
      sizes="180px sm:250px 2xl:300px"
    />
  </v-container>
</template>
