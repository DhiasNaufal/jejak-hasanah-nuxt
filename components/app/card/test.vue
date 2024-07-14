<template>
  {{ showMore }}
  <v-container>
    <div
      ref="textContainer"
      class="relative overflow-hidden h-[100px] p-4 bg-gray-100 transition-all duration-500 ease-in-out"
      @mouseover="showMore = true"
      @mouseleave="showMore = false"
    >
      <div ref="textContent" class="whitespace-pre-line">
        <!-- Your long text goes here -->
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div
        v-if="isOverflowing"
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100 to-transparent text-center"
        @click="showFullText = !showFullText"
      >
        <span v-if="!showFullText">Click for more</span>
        <span v-else>Show less</span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
      isOverflowing: false,
      showFullText: false,
    };
  },
  methods: {
    checkOverflow() {
      const container = this.$refs.textContainer;
      const content = this.$refs.textContent;
      this.isOverflowing = content.scrollHeight > container.clientHeight;
    },
  },
  mounted() {
    this.checkOverflow();
    window.addEventListener("resize", this.checkOverflow);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkOverflow);
  },
  watch: {
    showFullText(val) {
      this.$nextTick(() => {
        if (val) {
          this.$refs.textContainer.style.height = "auto";
        } else {
          this.$refs.textContainer.style.height = "200px";
        }
      });
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
