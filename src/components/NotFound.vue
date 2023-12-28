<template>
  <a-card>
    <div class="text-center py-5">
      <div class="text-center">
        <img src="@/assets/images/404_img.svg" alt="">
      </div>
      <h1 class="text-center mt-4">Ma’lumot topilmadi</h1>
      <p class="text-muted">
        Bunday sahifa mavjud emas yoki tizim administratori tomonidan o'chirib yuborilgan!
      </p>
      <router-link class="ant-btn ant-btn-primary" :to="isCabinet ? '/cabinet/physical' : '/'">
        Bosh sahifaga qaytish
      </router-link>
    </div>
  </a-card>
</template>

<script setup >
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const route = useRoute();
const isCabinet = ref(false);

watch(route, ()=>{
 isCabinet.value = route.fullPath.includes('/cabinet');
})
</script>

<style scoped lang="scss">
.ant-card{
  padding: 60px 1.5rem;
}
</style>