<script setup>
import {useRoute} from "vue-router";
import Container from "../../components/Container.vue";
import LegalDirectionsDetails from "./LegalDirectionsDetails.vue";
import PhysicalDirectionsDetails from "./PhysicalDirectionsDetails.vue";

const route = useRoute();
</script>

<template>
  <main>
    <container>
      <template v-if="route.params.type === 'legal'">
        <legal-directions-details/>
      </template>
      <template v-if="route.params.type === 'physical'">
        <physical-directions-details/>
      </template>
    </container>
  </main>
</template>
