<template>
  <v-container class="relative">
    <slot />
    <img
      src="public/img/logo-shade.png"
      class="-z-10 absolute right-0 bottom-0"
      :width="200"
    />
    <img
      class="absolute z-10 md:-left-32 -left-10 bottom-10 md:-bottom-16 xl:-left-28"
      src="public/img/lengkung.png"
      :width="300"
    />
  </v-container>
</template>
