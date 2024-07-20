<template>
  <v-row>
    <div class="w-full flex justify-center">
      <div class="grid grid-cols-3 gap-x-10 gap-y-10">
        <AppCardService
          v-for="porto in transportasi"
          :title="porto.title"
          :path="`/portofolio/${porto.title}`"
        />
      </div>
    </div>
  </v-row>
</template>
<script lang="ts" setup>
import portofolioMock from "~/app/mock/portofolio.mock";
const transportasi = portofolioMock.transportasi;
</script>
