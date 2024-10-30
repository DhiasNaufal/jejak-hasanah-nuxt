<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" cols="6">
        <v-card
          class="mx-auto bg-light-gray rounded-0 h-full rounded-lg"
          variant="flat"
        >
          <img
            class="align-end text-white object-cover"
            :src="item.imgPath"
            cover
          />
          <v-card-text class="m-2">
            <NuxtLink
              :to="`/${route}/${item.name}`"
              class="text-primary hover:underline hover:cursor-pointer"
            >
              <AppTextH5 class="text-3xl pb-2 flex align-center">
                {{ item.name }}&nbsp;
              </AppTextH5>
            </NuxtLink>
            <p class="text-neutral-500">{{ item.desc }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    imgPath: {
      type: String,
      default: "/img/service/Service_Lv.png",
    },
    route: {
      type: String,
      default: "development",
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
