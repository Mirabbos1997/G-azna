<template>
  <a-dropdown :trigger="['click']" placement="bottom" class="mx-3 my-1">
    <div>
      <h4 class="ant-dropdown-link text-white">
        QO'MITA
        <DownOutlined />
      </h4>
    </div>
    <template #overlay>
      <a-menu
        style="background-color: #121262; padding: 10px; width: 880px"
        class="menu-vertical mt-2"
      >
        <a-row :gutter="[16, 16]">
          <a-col :lg="6" :xl="6" :xxl="6">
            <div class="bg-palette">
              <router-link to="/about">
                <h5 class="text-white p-2 pointer">Biz haqimizda</h5>
              </router-link>
            </div>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6">
            <div class="bg-palette">
              <router-link to="">
                <h5 class="text-white p-2">
                  G'aznachilikning vazifalari, funksiyalari, nizomi va ish
                  rejasi
                </h5>
              </router-link>
            </div>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6">
            <div class="bg-palette">
              <router-link to="">
                <h5 class="text-white p-2">G'aznachilikning tuzilmasi</h5>
              </router-link>
            </div>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6">
            <div class="bg-palette">
              <router-link to="/adminstration">
                <h5 class="text-white p-2">Raxbariyat</h5>
              </router-link>
            </div>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6">
            <div class="bg-palette">
              <router-link to="">
                <h5 class="text-white p-2">Markaziy apparat</h5>
              </router-link>
            </div>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6">
            <div class="bg-palette">
              <router-link to="">
                <h5 class="text-white p-2">Xududiy bo'linmalar</h5>
              </router-link>
            </div>
          </a-col>
          <a-col :lg="6" :xl="6" :xxl="6">
            <div class="bg-palette p-2">
              <router-link to="">
                <h5 class="text-white">Gender tenglik</h5>
              </router-link>
            </div>
          </a-col>
        </a-row>
      </a-menu>
    </template>
    <!-- </container> -->
  </a-dropdown>
</template>

<script>
import { defineComponent } from "vue";
import { DownOutlined, UpOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    DownOutlined,
    UpOutlined,
  },
  data() {
    return {
      isUpIcon: false, // Set to true or false based on your condition
    };
  },
  computed: {
    iconType() {
      return this.isUpIcon ? "up" : "down";
    },
  },
  methods: {
    toggleIcon() {
      this.isUpIcon = !this.isUpIcon;
    },
  },
});
</script>

<style scoped>
.menu-vertical.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: none !important;
}

.menuHoverFocus:hover {
  background-color: #2a2e70;
}
</style>
