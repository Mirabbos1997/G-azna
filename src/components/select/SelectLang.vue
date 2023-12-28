<template>
  <!-- <a-select
    v-model:value="value"
    label-in-value
    style="background-color: transparent"
    class="transparent-background"
    :options="options"
    @change="handleChange"
  ></a-select> -->
  <select class="custom-select">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      style="color: black"
    >
      {{ option.label }}
    </option>
  </select>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: "uz",
        label: "O`zbek tili",
      },
      {
        value: "ru",
        label: "Русский",
      },
    ]);
    const handleChange = (value) => {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    };

    return {
      value: ref({
        value: "uz",
      }),
      options,
      handleChange,
    };
  },
});
</script>

<style scoped>
@import "@/assets/navbar.scss";
</style>
