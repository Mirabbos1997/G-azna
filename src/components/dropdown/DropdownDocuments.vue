<template>
  <a-dropdown>
    <a @click.prevent>
      <h5 class="ant-dropdown-link text-white">HUJJATLAR <DownOutlined /></h5>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
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