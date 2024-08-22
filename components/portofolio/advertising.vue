<template>
  <v-row>
    <div class="w-full flex justify-center">
      <div class="grid grid-cols-3 gap-x-10 gap-y-10">
        <v-card
          variant="flat"
          v-for="item in transportasi"
          class="mx-auto bg-text"
          width="300"
        >
          <img
            class="align-end text-white object-cover h-[200px] w-[300px]"
            :src="item.imgPath"
            cover
          />
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.short }} </v-card-subtitle>
          <v-card-actions>
            <NuxtLink
              :to="{
                path: `/portofolio/${item.title}`,
                query: {
                  id: item.id,
                },
              }"
            >
              <v-btn
                variant="primary"
                class="text-subtitle-1"
                text="Explore"
              ></v-btn>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-row>
</template>
<script lang="ts" setup>
import portofolioMock from "~/app/mock/portofolio.mock";
const transportasi = portofolioMock.advertising.variant;
</script>
