<template>
  <a-card>
    <div v-for="(item, index) in cardItems" :key="index" class="my-2">
      <ul>
        <li
          :class="{ isActive: isActive == item.id }"
          class="pointer"
          @click="toggleSphere(item.id, item.link)"
        >
          <!-- <router-link :to="`${item.link}`"> -->
          <h3 :class="{ isActive: isActive == item.id }">
            {{ item.title }}
          </h3>
        </li>
      </ul>
    </div>
  </a-card>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isActive = ref();
const cardItems = [
  {
    id: "1",
    title: "Biz haqimizda",
    link: "/about",
  },
  {
    id: "2",
    title: "G'aznachilikning vazifalari, funktsiyalari, nizomi va ish rejasi",
    link: "",
  },
  {
    id: "3",
    title: "G'aznachilik tuzilmasi",
    link: "",
  },
  {
    id: "4",
    title: "Raxbariyat",
    link: "/adminstration",
  },
  {
    id: "5",
    title: "Markaziy apparat",
    link: "",
  },
  {
    id: "6",
    title: "Xududiy bo'linmalar",
    link: "",
  },
  {
    id: "7",
    title: "Gender tenglik",
    link: "",
  },
];
const toggleSphere = async (id, link) => {
  isActive.value = id;
  cardItems.forEach((cardItem) => {
    if (cardItem.id == id && cardItem.link == link) {
      router.push(link);
    }
  });
};
</script>
<style scoped>
@import "@/assets/about.scss";
</style>
