<script setup>
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { ArrowLeftOutlined } from "@ant-design/icons-vue";

import UsefulCarousel from "@/components/carousel/useful-carousel.vue";
</script>

<template>
  <section class="usefeulInfo px-2">
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

        <a-row :gutter="[16, 16]">
          <!-- <a-col :lg="6" :xl="6" :xxl="6" class="my-4">
            <a-card>
            <a-row :gutter="[24, 24]">
              <a-col :lg="4" :xl="4" :xxl="4" class="my-2">
                <img
                  src="@/assets/images/Gerb.png"
                  alt=""
                  style="width: 30px"
                />
              </a-col>
              <a-col :lg="20" :xl="20" :xxl="20">
                <h4 style="color: #0d0c43">
                  Budjetdan tashqari pensiya jamg’armasi
                </h4>
              </a-col>
            </a-row>
          </a-card>
          </a-col> -->
          <!-- <a-col :lg="6" :xl="6" :xxl="6" class="my-4">
            <a-card>
              <a-row :gutter="[24, 24]">
                <a-col :lg="4" :xl="4" :xxl="4" class="my-2">
                  <img
                    src="@/assets/images/Gerb.png"
                    alt=""
                    style="width: 30px"
                  />
                </a-col>
                <a-col :lg="20" :xl="20" :xxl="20">
                  <h4 style="color: #0d0c43">Elektron hukumat portali</h4>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6" class="my-4">
            <a-card>
              <a-row :gutter="[24, 24]">
                <a-col :lg="4" :xl="4" :xxl="4" class="my-2">
                  <img
                    src="@/assets/images/Gerb.png"
                    alt=""
                    style="width: 30px"
                  />
                </a-col>
                <a-col :lg="20" :xl="20" :xxl="20">
                  <h4 style="color: #0d0c43">
                    O’zbekiston Respublikasi Ochiq ma’lumotlar portali
                  </h4>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6" class="my-4">
            <a-card>
              <a-row :gutter="[24, 24]">
                <a-col :lg="4" :xl="4" :xxl="4" class="my-2">
                  <img
                    src="@/assets/images/Gerb.png"
                    alt=""
                    style="width: 30px"
                  />
                </a-col>
                <a-col :lg="20" :xl="20" :xxl="20">
                  <h4 style="color: #0d0c43">
                    Budjetdan tashqari pensiya jamg’armasi
                  </h4>
                </a-col>
              </a-row>
            </a-card>
          </a-col> -->
        </a-row>
      </a-col>
    </a-row>
  </section>
</template>

<style scoped>
@import "@/assets/usefulInfo.scss";
@import "@/assets/useful-carousel.scss";
</style>