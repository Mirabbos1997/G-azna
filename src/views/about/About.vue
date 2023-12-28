<script setup>
import Container from "../../components/Container.vue";
import Navbar from "@/components/Navbar.vue";
import FoydaliHavolalar from "@/views/usefulInfo/FoydaliHavolalar.vue";
import LeftMenu from "@/components/main-left-menu/LeftMenu.vue";
import ListMenu from "@/components/list-item-menu/ListMenu.vue";
</script>

<template>
  <main>
    <LeftMenu />
    <section style="background-color: #101161">
      <container>
        <Navbar class="pb-2" />
      </container>
    </section>
    <container>
      <div class="mx-4 py-4">
        <a-row :gutter="[16, 16]">
          <a-col :lg="24" :xl="24" :xxl="24" class="py-2">
            <h1 style="font-weight: 900; margin-bottom: 0">Biz haqimizda</h1>
            <a-breadcrumb>
              <a-breadcrumb-item>Qo'mita</a-breadcrumb-item>
              <a-breadcrumb-item>
                <a href="">Biz haqimizda</a>
              </a-breadcrumb-item>
            </a-breadcrumb>
            <a-divider></a-divider>
          </a-col>
          <a-col :lg="24" :xl="24" :xxl="24">
            <a-row :gutter="[16, 16]">
              <a-col :lg="18" :xl="18" :xxl="18">
                <img
                  src="@/assets/images/prezident-about.png"
                  alt=""
                  style="width: 100%"
                />
                <h3 class="py-2" style="font-weight: 900; margin-bottom: 0">
                  Meva-sabzavotchilikni rivojlantirish bo‘yicha prezident
                  topshiriq berdi
                </h3>
                <p>
                  Unda O‘zbekiston Respublikasi Iqtisodiyot va moliya vaziri
                  o‘rinbosari Jasur Karshibayev boshchiligidagi vazirlik
                  vakillari hamda “KfW” taraqqiyot bankining Markaziy Osiyo
                  bo‘yicha katta menejeri va iqtisodchisi Petar Jorjiyev,
                  portfel menejeri Juliya Frizen, bankning Markaziy Osiyo
                  bo‘yicha mintaqaviy vakolatxonasi direktori Andreas Shnayder,
                  loyiha koordinatori Malik Muxitdinov ishtirok etdilar.
                </p>
              </a-col>
              <a-col :lg="6" :xl="6" :xxl="6">
                <ListMenu />
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </container>
    <FoydaliHavolalar />
  </main>
</template>

<style scoped>
@import "@/assets/about.scss";
</style>
