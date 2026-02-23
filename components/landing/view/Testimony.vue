<template>
  <v-container class="mb-3 testimony-section">
    <v-row>
      <v-col cols="12" align="start" class="text-section">
        <p class="text-overline text-primary font-weight-bold">Testimoni</p>
        <AppTextH2>Mari dengar kata mereka</AppTextH2>
      </v-col>
    </v-row>

    <v-row align="center" class="testimony-content">
      <!-- Image Column -->
      <v-col
        cols="12"
        md="5"
        lg="5"
        class="image-column"
        :class="{ 'order-2': xs, 'order-1': !xs }"
      >
        <div class="testimony-image-wrapper">
          <NuxtImg
            src="/img/home/Testimony/Testimoni.png"
            sizes="xs:100vw sm:600px md:400px lg:500px xl:600px"
            alt="Testimoni"
          />
        </div>
      </v-col>

      <!-- Testimonials Column -->
      <v-col
        cols="12"
        md="7"
        lg="7"
        class="testimonials-column"
        :class="{ 'order-1': xs, 'order-2': !xs }"
      >
        <div class="testimonials-wrapper">
          <v-card
            v-for="(item, index) in testi"
            :key="index"
            variant="flat"
            class="testimony-card bg-light-gray mb-4"
            :class="{ 'rounded-lg': !xs, 'rounded-0': xs }"
            elevation="2"
          >
            <!-- Card Header -->
            <div class="testimony-header d-flex align-center pa-4 pb-2">
              <div class="flex-grow-1">
                <h3 class="testimony-name text-h6 font-weight-bold mb-1">
                  {{ item.nama }}
                </h3>
                <p
                  class="testimony-position text-body-2 text-medium-emphasis mb-0"
                >
                  {{ item.jabatan }}
                </p>
              </div>
              <v-avatar :size="xs ? 45 : 56" class="ml-3">
                <NuxtImg
                  :alt="item.nama"
                  :src="item.img"
                  class="testimony-avatar"
                />
              </v-avatar>
            </div>

            <!-- Card Content -->
            <v-card-text class="testimony-text pt-2">
              <v-icon
                icon="mdi-format-quote-open"
                :size="xs ? 20 : 24"
                class="text-primary mb-2"
              />
              <p class="text-body-1 mb-0">{{ item.text }}</p>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { xs, sm, md, mdAndUp } = useDisplay();
import testiMock from "~/app/mock/testi.mock";
const testi = testiMock.testimoni;
</script>

<style scoped>
.testimony-section {
  padding: 2rem 1rem;
}

.text-section {
  margin-bottom: 1.5rem;
}

.text-section p {
  margin-bottom: 0.5rem;
}

/* Image Styling */
.testimony-image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.testimony-main-image {
  width: 100%;
  height: auto;
  max-width: 500px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
}

.testimony-main-image:hover {
  transform: scale(1.02);
}

/* Testimonials Styling */
.testimonials-wrapper {
  width: 100%;
}

.testimony-card {
  transition: all 0.3s ease;
  border-left: 4px solid rgb(var(--v-theme-primary));
}

.testimony-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15) !important;
}

.testimony-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.testimony-name {
  color: rgb(var(--v-theme-primary));
  line-height: 1.3;
}

.testimony-position {
  font-style: italic;
}

.testimony-avatar {
  border: 3px solid rgb(var(--v-theme-primary));
  object-fit: cover;
}

.testimony-text {
  position: relative;
}

.testimony-text p {
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.87);
}

/* Mobile Specific (xs: < 600px) */
@media (max-width: 599px) {
  .testimony-section {
    padding: 1.5rem 0.5rem;
  }

  .text-section {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
  }

  .testimony-image-wrapper {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .testimony-main-image {
    max-width: 100%;
    border-radius: 12px;
  }

  .testimonials-wrapper {
    padding: 0 0.5rem;
  }

  .testimony-card {
    margin-bottom: 1rem !important;
  }

  .testimony-header {
    padding: 1rem !important;
  }

  .testimony-text {
    padding: 0.75rem 1rem 1rem !important;
  }

  .testimony-name {
    font-size: 1rem !important;
  }

  .testimony-position {
    font-size: 0.8rem !important;
  }
}

/* Tablet Specific (sm: 600px - 960px) */
@media (min-width: 600px) and (max-width: 959px) {
  .testimony-section {
    padding: 2rem 1rem;
  }

  .testimony-image-wrapper {
    padding: 1rem;
  }

  .testimony-main-image {
    max-width: 400px;
  }

  .testimonials-wrapper {
    padding: 0 1rem;
  }
}

/* Desktop Specific (md and up) */
@media (min-width: 960px) {
  .testimony-section {
    padding: 3rem 2rem;
  }

  .testimony-content {
    margin-top: 2rem;
  }

  .image-column {
    padding-right: 2rem;
  }

  .testimonials-column {
    padding-left: 1rem;
  }

  .testimony-main-image {
    max-width: 500px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .testimony-main-image {
    max-width: 600px;
  }
}

/* Animation for cards on load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.testimony-card {
  animation: fadeInUp 0.6s ease-out;
}

.testimony-card:nth-child(2) {
  animation-delay: 0.1s;
}

.testimony-card:nth-child(3) {
  animation-delay: 0.2s;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .testimony-card,
  .testimony-main-image {
    animation: none;
    transition: none;
  }
}
</style>
