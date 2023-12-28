<script setup>
import backgroundImage from "@/assets/images/StatisticBg.png";
</script>

<template>
  <section
    class="statistic-page"
    :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <div class="statistic-banner">
      <container>
        <a-row :gutter="[16, 16]" class="px-2">
          <a-col :lg="12" :xl="12" :xxl="12" class="marginTop">
            <div class="bg-palette">
              <a-row :gutter="16">
                <a-col :lg="12" :xl="12" :xxl="12" class="text-center my-4">
                  <h3 class="text-white p-4">DAROMAD VA TUSHUMLAR</h3>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <div class="m-3" style="background-color: #2c2d74">
                    <a-row :gutter="16" class="p-2 ml-2">
                      <a-col :lg="6" :xl="6" :xxl="6" class="my-2">
                        <img src="@/assets/images/money-bag.png" alt="" />
                      </a-col>
                      <a-col :lg="18" :xl="18" :xxl="18">
                        <h1 style="color: #04b400; font-weight: 800">
                          41 916.1
                        </h1>
                        <p class="text-white">mlrd.so'm</p>
                      </a-col>
                    </a-row>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>

          <a-col :lg="12" :xl="12" :xxl="12" class="marginTop">
            <div class="bg-palette">
              <a-row :gutter="16">
                <a-col :lg="12" :xl="12" :xxl="12" class="text-center my-4">
                  <h3 class="text-white p-4">UMUMIY XARAJATLAR</h3>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <div class="m-3" style="background-color: #2c2d74">
                    <a-row :gutter="16" class="p-2 ml-2">
                      <a-col :lg="6" :xl="6" :xxl="6" class="my-2">
                        <img src="@/assets/images/money-bag.png" alt="" />
                      </a-col>
                      <a-col :lg="18" :xl="18" :xxl="18">
                        <h1 style="color: #fb2d45; font-weight: 800">
                          -1 027.2
                        </h1>
                        <p class="text-white">mlrd.so'm</p>
                      </a-col>
                    </a-row>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>

          <a-col :lg="6" :xl="6" :xxl="6" class="marginBottom">
            <div class="bg-palette" style="height: 180px">
              <a-row class="mx-4">
                <a-col :lg="24" :xl="24" :xxl="24">
                  <h4 class="text-white py-4">Elektron do‘kon</h4>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <h1 class="text-white f-bold">41 916</h1>
                  <p class="text-white">Xarid</p>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <h1 class="text-white f-bold">41 916</h1>
                  <p class="text-white">mlrd.so'm</p>
                </a-col>
              </a-row>
            </div>
          </a-col>

          <a-col :lg="6" :xl="6" :xxl="6" class="marginBottom">
            <div class="bg-palette" style="height: 180px">
              <a-row class="mx-4">
                <a-col :lg="24" :xl="24" :xxl="24">
                  <h4 class="text-white py-4">
                    Boshlang‘ich narxni pasaytirish uchun o‘tkaziladigan auksion
                  </h4>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <h1 class="text-white f-bold">41 916</h1>
                  <p class="text-white">Xarid</p>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <h1 class="text-white f-bold">41 916</h1>
                  <p class="text-white">mlrd.so'm</p>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6" class="marginBottom">
            <div class="bg-palette" style="height: 180px">
              <a-row class="mx-4">
                <a-col :lg="24" :xl="24" :xxl="24" class="my-4">
                  <h4 class="text-white">Eng yaxshi takliflarni tanlash</h4>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <h1 class="text-white f-bold">41 916</h1>
                  <p class="text-white">Xarid</p>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <h1 class="text-white f-bold">41 916</h1>
                  <p class="text-white">mlrd.so'm</p>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6" class="marginBottom">
            <div class="bg-palette" style="height: 180px">
              <a-row class="mx-4">
                <a-col :lg="24" :xl="24" :xxl="24">
                  <h4 class="text-white py-4">Tender savdolari</h4>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <h1 class="text-white f-bold">41 916</h1>
                  <p class="text-white">Xarid</p>
                </a-col>
                <a-col :lg="12" :xl="12" :xxl="12">
                  <h1 class="text-white f-bold">41 916</h1>
                  <p class="text-white">mlrd.so'm</p>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </container>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/statistics.scss";
</style>