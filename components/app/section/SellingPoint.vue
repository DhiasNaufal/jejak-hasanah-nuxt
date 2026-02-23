<template>
  <v-container class="selling-point-section py-8 py-md-12">
    <!-- Header Section -->
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" class="text-center">
        <AppTextH2 class="mb-3 mb-md-4 responsive-title">
          {{ title }}
        </AppTextH2>
        <p class="text-body-1 text-body-2 text-medium-emphasis subtitle-text">
          {{ subtitle }}
        </p>
      </v-col>
    </v-row>

    <!-- Items Grid -->
    <v-row class="mt-4 mt-md-8">
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 8 : 2"
            class="selling-point-card flex-grow-1"
            :class="{ 'card-hover': isHovering }"
            rounded="lg"
          >
            <v-card-text class="pa-6 pa-sm-8 pa-md-10 d-flex flex-column h-100">
              <!-- Icon with Animation -->
              <div class="icon-wrapper mb-4">
                <v-avatar
                  :size="iconSize"
                  color="primary"
                  variant="tonal"
                  class="icon-avatar"
                >
                  <v-icon :size="iconSize - 20" color="primary">
                    {{ item.icon }}
                  </v-icon>
                </v-avatar>
              </div>

              <!-- Title -->
              <h3
                class="text-h6 text-sm-h5 font-weight-bold mb-2 mb-md-3 text-left"
              >
                {{ item.title }}
              </h3>

              <!-- Description -->
              <p
                class="text-body-2 text-sm-body-1 text-medium-emphasis text-left flex-grow-1"
              >
                {{ item.desc }}
              </p>

              <!-- Optional: Read More Link
              <v-btn
                v-if="isHovering"
                variant="text"
                color="primary"
                size="small"
                class="mt-3 align-self-start px-0"
              >
                Selengkapnya
                <v-icon end size="small">mdi-arrow-right</v-icon>
              </v-btn> -->
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const props = defineProps({
  title: {
    type: String,
    default: "Selling Point",
  },
  subtitle: {
    type: String,
    default: "description",
  },
  items: {
    type: Array,
    default: () => [
      {
        no: 1,
        icon: "mdi-account-circle",
        title: "Title",
        desc: "Description",
      },
      {
        no: 2,
        icon: "mdi-account-circle",
        title: "Title",
        desc: "Description",
      },
      {
        no: 3,
        icon: "mdi-account-circle",
        title: "Title",
        desc: "Description",
      },
    ],
  },
});

const { xs, sm } = useDisplay();

// Responsive icon size
const iconSize = computed(() => {
  if (xs.value) return 60;
  if (sm.value) return 70;
  return 80;
});
</script>

<style scoped>
.selling-point-section {
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
}

.responsive-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.3;
  font-weight: 700;
}

.subtitle-text {
  max-width: 100%;
  margin: 0 auto;
  line-height: 1.6;
}

/* Card Styling */
.selling-point-card {
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: white;
}

.selling-point-card:hover {
  border-color: rgb(var(--v-theme-primary));
}

.card-hover {
  transform: translateY(-8px);
}

/* Icon Animation */
.icon-wrapper {
  position: relative;
}

.icon-avatar {
  transition: all 0.3s ease;
}

.selling-point-card:hover .icon-avatar {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 16px rgba(var(--v-theme-primary), 0.3);
}

/* Responsive Adjustments */
@media (max-width: 600px) {
  .selling-point-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .subtitle-text {
    font-size: 0.875rem;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .selling-point-card {
    min-height: 280px;
  }
}

@media (min-width: 960px) {
  .selling-point-card {
    min-height: 320px;
  }
}

/* Animation on scroll (optional) */
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

.v-col {
  animation: fadeInUp 0.6s ease-out;
}

.v-col:nth-child(1) {
  animation-delay: 0.1s;
}

.v-col:nth-child(2) {
  animation-delay: 0.2s;
}

.v-col:nth-child(3) {
  animation-delay: 0.3s;
}

.v-col:nth-child(4) {
  animation-delay: 0.4s;
}

.v-col:nth-child(5) {
  animation-delay: 0.5s;
}

.v-col:nth-child(6) {
  animation-delay: 0.6s;
}
</style>
