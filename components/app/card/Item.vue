<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" cols="6">
        <v-card class="mx-auto bg-light-gray rounded-0 h-full rounded-lg" variant="flat">
          <img
            class="align-end text-white object-cover"
            :src="item.imgPath"
            cover
          />
          <v-card-text class="m-2">
            <!-- <v-icon color="text"> {{ item.icon }}</v-icon> -->
            <NuxtLink
              :to="`/development`"
              class="text-primary hover:underline hover:cursor-pointer"
            >
              <AppTextH5 class="text-3xl pb-2 flex align-center">
                {{ item.name }}&nbsp;
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg> -->
              </AppTextH5>
            </NuxtLink>
            <p class="text-neutral-500">{{ item.desc }}</p>
            <!-- <NuxtLink
              :to="`/development`"
              class="text-primary hover:underline hover:cursor-pointer justify-items-start grid"
            >
            <AppButtonSecondary class="mt-4"> Lihat Lebih Lanjut </AppButtonSecondary>
          </NuxtLink> -->
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
