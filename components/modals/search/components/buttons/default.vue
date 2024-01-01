<template>
  <button class="flex justify-center items-center gap-3 p-5 rounded-[100px] border border-[#EBE600] background w-full text-white font-bold text-lg">
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
