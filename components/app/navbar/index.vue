<template>
  <div class="bg-white hidden md:flex gap-3">
    <!-- Logo -->
    <div class="w-[30%] hidden sm:flex justify-end py-5 pr-16">
      <NuxtLink to="/">
        <img src="/img/app/official_logo_jh.png" width="150" alt="Logo" />
      </NuxtLink>
    </div>

    <!-- Right Section -->
    <div class="flex flex-col justify-end w-[70%] triangle">
      <!-- Contact -->
      <div
        class="flex gap-6 lg:gap-10 items-center pl-8 lg:pl-12 pb-2 flex-wrap"
      >
        <AppNavbarInformation
          icon="mdi-email"
          title="Email"
          :information="information?.kontak?.email || '-'"
        />
        <AppNavbarInformation
          icon="mdi-map-marker"
          title="Location"
          :information="information?.alamat || '-'"
        />
      </div>

      <!-- Navbar -->
      <div
        class="text-white px-8 lg:px-16 w-full bg-black flex items-center gap-4 lg:gap-12 text-sm h-14 overflow-x-auto"
      >
        <div v-for="(menu, index) in navMenu" :key="'desktop-' + index">
          <!-- Normal Link -->
          <NuxtLink v-if="typeof menu.path === 'string'" :to="menu.path">
            <v-btn variant="text" class="text-white text-xs lg:text-sm">
              {{ menu.title }}
            </v-btn>
          </NuxtLink>

          <!-- Dropdown -->
          <v-menu v-else>
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                variant="text"
                class="text-white text-xs lg:text-sm"
              >
                {{ menu.title }}
                <v-icon end size="small">mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <NuxtLink
                v-for="(item, i) in menu.path"
                :key="'desktop-sub-' + i"
                :to="item.path"
              >
                <v-list-item>
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </NuxtLink>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= MOBILE ================= -->
  <div
    class="md:hidden flex justify-between items-center bg-white px-4 py-3 shadow-md"
  >
    <NuxtLink to="/">
      <img
        src="/img/app/official_logo_jh.png"
        width="120"
        alt="Logo"
        class="h-auto max-h-10"
      />
    </NuxtLink>

    <v-btn icon @click="drawer = true" color="black" variant="text">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </div>

  <!-- Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    width="280"
    class="drawer-full-height"
  >
    <div class="drawer-content">
      <!-- Header -->
      <div class="drawer-header">
        <h3 class="text-lg font-semibold">Menu</h3>
        <v-btn icon size="small" @click="drawer = false" variant="text">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <!-- Menu Section -->
      <v-list class="drawer-menu">
        <template v-for="(menu, index) in navMenu" :key="'mobile-' + index">
          <!-- Normal -->
          <NuxtLink
            v-if="typeof menu.path === 'string'"
            :to="menu.path"
            @click="drawer = false"
          >
            <v-list-item>
              <v-list-item-title>
                {{ menu.title }}
              </v-list-item-title>
            </v-list-item>
          </NuxtLink>

          <!-- Dropdown -->
          <v-list-group v-else>
            <template #activator="{ props }">
              <v-list-item v-bind="props">
                <v-list-item-title>
                  {{ menu.title }}
                </v-list-item-title>
              </v-list-item>
            </template>

            <NuxtLink
              v-for="(item, i) in menu.path"
              :key="'mobile-sub-' + i"
              :to="item.path"
              @click="drawer = false"
            >
              <v-list-item class="pl-8">
                <v-list-item-title class="text-sm">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </NuxtLink>
          </v-list-group>
        </template>
      </v-list>

      <!-- Contact Section (Bottom) -->
      <div class="drawer-footer">
        <v-divider class="mb-3 border-gray-700"></v-divider>

        <div class="text-xs space-y-2">
          <div class="flex items-start gap-2">
            <v-icon size="small" color="white">mdi-email</v-icon>
            <span class="break-all leading-relaxed">
              {{ information?.kontak?.email || "-" }}
            </span>
          </div>
          <div class="flex items-start gap-2">
            <v-icon size="small" color="white">mdi-map-marker</v-icon>
            <span class="break-words leading-relaxed line-clamp-2">
              {{ information?.alamat || "-" }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import informationMock from "~/app/mock/information.mock";
import navMenu from "~/app/mock/menu.mock";

export default {
  data() {
    return {
      drawer: false,
      navMenu: navMenu?.menu ?? [],
      information: informationMock ?? {},
    };
  },
};
</script>

<style scoped>
/* Custom scrollbar untuk navbar desktop */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Drawer Full Height Fix */
.drawer-full-height {
  height: 100vh !important;
  max-height: 100vh !important;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.drawer-menu {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

.drawer-footer {
  background: black;
  color: white;
  padding: 16px;
  flex-shrink: 0;
}

/* Custom scrollbar untuk drawer menu */
.drawer-menu::-webkit-scrollbar {
  width: 6px;
}

.drawer-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.drawer-menu::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.drawer-menu::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
