<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" cols="4">
        <v-card class="mx-auto bg-light-gray rounded-0 h-full" variant="flat">
          <img
            class="align-end text-white object-cover"
            :src="item.img"
            cover
          />
          <v-card-text>
            <v-icon color="text"> {{ item.icon }}</v-icon>
            <NuxtLink
              :to="`${path}/${item.title}`"
              class="text-primary hover:underline hover:cursor-pointer"
            >
              <AppTextH5 class="text-3xl">
                {{ item.title }}
              </AppTextH5>
            </NuxtLink>
            <div>{{ item.short }}</div>
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
