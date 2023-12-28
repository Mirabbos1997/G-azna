<template>
  <footer>
    <container class="text-light py-4">
      <!-- © Axborot texnologiyalari markazi -->
      <div class="footer-body">
        <a-row :gutter="[16, 16]">
          <a-col :lg="8" :xl="8" :xxl="8">
            <router-link to="/">
              <img
                src="@/assets/images/minstryGerb.png"
                alt=""
                style="width: 250px"
              />
            </router-link>
            <p class="text-white mt-3 small">
              Saytdagi ma'lumotlardan foydalanilganda manba sifatida Iqtisodiyot
              va moliya vazirligi huzuridagi G‘aznachilik xizmati qo‘mitasining
              rasmiy veb sayti
              <a-typography-link
                type="warning"
                href="https://gazna.imv.uz"
                target="_blank"
              >
                www.gazna.imv.uz
              </a-typography-link>
              ko‘rsatilishi shart.
            </p>

            <div>
              <a-avatar
                class="mr-2"
                style="background-color: #7171a1"
                size="small"
              >
                <template #icon>
                  <i class="fab fa-telegram-plane" style="color: #ffff"></i>
                </template>
              </a-avatar>
              <a-avatar
                class="mx-2"
                style="background-color: #7171a1"
                size="small"
              >
                <template #icon>
                  <InstagramOutlined />
                </template>
              </a-avatar>
              <a-avatar
                class="mx-2"
                style="background-color: #7171a1"
                size="small"
              >
                <template #icon>
                  <TwitterOutlined />
                </template>
              </a-avatar>
              <a-avatar
                class="mx-2"
                style="background-color: #7171a1"
                size="small"
              >
                <template #icon>
                  <FacebookOutlined />
                </template>
              </a-avatar>
            </div>
          </a-col>
          <a-col :lg="5" :xl="5" :xxl="5">
            <h3 class="text-white">INTERAKTIV MENYU</h3>
            <p class="text-white">Qo'mita</p>
            <p class="text-white">Ochiq ma'lumotlar</p>
            <p class="text-white">Axborot xizmati</p>
            <p class="text-white">Hujjatlar</p>
            <p class="text-white">Bog'lanish</p>
          </a-col>
          <a-col :lg="5" :xl="5" :xxl="5">
            <h3 class="text-white">ISHONCH TELEFONLARI</h3>
            <h4 class="text-white">Ishonch telefonlari:</h4>
            <p class="text-white">(998 71) 203-00-50</p>
            <h4 class="text-white">Axborot xizmati:</h4>
            <p class="text-white">(998 71) 203-00-50</p>
            <h4 class="text-white">Devonxona:</h4>
            <p class="text-white">(998 71) 203-00-50</p>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6">
            <h3 class="text-white uppercase-text">Bog'lanish</h3>
            <h4 class="text-white">Nazorat bo‘limi:</h4>
            <p class="text-white">(998 71) 203-00-50</p>
            <h4 class="text-white">Faks:</h4>
            <p class="text-white">(998 71) 203-00-50</p>
            <h4 class="text-white">Manzil:</h4>
            <p class="text-white">Sharof Rashidov ko‘chasi 16A</p>
          </a-col>
          <a-col :lg="24" :xl="24" :xxl="24">
            <a-divider style="background-color: #2a2e54"></a-divider>
          </a-col>
          <a-col :lg="24" :xl="24" :xxl="24">
            <a-row :gutter="[16, 16]">
              <a-col :lg="16" :xl="16" :xxl="16">
                <h4 class="text-white">
                  Copyright © 2023. G‘aznachilik xizmati qo‘mitasi. Barcha
                  huquqlar himoyalangan
                </h4>
              </a-col>
              <a-col :lg="8" :xl="8" :xxl="8" >
                <h4 class="text-white" style="float:right">
                  Sayt yaratuvchisi: IMV Axborot texnologiyalari markazi
                </h4>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </container>
  </footer>
</template>

<script setup>
import Container from "./Container.vue";
import { InstagramOutlined } from "@ant-design/icons-vue";
import { TwitterOutlined } from "@ant-design/icons-vue";
import { FacebookOutlined } from "@ant-design/icons-vue";

import "@fortawesome/fontawesome-free/css/all.css";
</script>

<style scoped>
footer {
  background-color: #101161;
}
.footer-body {
  margin: 0 35px;
}
</style>
