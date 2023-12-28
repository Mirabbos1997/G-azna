<script setup>
const props = defineProps({
  full: Boolean
});
</script>
<template>
  <div :class="props.full ? 'container-fluid':'container'">
    <slot/>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/responsive.scss";


.container, .container-full {
  max-width: 100%;
  margin: 0 auto;
}

@include screen("xs") {
  .container {
    max-width: 100%;
    padding: 0 10px;
  }
}

@include screen("sm") {
  .container {
    max-width: 100%;
    padding: 0 10px;
  }
}

@include screen("md") {
  .container {
    max-width: 100%;
    padding: 0 10px;
  }
}

@include screen("lg") {
  .container {
    max-width: 100%;
    padding: 30px;
  }
}

@include screen("xl") {
  .container {
    max-width: 1200px;
    padding: 0;
  }
}

@include screen("xxl") {
  .container {
    max-width: 1640px;
    padding: 0;
  }
}
</style>