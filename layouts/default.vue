<template>
  <div class="hidden custom-1168:block">
    <AppNavbar />
    <slot />
    <AppFooterBanner />
    <AppFooter />
  </div>
  <div>
    <v-container class="h-[100vh] items-center flex">
      <div class="flex flex-col items-start">
        We are So sorry
        <AppTextH2>Desktop View Only</AppTextH2>
        <NuxtLink to="https://wp.jejakhasanah.com/">
          <AppButtonPrimary class="text-subtitle-1"
            >View Optimized Website</AppButtonPrimary
          >
        </NuxtLink>
      </div>
    </v-container>
  </div>
</template>
