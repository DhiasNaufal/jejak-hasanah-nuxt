<template>
  <div
    class="portfolio-card-container"
    :class="{ 'mobile-view': xs, 'tablet-view': sm }"
    :style="img"
  >
    <div class="portfolio-card-overlay">
      <div class="portfolio-card-content">
        <div class="content-wrapper">
          <AppTextH2 class="text-white">
            {{ title }}
          </AppTextH2>
          <p class="portfolio-desc">
            {{ desc }}
          </p>

          <!-- Optional: Read More Button -->
          <v-btn
            v-if="!xs"
            variant="outlined"
            color="white"
            size="small"
            rounded="pill"
            class="mt-4"
            append-icon="mdi-arrow-right"
          >
            Lihat Detail
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { xs, sm, md } = useDisplay();

const props = defineProps({
  img: {
    type: String,
    default: "background-image: url('/img/home/homeBanner.png')",
  },
  title: {
    type: String,
    default: "Site Palembang (Muara Enim)",
  },
  desc: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt",
  },
});

const img = computed(() => props.img);
</script>

<style scoped>
.portfolio-card-container {
  position: relative;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-card-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  display: flex;
  align-items: center;
  transition: background 0.3s ease;
}

.portfolio-card-container:hover .portfolio-card-overlay {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

.portfolio-card-content {
  width: 100%;
  padding: 2.5rem;
  display: flex;
  align-items: center;
}

.content-wrapper {
  max-width: 70%;
  animation: fadeInLeft 0.6s ease-out;
}

.portfolio-title {
  color: white;
  font-weight: 700;
  font-size: clamp(1.25rem, 3vw, 2rem);
  line-height: 1.3;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
}

.portfolio-desc {
  color: white;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.6;
  margin: 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hover Effect */
.portfolio-card-container:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.portfolio-card-container:hover .content-wrapper {
  transform: translateX(10px);
  transition: transform 0.3s ease;
}

.portfolio-card-container:hover .portfolio-title {
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.9);
}

/* Mobile View (xs: < 600px) */
.portfolio-card-container.mobile-view {
  height: 350px;
  border-radius: 12px;
}

.mobile-view .portfolio-card-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  align-items: flex-end;
}

.mobile-view .portfolio-card-content {
  padding: 1.5rem;
}

.mobile-view .content-wrapper {
  max-width: 100%;
}

.mobile-view .portfolio-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.mobile-view .portfolio-desc {
  font-size: 0.875rem;
  -webkit-line-clamp: 2;
}

/* Tablet View (sm: 600px - 960px) */
.portfolio-card-container.tablet-view {
  height: 380px;
  border-radius: 14px;
}

.tablet-view .portfolio-card-content {
  padding: 2rem;
}

.tablet-view .content-wrapper {
  max-width: 80%;
}

/* Desktop Large (md and up) */
@media (min-width: 960px) {
  .portfolio-card-container {
    height: 450px;
  }

  .portfolio-card-content {
    padding: 3rem;
  }
}

/* Extra Large Desktop */
@media (min-width: 1280px) {
  .portfolio-card-container {
    height: 500px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .portfolio-card-container,
  .portfolio-card-overlay,
  .content-wrapper {
    transition: none;
    animation: none;
  }
}
</style>
