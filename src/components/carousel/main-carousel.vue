<template>
  <container>
    <div class="main-text">
      <a-carousel :dots="true" :autoplay="true" :dot-position="dotPosition">
        <!-- Your carousel content goes here -->
        <div>
          <h1>
            GERMANIYANING “KFW” TARAQQIYOT BANKI VAKILLARI BILAN HAMKORLIK
            MASALALARI MUHOKAMA QILINDI
          </h1>
          <p>
            Unda O‘zbekiston Respublikasi Iqtisodiyot va moliya vaziri
            o‘rinbosari Jasur Karshibayev boshchiligidagi vazirlik vakillari
            hamda “KfW” taraqqiyot bankining Markaziy Osiyo bo‘yicha katta
            menejeri va iqtisodchisi Petar Jorjiyev, portfel menejeri Juliya
            Frizen, bankning Markaziy Osiyo bo‘yicha mintaqaviy vakolatxonasi
            direktori Andreas Shnayder, loyiha koordinatori Malik Muxitdinov
            ishtirok etdilar.
          </p>
          <a-button class="mt-4">Batafsil</a-button>
        </div>
        <div>
          <h1>
            GERMANIYANING “KFW” TARAQQIYOT BANKI VAKILLARI BILAN HAMKORLIK
            MASALALARI MUHOKAMA QILINDI
          </h1>
          <p>
            Unda O‘zbekiston Respublikasi Iqtisodiyot va moliya vaziri
            o‘rinbosari Jasur Karshibayev boshchiligidagi vazirlik vakillari
            hamda “KfW” taraqqiyot bankining Markaziy Osiyo bo‘yicha katta
            menejeri va iqtisodchisi Petar Jorjiyev, portfel menejeri Juliya
            Frizen, bankning Markaziy Osiyo bo‘yicha mintaqaviy vakolatxonasi
            direktori Andreas Shnayder, loyiha koordinatori Malik Muxitdinov
            ishtirok etdilar.
          </p>
          <a-button class="mt-4">Batafsil</a-button>
        </div>
        <div>
          <h1>
            GERMANIYANING “KFW” TARAQQIYOT BANKI VAKILLARI BILAN HAMKORLIK
            MASALALARI MUHOKAMA QILINDI
          </h1>
          <p>
            Unda O‘zbekiston Respublikasi Iqtisodiyot va moliya vaziri
            o‘rinbosari Jasur Karshibayev boshchiligidagi vazirlik vakillari
            hamda “KfW” taraqqiyot bankining Markaziy Osiyo bo‘yicha katta
            menejeri va iqtisodchisi Petar Jorjiyev, portfel menejeri Juliya
            Frizen, bankning Markaziy Osiyo bo‘yicha mintaqaviy vakolatxonasi
            direktori Andreas Shnayder, loyiha koordinatori Malik Muxitdinov
            ishtirok etdilar.
          </p>
          <a-button class="mt-4">Batafsil</a-button>
        </div>
        <div>
          <h1>
            GERMANIYANING “KFW” TARAQQIYOT BANKI VAKILLARI BILAN HAMKORLIK
            MASALALARI MUHOKAMA QILINDI
          </h1>
          <p>
            Unda O‘zbekiston Respublikasi Iqtisodiyot va moliya vaziri
            o‘rinbosari Jasur Karshibayev boshchiligidagi vazirlik vakillari
            hamda “KfW” taraqqiyot bankining Markaziy Osiyo bo‘yicha katta
            menejeri va iqtisodchisi Petar Jorjiyev, portfel menejeri Juliya
            Frizen, bankning Markaziy Osiyo bo‘yicha mintaqaviy vakolatxonasi
            direktori Andreas Shnayder, loyiha koordinatori Malik Muxitdinov
            ishtirok etdilar.
          </p>
          <a-button class="mt-4">Batafsil</a-button>
        </div>
      </a-carousel>
    </div>
  </container>
</template>

<script>
import { Carousel } from "ant-design-vue";

export default {
  components: {
    "a-carousel": Carousel,
  },
  data() {
    return {
      dotPosition: "bottom", // You can customize the dot position as needed
    };
  },
};
</script>

<style>
@import "@/assets/carousel.scss";
</style>