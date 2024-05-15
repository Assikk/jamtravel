<template>
  <button class="flex justify-center items-center gap-3 py-5 px-10 rounded-[100px] border border-[#EBE600] background text-white font-bold text-lg"
  @click="$emit('click')">
    <template>
    <slot name="prev-icon"/>
  </template>
  <slot/>
  <template>
    <slot name="next-icon"/>
  </template>
  </button>
</template>
<script>
export default {
  name: 'ButtonSearchComponent',
}
</script>
<style scoped>
.background {
  background: rgba(40, 40, 34, 0.41);
  backdrop-filter: blur(15px);
}
</style>
