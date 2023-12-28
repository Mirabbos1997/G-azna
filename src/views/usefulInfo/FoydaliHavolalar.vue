<script setup>
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { ArrowLeftOutlined } from "@ant-design/icons-vue";

import UsefulCarousel from "@/components/carousel/useful-carousel.vue";
</script>

<template>
  <container>
    <section class="usefeulInfo">
      <a-row :gutter="[16, 16]">
        <a-col :lg="24" :xl="24" :xxl="24">
          <div style="display: flex; justify-content: space-between">
            <div style="display: flex">
              <div class="orderDot mx-2 my-2"></div>
              <h3 style="color: #121262">Foydali havolalar</h3>
            </div>

            <div class="my-2" style="display: flex">
              <ArrowLeftOutlined class="mr-1" style="color: #0d0c43" />
              <ArrowRightOutlined class="ml-1" style="color: #0d0c43" />
            </div>
          </div>
          <a-divider class="divider" />

          <div>
            <UsefulCarousel />
          </div>
        </a-col>
      </a-row>
    </section>
  </container>
</template>

<style scoped>
@import "@/assets/usefulInfo.scss";
@import "@/assets/useful-carousel.scss";
</style>
