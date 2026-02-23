<template>
  <v-container fluid class="portfolio-section py-8 py-md-12">
    <v-container>
      <!-- Header Section -->
      <v-row justify="center" class="mb-6 mb-md-10">
        <v-col cols="12" sm="10" md="9" lg="8" class="text-center">
          <v-chip
            color="primary"
            variant="flat"
            size="small"
            class="mb-4"
            prepend-icon="mdi-briefcase"
          >
            Portfolio Kami
          </v-chip>

          <AppTextH2 class="mb-4 mb-md-5 portfolio-title">
            Lihat apa yang sudah kita kerjakan
          </AppTextH2>

          <p
            class="text-body-2 text-sm-body-1 text-medium-emphasis portfolio-description"
          >
            Dengan pengalaman luas di berbagai sektor, kami telah berhasil
            menangani banyak proyek, mulai dari layanan antar jemput karyawan
            hingga pemasangan media periklanan. Kami terus berinovasi dan
            berkomitmen untuk selalu memberikan hasil terbaik, memastikan setiap
            proyek memenuhi standar tertinggi dalam kualitas dan kepuasan
            pelanggan.
          </p>
        </v-col>
      </v-row>

      <!-- Desktop/Tablet: Grid View -->
      <v-row v-if="!xs" class="portfolio-grid mb-8">
        <v-col
          v-for="(item, index) in displayedItems"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="portfolio-col"
        >
          <NuxtLink
            :to="{
              path: `/portofolio/transportation/${item.title}`,
            }"
            class="portfolio-link"
          >
            <v-hover v-slot="{ isHovering, props }">
              <div v-bind="props" class="portfolio-item-wrapper">
                <AppCardPortofolioShort
                  :title="item.title"
                  :desc="item.short"
                  :img="item.imgCover"
                  :class="['portfolio-card', { 'card-hover': isHovering }]"
                />
              </div>
            </v-hover>
          </NuxtLink>
        </v-col>
      </v-row>

      <!-- Mobile: Carousel View -->
      <v-carousel
        v-else
        show-arrows="hover"
        hide-delimiters
        :height="carouselHeight"
        cycle
        interval="4000"
        class="mobile-carousel rounded-lg"
      >
        <v-carousel-item v-for="(item, index) in portofolio" :key="index">
          <NuxtLink
            :to="{
              path: `/portofolio/transportation/${item.title}`,
            }"
            class="d-flex fill-height justify-center align-center pa-4"
          >
            <AppCardPortofolioShort
              :title="item.title"
              :desc="item.short"
              :img="item.imgCover"
              class="mobile-card"
            />
          </NuxtLink>
        </v-carousel-item>
      </v-carousel>

      <!-- Show More Button (for desktop/tablet) -->
      <v-row
        v-if="!xs && portofolio.length > itemsToShow"
        justify="center"
        class="mt-6"
      >
        <v-col cols="12" sm="auto" class="text-center">
          <v-btn
            v-if="!showAll"
            color="primary"
            variant="outlined"
            size="large"
            rounded="pill"
            @click="showAll = true"
            prepend-icon="mdi-plus"
          >
            Lihat Semua Portfolio ({{ portofolio.length }})
          </v-btn>
          <v-btn
            v-else
            color="primary"
            variant="text"
            size="large"
            rounded="pill"
            @click="showAll = false"
            prepend-icon="mdi-minus"
          >
            Tampilkan Lebih Sedikit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";
import portofolioMock from "~/app/mock/portofolio.mock";

const { xs, sm, md } = useDisplay();
const portofolio = portofolioMock.transportasi;
const showAll = ref(false);

// Number of items to show initially
const itemsToShow = computed(() => {
  if (md.value) return 6;
  if (sm.value) return 4;
  return 3;
});

// Items to display based on showAll state
const displayedItems = computed(() => {
  if (showAll.value) return portofolio;
  return portofolio.slice(0, itemsToShow.value);
});

// Responsive carousel height for mobile
const carouselHeight = computed(() => {
  return xs.value ? 400 : 500;
});
</script>

<style scoped>
.portfolio-section {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
}

/* Header Styling */
.portfolio-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.3;
  color: #1a1a1a;
}

.portfolio-description {
  line-height: 1.7;
  max-width: 100%;
  margin: 0 auto;
}

/* Grid Layout */
.portfolio-grid {
  position: relative;
}

.portfolio-col {
  animation: fadeInUp 0.6s ease-out backwards;
}

.portfolio-col:nth-child(1) {
  animation-delay: 0.1s;
}
.portfolio-col:nth-child(2) {
  animation-delay: 0.2s;
}
.portfolio-col:nth-child(3) {
  animation-delay: 0.3s;
}
.portfolio-col:nth-child(4) {
  animation-delay: 0.4s;
}
.portfolio-col:nth-child(5) {
  animation-delay: 0.5s;
}
.portfolio-col:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Portfolio Card */
.portfolio-link {
  text-decoration: none;
  display: block;
  height: 100%;
}

.portfolio-item-wrapper {
  height: 100%;
  background: rgb(var(--v-theme-primary));
  border-radius: 16px;
}

.portfolio-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}

.portfolio-card.card-hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Mobile Carousel */
.mobile-carousel {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.mobile-card {
  max-width: 100%;
  height: 100%;
}

/* Responsive Adjustments */
@media (max-width: 600px) {
  .portfolio-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .portfolio-description {
    font-size: 0.875rem;
    line-height: 1.6;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .portfolio-card {
    min-height: 300px;
  }
}

@media (min-width: 960px) {
  .portfolio-card {
    min-height: 350px;
  }
}
</style>
