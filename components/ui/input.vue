<template>
  <div :class="label ? 'flex flex-col' : ''">
    <label :for="id" class="font-medium text-sm text-[#1F2937] mb-2">
        {{ label }}
    </label>
    <div class="flex gap-4 justify-center items-center background w-full rounded-[100px] border border-[#EBE600] px-3.5 py-2.5">
      <template>
        <slot name="prev-icon"/>
      </template>
      <input :id="id" :type="type"
      :disabled="disabled"
      class="bg-transparent focus:outline-none text-white font-semibold"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder">
    </div>

  </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
      id: {},
      label: {
        type: String
      },
      value: '',
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
    }
}
</script>
<style scoped>
.background {
  background: rgba(40, 40, 34, 0.41);
  backdrop-filter: blur(15px);
}
</style>
