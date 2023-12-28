
<script setup>
import Container from "./Container.vue";
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { SearchOutlined } from "@ant-design/icons-vue";
import { CaretUpOutlined } from "@ant-design/icons-vue";
import { CaretDownOutlined } from "@ant-design/icons-vue";

import DropdownComitee from "@/components/dropdown/DropdownComitee.vue";
import DropdownCorruption from "@/components/dropdown/DropdownCorruption.vue";
import DropdownInfoService from "@/components/dropdown/DropdownInfoService.vue";
import DropdownDocuments from "@/components/dropdown/DropdownDocuments.vue";
import DropdownCurrency from "@/components/dropdown/DropdownCurrency.vue";
import SelectLang from "@/components/select/SelectLang.vue";

const searchForm = reactive({
  query: "",
});
const router = useRouter();
const route = useRoute();

const isCabinet = ref(false);
watch(route, () => {
  isCabinet.value = route.fullPath.includes("/cabinet");
});
</script>

<template>
  <nav>
    <container class="mx-4">
      <a-row gutter="16" :align="'middle'" class="mx-1">
        <a-col class="text-white" style="border-right: 1px solid #697b9d"
          >Sayt xaritasi</a-col
        >
        <a-col class="text-white" style="border-right: 1px solid #697b9d"
          >Virtual qabulxona</a-col
        >
        <a-col class="text-white" style="border-right: 1px solid #697b9d"
          >Davlat ramzlari</a-col
        >
        <a-col class="text-white" style="border-right: 1px solid #697b9d"
          >O‘zbekiston haqida</a-col
        >
        <a-col class="ml-auto text-white"><SearchOutlined /></a-col>
        <a-col class="text-white"><DropdownCurrency /></a-col>
        <a-col class="text-white">
          Sotib olish
          <p style="padding: 0">
            11290.00 <CaretUpOutlined style="color: #04b400" />
          </p>
        </a-col>
        <a-col class="text-white">
          Sotish
          <p style="padding: 0">
            11345.00 <CaretDownOutlined style="color: #04b400" />
          </p>
        </a-col>
        <a-col><SelectLang /></a-col>
      </a-row>
      <a-row gutter="16" :align="'middle'" class="my-4">
        <a-col :lg="6" :xl="6" :xxl="6">
          <router-link to="/">
            <img
              src="@/assets/images/minstryGerb.png"
              alt=""
              style="width: 250px"
            />
          </router-link>
        </a-col>
        <a-col :xs="12" :sm="12" :md="10" :lg="18" :xl="18" :xxl="18">
          <a-row>
            <a-col class="ml-auto"
              ><h5 class="text-white my-1">BOSH SAHIFA</h5></a-col
            >
            <a-col class="mx-3 my-1"><DropdownComitee /></a-col>
            <a-col><h5 class="text-white my-1">OCHIQ MA'LUMOTLAR</h5></a-col>
            <a-col class="mx-3 my-1"><DropdownCorruption /></a-col>
            <a-col class="my-1"><DropdownInfoService /></a-col>
            <a-col class="mx-3 my-1"><DropdownDocuments /></a-col>
            <a-col><h5 class="text-white my-1">BOG'LANISH</h5></a-col>
            <a-col class="mx-3">
              <img
                src="@/assets/images/NavbarFrame.png"
                alt=""
                style="width: 30px"
              />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </container>
  </nav>
</template>


<style scoped>
@import "@/assets/navbar.scss";
</style>
