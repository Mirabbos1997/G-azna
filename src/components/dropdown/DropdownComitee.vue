<template>
  <a-dropdown :trigger="['click']" :placement="bottomRight">
    <a @click.prevent>
      <h5 class="ant-dropdown-link text-white">
        QO'MITA
        <DownOutlined />
      </h5>
    </a>
    <template #overlay>
      <container>
        <a-menu
          style="background-color: #121262; padding: 10px; width: 750px"
          class="menu-vertical m-2"
        >
          <a-row :gutter="[16, 16]">
            <a-col :lg="6" :xl="6" :xxl="6">
              <a-menu-item class="bg-palette">
                <a-router-link>
                  <h5 class="text-white">Biz haqimizda</h5>
                </a-router-link>
              </a-menu-item>
            </a-col>
            <a-col :lg="6" :xl="6" :xxl="6">
              <a-menu-item class="bg-palette">
                <a-router-link>
                  <h5 class="text-white">
                    G'aznachilikning vazifalari, funksiyalari, nizomi va ish
                    rejasi
                  </h5>
                </a-router-link>
              </a-menu-item>
            </a-col>
          </a-row>
          <!-- <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item> -->
        </a-menu>
      </container>
    </template>
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
</style>
