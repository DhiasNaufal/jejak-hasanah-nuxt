<template>
  <div class="container">
    <section class="h-screen flex flex-col">
      <div
        class="flex flex-col md:flex-row gap-10 h-1/2 items-center justify-center mb-20 md:mb-10 mt-10 md:mt-0"
      >
        <h1
          class="text-5xl text-center md:text-8xl 2xl:text-9xl font-semibold md:text-start"
        >
          TRANSPORT SOLUTION
        </h1>
        <div
          class="flex flex-col md:items-start items-center justify-start gap-10"
        >
          <NuxtImg
            src="/img/bus1.jpg"
            width="230"
            height="100"
            class="rounded-full"
          />

          <p class="text-md w-4/5 text-center md:text-start">
            kami bangga dengan menyediakan transportasi dan periklanan terbaik
            yang tersedia di Indonesia
          </p>
        </div>
      </div>
      <div
        class="w-full bg-cover h-1/2 rounded-t-[70px] relative"
        style="background-image: url('/img/bus1.jpg')"
      >
        <UButton
          :ui="{ rounded: 'rounded-full' }"
          class="right-20 md:right-36 -top-12 absolute"
          color="red"
        >
          <UIcon
            name="i-heroicons-arrow-up-right-16-solid"
            class="text-[70px] md:text-[150px] rounded-full"
          />
        </UButton>
      </div>
    </section>
  </div>
</template>
