<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" cols="4">
        <v-card class="mx-auto bg-light-gray rounded-0 h-full rounded-lg" variant="flat">
          <NuxtLink
              :to="`${path}/${item.title}`"
              class="text-primary hover:underline hover:cursor-pointer"
            >
            <img
              class="align-end text-white object-cover transition-transform duration-300 transform hover:scale-110"
              :src="item.img"
              cover
            />
          </NuxtLink>
          <v-card-text class="m-2">
            <!-- <v-icon color="text"> {{ item.icon }}</v-icon> -->
            <NuxtLink
              :to="`${path}/${item.title}`"
              class="text-primary hover:underline hover:cursor-pointer"
            >
              <AppTextH5 class="text-3xl pb-2 flex align-center">
                {{ item.title }}
              </AppTextH5>
            </NuxtLink>
            <p class="text-neutral-500">{{ item.short }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: "/portofolio/transportation",
    },
    img: {
      type: String,
      default: "/img/service/Service_Lv.png",
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
          no: 1,
          icon: "mdi-account-circle",
          title: "Title",
          desc: "Description",
        },
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Title",
          desc: "Description",
        },
      ],
    },
  },
};
</script>
