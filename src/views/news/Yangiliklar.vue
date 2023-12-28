<script setup>
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const activeKey = ref("1");
</script>

<template>
  <container>
    <a-row :gutter="[16, 16]">
      <a-col :lg="18" :xl="18" :xxl="18">
        <a-row :gutter="[16, 16]">
          <a-col :lg="24" :xl="24" :xxl="24">
            <div style="display: flex; justify-content: space-between">
              <div style="display: flex">
                <div class="orderDot mx-2 my-2"></div>
                <h3 style="color: #121262">Yangiliklar</h3>
              </div>

              <div class="mt-1" style="display: flex">
                <div class="mx-1 my-1">
                  <img
                    src="@/assets/images/rss-fill.png"
                    alt=""
                    style="width: 15px"
                  />
                </div>
                <h3 class="my-1" style="color: #121262">RSS</h3>
              </div>
            </div>
            <a-divider class="divider" />
          </a-col>
          <a-col :lg="8" :xl="8" :xxl="8">
            <div class="news-box">
              <img src="@/assets/images/1.png" alt="" />

              <p class="my-2">
                <img
                  src="@/assets/images/Calendar.png"
                  alt=""
                  style="width: 15px; margin-top: -3px"
                />
                27.10.2023
              </p>
              <h4 style="color: #0d0c43">
                Meva-sabzavotchilikni rivojlantirish bo‘yicha prezident
                topshiriq berdi
              </h4>

              <p style="color: #0d0c43; font-width: 100">
                Batafsil
                <ArrowRightOutlined style="color: #0d0c43" />
              </p>
            </div>
          </a-col>
          <a-col :lg="8" :xl="8" :xxl="8">
            <div class="news-box">
              <img src="@/assets/images/President.png" alt="" />

              <p class="my-2">
                <img
                  src="@/assets/images/Calendar.png"
                  alt=""
                  style="width: 15px; margin-top: -3px"
                />
                27.10.2023
              </p>
              <h4 style="color: #0d0c43">
                Kapital bozorini rivojlantirish – iqtisodiy o‘sishning asosiy
                omili
              </h4>

              <p style="color: #0d0c43; font-width: 100">
                Batafsil
                <ArrowRightOutlined style="color: #0d0c43" />
              </p>
            </div>
          </a-col>
          <a-col :lg="8" :xl="8" :xxl="8">
            <div class="news-box">
              <img src="@/assets/images/3.png" alt="" />

              <p class="my-2">
                <img
                  src="@/assets/images/Calendar.png"
                  alt=""
                  style="width: 15px; margin-top: -3px"
                />
                27.10.2023
              </p>
              <h4 style="color: #0d0c43">
                Xalqaro Mehnat Tashkiloti vakillari bilan uchrashuv bo‘lib o‘tdi
              </h4>

              <p style="color: #0d0c43; font-width: 100">
                Batafsil
                <ArrowRightOutlined style="color: #0d0c43" />
              </p>
            </div>
          </a-col>
          <a-col :lg="8" :xl="8" :xxl="8">
            <div class="news-box">
              <img src="@/assets/images/4.png" alt="" />

              <p class="my-2">
                <img
                  src="@/assets/images/Calendar.png"
                  alt=""
                  style="width: 15px; margin-top: -3px"
                />
                27.10.2023
              </p>
              <h4 style="color: #0d0c43">
                Meva-sabzavotchilikni rivojlantirish bo‘yicha prezident
                topshiriq berdi
              </h4>

              <p style="color: #0d0c43; font-width: 100">
                Batafsil
                <ArrowRightOutlined style="color: #0d0c43" />
              </p>
            </div>
          </a-col>
          <a-col :lg="8" :xl="8" :xxl="8">
            <div class="news-box">
              <img src="@/assets/images/5.png" alt="" />

              <p class="my-2">
                <img
                  src="@/assets/images/Calendar.png"
                  alt=""
                  style="width: 15px; margin-top: -3px"
                />
                27.10.2023
              </p>
              <h4 style="color: #0d0c43">
                Kapital bozorini rivojlantirish – iqtisodiy o‘sishning asosiy
                omili
              </h4>

              <p style="color: #0d0c43; font-width: 100">
                Batafsil
                <ArrowRightOutlined style="color: #0d0c43" />
              </p>
            </div>
          </a-col>
          <a-col :lg="8" :xl="8" :xxl="8">
            <div class="news-box">
              <img src="@/assets/images/6.png" alt="" />

              <p class="my-2">
                <img
                  src="@/assets/images/Calendar.png"
                  alt=""
                  style="width: 15px; margin-top: -3px"
                />
                27.10.2023
              </p>
              <h4 style="color: #0d0c43">
                Xalqaro Mehnat Tashkiloti vakillari bilan uchrashuv bo‘lib o‘tdi
              </h4>

              <p style="color: #0d0c43; font-width: 100">
                Batafsil
                <ArrowRightOutlined style="color: #0d0c43" />
              </p>
            </div>
          </a-col>
          <a-col :lg="24" :xl="24" :xxl="24">
            <a-divider style="height: 2px">
              <p class="bottomLineText">Barcha yangiliklar</p></a-divider
            >
          </a-col>
        </a-row>
      </a-col>
      <a-col :lg="6" :xl="6" :xxl="6">
        <div class="mb-3 mt-1">
          <div style="display: flex">
            <div class="orderDot mx-2 my-2"></div>
            <h3 style="color: #121262">Interaktiv xizmatlar</h3>
          </div>
          <a-divider class="divider" />
        </div>
        <a-card>
          <a-row :gutter="[24, 24]">
            <a-col :lg="4" :xl="4" :xxl="4">
              <img
                src="@/assets/images/InteractiveService.png"
                alt=""
                style="width: 30px"
              />
            </a-col>
            <a-col :lg="20" :xl="20" :xxl="20">
              <h4 style="color: #0d0c43">Onlayn matbuot xizmati</h4>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="my-4">
          <a-row :gutter="[24, 24]">
            <a-col :lg="4" :xl="4" :xxl="4">
              <img
                src="@/assets/images/InteractiveService.png"
                alt=""
                style="width: 30px"
              />
            </a-col>
            <a-col :lg="20" :xl="20" :xxl="20">
              <h4 style="color: #0d0c43">Qabul kunlari</h4>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="my-4">
          <a-row :gutter="[24, 24]">
            <a-col :lg="4" :xl="4" :xxl="4">
              <img
                src="@/assets/images/InteractiveService.png"
                alt=""
                style="width: 30px"
              />
            </a-col>
            <a-col :lg="20" :xl="20" :xxl="20">
              <h4 style="color: #0d0c43">Ko‘p so‘raladigan savollar</h4>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="my-4">
          <a-row :gutter="[24, 24]">
            <a-col :lg="4" :xl="4" :xxl="4">
              <img
                src="@/assets/images/InteractiveService.png"
                alt=""
                style="width: 30px"
              />
            </a-col>
            <a-col :lg="20" :xl="20" :xxl="20">
              <h4 style="color: #0d0c43">Yillik hisobotlar</h4>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="my-4">
          <a-row :gutter="[24, 24]">
            <a-col :lg="4" :xl="4" :xxl="4">
              <img
                src="@/assets/images/InteractiveService.png"
                alt=""
                style="width: 30px"
              />
            </a-col>
            <a-col :lg="20" :xl="20" :xxl="20">
              <h4 style="color: #0d0c43">Fotogalareya</h4>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="my-4">
          <a-row :gutter="[24, 24]">
            <a-col :lg="4" :xl="4" :xxl="4">
              <img
                src="@/assets/images/InteractiveService.png"
                alt=""
                style="width: 30px"
              />
            </a-col>
            <a-col :lg="20" :xl="20" :xxl="20">
              <h4 style="color: #0d0c43">Videogalareya</h4>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="my-4">
          <a-row :gutter="[24, 24]">
            <a-col :lg="4" :xl="4" :xxl="4">
              <img
                src="@/assets/images/InteractiveService.png"
                alt=""
                style="width: 30px"
              />
            </a-col>
            <a-col :lg="20" :xl="20" :xxl="20">
              <h4 style="color: #0d0c43">Maqolalar</h4>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </container>
</template>

<style scoped>
@import "@/assets/news.scss";
</style>