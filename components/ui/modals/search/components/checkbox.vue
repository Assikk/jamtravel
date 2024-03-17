<template>
  <div class="checkbox"
  :class="value ? 'bg-[#EBE600]' : 'bg-white'"/>
</template>
<script>
export default {
  name: 'CheckboxComponent',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.checkbox {
  /* background: white; */
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10) inset;
  width: 21px;
  height: 21px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
