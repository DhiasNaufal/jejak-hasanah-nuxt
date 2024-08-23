<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" cols="6">
        <v-card class="mx-auto bg-light-gray rounded-0 h-full" variant="flat">
          <img
            class="align-end text-white object-cover"
            :src="item.imgPath"
            cover
          />
          <v-card-text>
            <v-icon color="text"> {{ item.icon }}</v-icon>
            <NuxtLink
              :to="`/development`"
              class="text-primary hover:underline hover:cursor-pointer"
            >
              <AppTextH5 class="text-3xl">
                {{ item.name }}
              </AppTextH5>
            </NuxtLink>
            <div>{{ item.desc }}</div>
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
