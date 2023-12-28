<template>
  <a-dropdown>
    <a class="ant-dropdown-link text-white" @click.prevent>
      USD
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">Euro</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">UZB</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script>
import { defineComponent } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>