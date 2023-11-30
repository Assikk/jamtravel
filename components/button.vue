<template>
  <button class="flex justify-center items-center gap-3 py-5 px-[35px] rounded-[70px] bg-[#EBE600] w-fit text-[#494747] font-bold"
  :class="[
  {full: 'w-full'}
  ]">
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
  name: 'ButtonComponent',
  props: {
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>
