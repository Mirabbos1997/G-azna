<script setup>
// import Navbar from '@/components/Navbar.vue';
import Footer from "@/components/Footer.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const isLogin = ref(false);
watch([route], () => {
  isLogin.value = route.fullPath.includes("/login");
});
</script>
<template>
  <!-- <template v-if="!isLogin">
    <Navbar/>
  </template> -->
  <RouterView />
  <template v-if="!isLogin">
    <Footer />
  </template>
</template>

