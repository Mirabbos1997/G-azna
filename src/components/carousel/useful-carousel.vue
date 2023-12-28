<template>
  <container>
    <div class="main-text">
      <a-carousel
        :dots="true"
        :dotStyle="{ bottom: '50' }"
        :autoplay="true"
        :dot-position="dotPosition"
        :slidesToShow="4"
        class="useful-carousel"
      >
        <!-- Your carousel content goes here -->
        <a-carousel-slide v-for="(item, index) in carouselItems" :key="index">
          <a-col :lg="24" :xl="24" :xxl="24" class="my-4">
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
                  <h4 style="color: #0d0c43">{{ item.title }}</h4>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
        </a-carousel-slide>
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
      carouselItems: [
        { title: "Budjetdan tashqari pensiya jamg’armasi" },
        { title: "Elektron hukumat portali" },
        { title: "O’zbekiston Respublikasi Ochiq ma’lumotlar portali" },
        { title: "Budjetdan tashqari pensiya jamg’armasi" },
        { title: "Budjetdan tashqari pensiya jamg’armasi" },
      ],
    };
  },
};
</script>

<style>
@import "@/assets/useful-carousel.scss";
</style>