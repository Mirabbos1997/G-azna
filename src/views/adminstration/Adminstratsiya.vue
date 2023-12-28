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
        <a-row :gutter="[24, 24]">
          <a-col :lg="24" :xl="24" :xxl="24" class="py-2">
            <h1 style="font-weight: 900; margin-bottom: 0">Raxbariyat</h1>
            <a-breadcrumb>
              <a-breadcrumb-item>Qo'mita</a-breadcrumb-item>
              <a-breadcrumb-item>
                <a href="">Raxbariyat</a>
              </a-breadcrumb-item>
            </a-breadcrumb>
            <a-divider></a-divider>
          </a-col>
          <a-col :lg="24" :xl="24" :xxl="24">
            <a-row :gutter="[24, 24]">
              <a-col :lg="18" :xl="18" :xxl="18">
                <div class="rahbariyat">
                  <a-row :gutter="[24, 24]">
                    <a-col :lg="7" :xl="7" :xxl="7">
                      <img
                        src="@/assets/images/ivc-director.png"
                        alt=""
                        class="py-4 pl-3"
                        style="width: 100%"
                      />
                    </a-col>
                    <a-col :lg="16" :xl="16" :xxl="16">
                      <h1
                        class="py-4"
                        style="font-weight: 900; margin-bottom: 0"
                      >
                        Атаджанов Муродбек Бекберганович
                      </h1>
                      <h2 style="color: #636c79">
                        Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги
                        ҳузуридаги Ғазначилик хизмати қўмитаси раиси
                      </h2>
                      <p class="top" style="color: #99a0a8">
                        Batafsil ma‘lumot »
                      </p>
                    </a-col>
                  </a-row>
                </div>
              </a-col>
              <a-col :lg="6" :xl="6" :xxl="6">
               <ListMenu/>
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
