<script setup>
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/carousel/main-carousel.vue";
import LeftMenu from "@/components/main-left-menu/LeftMenu.vue";
import Yangiliklar from "./news/Yangiliklar.vue";
import StatistikMalumotlar from "./statistics/StatistikMalumotlar.vue";
import FoydaliHavolalar from "./usefulInfo/FoydaliHavolalar.vue";

import { ref } from "vue";

const activeKey = ref("first");
</script>

<template>
  <main class="home-page">
    <LeftMenu />
    <container>
      <section class="home-page-banner">
        <Navbar />
        <a-row style="margin-top:120px">
          <a-col :lg="20" :xl="20" :xxl="20">
            <Carousel />
          </a-col>
          <a-col :lg="2" :xl="2" :xxl="2" class="ml-auto">
            <div class="main-frame">
              <img src="@/assets/images/main-frame.png" alt="" />
            </div>
          </a-col>
        </a-row>
      </section>
    </container>
  </main>
  <container>
    <div class="home-body">
      <Yangiliklar />
    </div>
  </container>
  <StatistikMalumotlar />
  <FoydaliHavolalar />
</template>
