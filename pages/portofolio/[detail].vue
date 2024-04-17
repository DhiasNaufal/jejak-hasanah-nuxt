<template>
  <div class="relative">
    <div class="h-[25vh] w-full -z-10 bg-JH-black absolute"></div>
    <div class="flex container gap-12 pt-[8vh]">
      <section id="gambar" class="w-1/2 flex flex-col gap-12">
        <NuxtImg src="/img/dummy.png" class="w-full h-[50vh] object-cover" />
        <NuxtImg src="/img/dummy.png" class="w-full h-[50vh] object-cover" />
      </section>
      <section id="text" class="w-1/2">
        <div class="h-[12vh] text-white border-b-4 mb-[10vh] flex items-end">
          <h1>Project Baliho PT Maju</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor
          quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis
          tincidunt Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis
          diam. Duis tinciduntLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque
          lobortis diam. Duis tincidunt
        </p>
        <NuxtImg src="/img/JH-biru.png" class="w-1/3" />
        <p>client:</p>
        <NuxtLink> PT Jejak Hasanah Indonesia Persero </NuxtLink>
        <p>Tanggal Pelaksanaan</p>
        <NuxtLink> PT Jejak Hasanah Indonesia Persero </NuxtLink>
        <p>Lokasi</p>
        <NuxtLink> PT Jejak Hasanah Indonesia Persero </NuxtLink>
        <p>Service yang digunakan</p>
        <NuxtLink> PT Jejak Hasanah Indonesia Persero </NuxtLink>
        <p>Testimony:</p>
        <AppCardTestimony />
      </section>
    </div>
  </div>
</template>
