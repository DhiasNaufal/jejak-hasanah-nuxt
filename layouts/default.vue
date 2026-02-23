<template>
  <AppNavbar />
  <!-- <div class="custom-1168:block"> -->
  <!-- <slot /> -->
  <!-- </div> -->
  <AppFooterBanner />
  <AppFooter />

  <div class="flex items-center justify-center h-screen custom-1168:hidden">
    <v-container>
      <div class="flex flex-col items-center text-center">
        <p>We are so sorry</p>
        <AppTextH2>Desktop View Only</AppTextH2>
        <NuxtLink to="https://wp.jejakhasanah.com/">
          <AppButtonPrimary class="text-subtitle-1">
            View Optimized Website
          </AppButtonPrimary>
        </NuxtLink>
      </div>
    </v-container>
  </div>
</template>
