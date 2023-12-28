<template>
  <span class="status-bade" :class="`${color} ${type}`">
    <template v-if="slots.length">
      <slot/>
    </template>
    <template v-else>
      {{status[`${color}`] ? status[`${color}`] : color}}
    </template>
  </span>
</template>

<script setup>
import {ref, useSlots, watch} from "vue";

const slot = useSlots();
const slots = ref(slot.default? slot.default() : []);
const status = ref({
  success: 'Muvofaqiatli',
  info: 'Ijobiy',
  error: 'Hatolik',
  rejected: 'Rad etilgan',
  approved: 'Qabul qilingan',
  appointed: `Tayinlangan`,
  warning: `Jarayonda`,
  new: 'Yangi'
});
defineProps({
  color: {
    type: String,
    default: 'success'
  },
  type: {
    type:String,
    default: 'dot'
  }
});
watch(slots,()=>{
  console.log(slots);
})

</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.status-bade{
  padding: .5rem 1rem;
  display: inline-flex;
  position: relative;
  &:not(.button){
    &::before{
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: $muted;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    &.success{
      color: $success;
      &::before{
        background-color: $success;
      }
    }
    &.warning{
      color: $warning;
      &::before{
        background-color: $warning;
      }
    }
    &.info{
      color: $info;
      &::before{
        background-color: $info;
      }
    }
    &.rejected, &.error{
      color: $danger;
      &::before{
        background-color: $danger;
      }
    }
    &.new{
      color: $purple;
      &::before{
        background-color: $purple;
      }
    }
  }
  &.button{
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: rgba($muted,.2);
    color: $body;
    border-radius: 50px;
    &.success,&.rejected,&.error,&.warning,&.info,&.purple{
      color: #FFFFFF;
    }
    &.success{
      background-color: $success;
    }
    &.warning{
      background-color: $warning;
    }
    &.info{
      background-color: $info;
    }
    &.rejected, &.error{
      background-color: $danger;
    }
    &.purple{
      background-color: $purple;
    }
  }
}
</style>