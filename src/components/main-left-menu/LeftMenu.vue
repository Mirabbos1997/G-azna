<script setup>
import Container from "@/components/Container.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { UpOutlined } from "@ant-design/icons-vue";
import { InstagramOutlined } from "@ant-design/icons-vue";
import { TwitterOutlined } from "@ant-design/icons-vue";
import { FacebookOutlined } from "@ant-design/icons-vue";

import "@fortawesome/fontawesome-free/css/all.css";

const size = ref("100px");

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const showButton = ref(true);

const checkScrollPosition = () => {
  showButton.value = window.scrollY < 100;
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});

const placement = ref("left");
const visible = ref(false);
const showDrawer = () => {
  visible.value = !visible.value;
};

const onClose = () => {
  visible.value = false;
};
</script>

<template>
  <div
    class="backToTop"
    v-show="showButton"
    @click="showDrawer"
    :style="{ marginLeft: visible ? '270px' : '0' }"
  >
    <img src="@/assets/images/Actions.png" alt="" />
  </div>

  <a-drawer
    :width="270"
    :title="''"
    :closable="false"
    :placement="placement"
    :visible="visible"
    :duration="100"
    :bodyStyle="{ background: '#121262', padding: '10px' }"
    @close="onClose"
  >
    <div>
      <div class="text-center my-2">
        <img src="@/assets/images/Gerb.png" alt="" />
      </div>
      <h5 class="text-white p-0 f-light text-center mb-0">
        O‘ZBEKISTON RESPUBLIKASI IQTISODIYOT VA MOLIYA VAZIRLIGI
      </h5>
      <h4 class="text-white p-0 f-bolder text-center m-0">
        G‘AZNACHILIK XIZMATI QO‘MITASI
      </h4>
      <a-divider style="background-color: #272770" />
      <h5 class="text-center text-white f-bold">Ishonch telefonlari:</h5>
      <p class="text-center text-white small">(998 71) 203-00-50</p>
      <h5 class="text-center text-white f-bold">Axborot xizmati:</h5>
      <p class="text-center text-white small">(998 71) 203-00-50</p>

      <p class="mt-4 text-center text-white small">Biz ijtimoiy tarmoqlarda</p>

      <div class="text-center">
        <a-avatar class="mx-2" style="background-color: #7171a1" size="small">
          <template #icon>
            <i class="fab fa-telegram-plane" style="color: #ffff"></i>
          </template>
        </a-avatar>
        <a-avatar class="mx-2" style="background-color: #7171a1" size="small">
          <template #icon>
            <InstagramOutlined />
          </template>
        </a-avatar>
        <a-avatar class="mx-2" style="background-color: #7171a1" size="small">
          <template #icon>
            <TwitterOutlined />
          </template>
        </a-avatar>
        <a-avatar class="mx-2" style="background-color: #7171a1" size="small">
          <template #icon>
            <FacebookOutlined />
          </template>
        </a-avatar>
      </div>

      <p class="text-white text-center top px-2 small">
        Saytdan olingan ma'lumotlardan foydalanilganda Moliya vazirligining veb
        sayti
        <a-typography-link
          type="warning"
          href="https://gazna.imv.uz"
          target="_blank"
        >
          www.gazna.imv.uz
        </a-typography-link>
        ko‘rsatilishi shart.
      </p>
    </div>
  </a-drawer>
</template>

<style lang="scss" scoped>
.backToTop {
  position: fixed;
  bottom: 400px;
  left: 0px;
  z-index: 999999;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  width: 60px;
  height: 60px;
}
</style>
