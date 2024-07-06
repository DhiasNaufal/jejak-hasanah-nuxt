<template>
  <v-app>
    <AppNavbar />
    <slot />
    <section class="container">
      <AppBannerFooter />
    </section>
    <Footer />
  </v-app>
</template>
