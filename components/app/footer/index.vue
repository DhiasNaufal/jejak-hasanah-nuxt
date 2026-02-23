<template>
  <div class="bg-text pt-10 pb-6 relative overflow-hidden">
    <v-container>
      <!-- Desktop & Tablet Layout -->
      <div class="hidden sm:block">
        <v-row no-gutters justify="space-between">
          <!-- Logo -->
          <v-col sm="6" md="3" align="center">
            <img
              src="/img/app/official_logo_jh_white.png"
              class="w-36 md:w-40 mb-4"
            />
          </v-col>

          <!-- Menu Jejak Hasanah -->
          <v-col sm="6" md="2">
            <p class="font-bold py-1 mb-2">Jejak Hasanah</p>
            <div class="flex flex-col gap-2">
              <NuxtLink
                v-for="item in menuMock.menu"
                :key="item.path"
                :to="item.path as string"
                class="text-sm opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </v-col>

          <!-- Contact Us -->
          <v-col sm="6" md="3">
            <p class="font-bold py-1 mb-2">Contact Us</p>
            <div class="flex flex-col gap-3">
              <div
                class="flex gap-2 items-start group"
                v-for="item in contact"
                :key="item.icon"
              >
                <v-icon
                  size="small"
                  class="mt-0.5 group-hover:scale-110 transition-transform"
                >
                  {{ item.icon }}
                </v-icon>
                <span
                  class="text-sm opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  {{ item.value }}
                </span>
              </div>
            </div>
          </v-col>

          <!-- Follow Us -->
          <v-col sm="6" md="2">
            <p class="font-bold py-1 mb-3">Follow Us</p>
            <div class="flex gap-4">
              <a
                v-for="item in socialMedia"
                :key="item.icon"
                :href="item.link"
                class="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <v-icon size="small">{{ item.icon }}</v-icon>
              </a>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Mobile Layout - Accordion Style -->
      <div class="block sm:hidden">
        <!-- Logo -->
        <div class="text-center mb-8">
          <img
            src="/img/app/official_logo_jh_white.png"
            class="w-32 mx-auto mb-4"
          />
        </div>

        <!-- Expandable Sections -->
        <v-expansion-panels variant="accordion" class="bg-transparent">
          <!-- Menu Section -->
          <v-expansion-panel class="bg-white bg-opacity-5 mb-2 rounded-lg">
            <v-expansion-panel-title class="font-bold">
              <v-icon class="mr-2">mdi-menu</v-icon>
              Jejak Hasanah
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="flex flex-col gap-2 pt-2">
                <NuxtLink
                  v-for="item in menuMock.menu"
                  :key="item.path"
                  :to="item.path as string"
                  class="text-sm opacity-70 hover:opacity-100 py-1"
                >
                  {{ item.title }}
                </NuxtLink>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Contact Section -->
          <v-expansion-panel class="bg-white bg-opacity-5 mb-2 rounded-lg">
            <v-expansion-panel-title class="font-bold">
              <v-icon class="mr-2">mdi-phone</v-icon>
              Contact Us
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="flex flex-col gap-3 pt-2">
                <div
                  class="flex gap-2 items-start"
                  v-for="item in contact"
                  :key="item.icon"
                >
                  <v-icon size="small" class="mt-0.5">{{ item.icon }}</v-icon>
                  <span class="text-sm opacity-70">{{ item.value }}</span>
                </div>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Social Media Section -->
          <v-expansion-panel class="bg-white bg-opacity-5 rounded-lg">
            <v-expansion-panel-title class="font-bold">
              <v-icon class="mr-2">mdi-share-variant</v-icon>
              Follow Us
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="flex gap-4 justify-center pt-4">
                <a
                  v-for="item in socialMedia"
                  :key="item.icon"
                  :href="item.link"
                  class="w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all"
                >
                  <v-icon>{{ item.icon }}</v-icon>
                </a>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <!-- Divider -->
      <v-divider class="my-6 opacity-20"></v-divider>

      <!-- Copyright -->
      <div class="text-center text-xs opacity-60">
        Copyright © 2024 Jejak Hasanah. All right reserved.
      </div>
    </v-container>

    <!-- Background Logo -->
    <NuxtImg
      src="img/logo-shade.png"
      class="absolute -bottom-12 opacity-5 right-5 md:right-20 pointer-events-none"
      sizes="sm:120px md:150px 2xl:180px"
    />
  </div>
</template>

<script lang="ts" setup>
import menuMock from "~/app/mock/menu.mock";
import informationMock from "~/app/mock/information.mock";

const contact = [
  {
    icon: "mdi-map-marker",
    value: informationMock.alamat,
  },
  { icon: "mdi-phone", value: informationMock.kontak.nomor },
];

const socialMedia = [
  { icon: "mdi-instagram", link: "/" },
  { icon: "mdi-facebook", link: "/" },
  { icon: "mdi-linkedin", link: "/" },
];
</script>
