<script setup>
import {useRoute} from "vue-router";
import Container from "../../components/Container.vue";
import LegalDirections from "./LegalDirections.vue";
import PhysicalDirections from "./PhysicalDirections.vue";
import DirectionsDetails from "./DirectionsDetails.vue";

const route = useRoute();
</script>

<template>
  <main class="directions my-5">
    <container>
      <a-row>
        <a-col :xs="12" :sm="12">
          <h2>Yo’nalishlar</h2>
        </a-col>
        <a-col :xs="12" :sm="12">
          <p class="text-right">
            <router-link to="/" class="text-muted">Bosh sahifa</router-link> »
            Barcha sohalar
           </p>
        </a-col>
      </a-row>
      <template v-if="route.params.id">
        <router-view/>
      </template>
      <template v-else>
        <template v-if="route.params.type === 'legal'">
          <legal-directions/>
        </template>
        <template v-if="route.params.type === 'physical'">
          <physical-directions/>
        </template>
      </template>
    </container>
  </main>
</template>

<style lang="scss">
.directions {
  .badges {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 12px;
    border-top: 1px solid rgba(113, 127, 156, 0.15);
    .badge {
      display: flex;
      align-items: center;
      padding: 8px 20px;
      gap: 6px;
      width: 100%;
      height: 44px;
      background: #F4F6F9;
      border-radius: 100px;

      .text {
        font-family: 'Gilroy', sans-serif;
        font-size: 14px;
        color: #000000;
      }
    }
  }
  .ant-card{
   .title{
     height: 120px;
     overflow: hidden;
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
     white-space: pre-wrap;
   }
  }
}
</style>
