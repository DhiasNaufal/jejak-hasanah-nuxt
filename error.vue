<template>
  <NuxtLayout name="404">
    <div class="h-[100vh] bg-black">
      <v-img src="public/img/404.png"></v-img>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
