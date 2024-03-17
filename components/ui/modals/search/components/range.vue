<template>
<div class="container">
  <div class="flex justify-center items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
      <path d="M8 10H13" stroke="#EBE600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.5416 11.25H23.2885C21.0581 11.25 19.25 12.9289 19.25 15C19.25 17.0711 21.0581 18.75 23.2885 18.75H26.5416C26.6459 18.75 26.6979 18.75 26.7419 18.7474C27.416 18.7063 27.9529 18.2078 27.9971 17.5818C28 17.5409 28 17.4925 28 17.3959V12.6041C28 12.5075 28 12.4591 27.9971 12.4182C27.9529 11.7923 27.416 11.2937 26.7419 11.2527C26.6979 11.25 26.6459 11.25 26.5416 11.25Z" stroke="#EBE600" stroke-width="2"/>
      <path d="M26.7063 11.25C26.6091 8.90962 26.2957 7.47469 25.2855 6.46446C23.8211 5 21.464 5 16.75 5H13C8.28595 5 5.92894 5 4.46446 6.46446C3 7.92894 3 10.286 3 15C3 19.714 3 22.0711 4.46446 23.5355C5.92894 25 8.28595 25 13 25H16.75C21.464 25 23.8211 25 25.2855 23.5355C26.2957 22.5254 26.6091 21.0904 26.7063 18.75" stroke="#EBE600" stroke-width="2"/>
      <path d="M22.989 15H23.0003" stroke="#EBE600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p class="text-white text-lg font-bold">
      Ваш бюджет
    </p>
  </div>
  <div class="wrapper">
    <div class="flex justify-between mb-5">
      <p class="text-white text-lg font-bold">
        {{minVal}}
      </p>
      <p class="text-white text-lg font-bold">
        {{maxVal}}
      </p>
    </div>
    <div class="slider">
      <div class="progress"
      :style="{left: left, right: right}"></div>
    </div>
    <div class="range-input">
      <input v-model="minVal" type="range" class="range-min" min="0" max="20000" step="100" @input="changeLeftRange">
      <input v-model="maxVal" type="range" class="range-max" min="0" max="20000" step="100" @input="changeRightRange">
    </div>
  </div>
  <div class="flex items-center justify-between gap-4">
    <div class="flex flex-col font-bold text-left">
      <p class="text-xs text-[#E1E1E1]">
        от 0
      </p>
      <p class="text-sm text-[#EBE600]">
        до 20000
      </p>
    </div>
    <Button @click="$emit('save', minVal)">
      <template #prev-icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0586 0.5C11.662 0.5 13.1555 1.78863 13.1555 4.03355V15.1899C13.1555 15.6581 12.9145 16.0794 12.5093 16.315C12.1056 16.5514 11.619 16.556 11.2107 16.3258L6.63638 13.7416L2.01989 16.3312C1.82034 16.4432 1.60161 16.5 1.3821 16.5C1.15569 16.5 0.929279 16.4394 0.72359 16.3181C0.319119 16.0825 0.078125 15.6611 0.078125 15.1937V3.8931C0.078125 1.73644 1.57244 0.5 4.17809 0.5H9.0586ZM9.0586 1.65124H4.17809C2.22174 1.65124 1.22937 2.40493 1.22937 3.8931V15.1937C1.22937 15.2659 1.27081 15.305 1.30535 15.325C1.33989 15.3465 1.39438 15.3618 1.45732 15.3265L6.35548 12.5789C6.53047 12.4814 6.7446 12.4806 6.92036 12.5796L11.7763 15.3227C11.84 15.3595 11.8945 15.3426 11.929 15.3219C11.9636 15.3012 12.0043 15.262 12.0043 15.1899L12.004 3.94609C11.9982 3.28553 11.8704 1.65124 9.0586 1.65124ZM9.39538 5.6641C9.71312 5.6641 9.971 5.92198 9.971 6.23972C9.971 6.55747 9.71312 6.81535 9.39538 6.81535H3.77884C3.4611 6.81535 3.20322 6.55747 3.20322 6.23972C3.20322 5.92198 3.4611 5.6641 3.77884 5.6641H9.39538Z" fill="#494747"/>
        </svg>
      </template>
      Сохранить
    </Button>
    <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"
    @click="$emit('clear')">
      <g filter="url(#filter0_b_2559_3211)">
      <rect x="0.498942" y="0.765543" width="44.2355" height="45.4689" rx="22.1178" stroke="white" stroke-width="0.531087"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3413 20.8758C28.6717 20.903 28.9181 21.1918 28.8917 21.5223C28.8869 21.5767 28.4533 26.9455 28.2037 29.1976C28.0485 30.5952 27.1253 31.4456 25.7316 31.4712C24.6652 31.4896 23.6364 31.5 22.6308 31.5C21.5468 31.5 20.49 31.488 19.4443 31.4664C18.1067 31.44 17.1811 30.5728 17.0299 29.2032C16.7779 26.9311 16.3467 21.5759 16.3427 21.5223C16.3155 21.1918 16.5619 20.9022 16.8923 20.8758C17.2179 20.867 17.5123 21.0958 17.5387 21.4254C17.5413 21.4602 17.7175 23.6471 17.9096 25.8109L17.9482 26.2427C18.045 27.3182 18.1431 28.3517 18.2227 29.0712C18.3083 29.8496 18.7283 30.2512 19.4691 30.2664C21.4692 30.3088 23.51 30.3112 25.71 30.2712C26.4972 30.256 26.9229 29.8624 27.0109 29.0656C27.2589 26.8303 27.6909 21.4798 27.6957 21.4254C27.7221 21.0958 28.0141 20.8654 28.3413 20.8758ZM24.3099 15.5C25.0443 15.5 25.6899 15.9952 25.8795 16.7048L26.0827 17.7136C26.1483 18.0443 26.4386 18.2858 26.7746 18.2912L29.4 18.2912C29.7312 18.2912 30 18.56 30 18.8913C30 19.2225 29.7312 19.4913 29.4 19.4913L26.798 19.4911C26.794 19.4912 26.79 19.4913 26.7859 19.4913L26.7664 19.4905L18.4667 19.4912C18.4603 19.4912 18.4538 19.4913 18.4474 19.4913L18.435 19.4905L15.8334 19.4913C15.5022 19.4913 15.2334 19.2225 15.2334 18.8913C15.2334 18.56 15.5022 18.2912 15.8334 18.2912L18.4582 18.2904L18.5391 18.2853C18.8401 18.2463 19.0903 18.0176 19.1514 17.7136L19.3458 16.7408C19.5434 15.9952 20.189 15.5 20.9234 15.5H24.3099ZM24.3099 16.7H20.9234C20.7314 16.7 20.5626 16.8288 20.5138 17.0136L20.3274 17.9496C20.3037 18.0682 20.2692 18.1825 20.2251 18.2915H25.0084C24.9642 18.1825 24.9297 18.0682 24.9059 17.9496L24.7115 16.9768C24.6707 16.8288 24.5019 16.7 24.3099 16.7Z" fill="white"/>
      </g>
      <defs>
      <filter id="filter0_b_2559_3211" x="-26.3209" y="-26.0543" width="97.8753" height="99.1087" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="13.2772"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2559_3211"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2559_3211" result="shape"/>
      </filter>
      </defs>
    </svg>
  </div>
</div>
</template>
<script>
import Button from '@/components/ui/button.vue'
export default {
  name: 'RangeComponent',
  components: {
    Button
  },
  data() {
    return {
      minVal: '0',
      maxVal: '20000',
      priceGap: 1000,
      left: '0%',
      right: '0%'
    }
  },
  methods: {
    changeLeftRange() {
      if((this.maxVal - this.minVal) < this.priceGap) {
        this.minVal =  Number(this.maxVal) - Number(this.priceGap)
      } else this.left = ((this.minVal / 20000) * 100) + '%'

    },
    changeRightRange() {
      if((this.maxVal - this.minVal) < this.priceGap) {
        this.maxVal = Number(this.minVal) + Number(this.priceGap)
      } else {
        this.right = 100 - (this.maxVal / 20000) * 100 + '%'
      }

    }
  }
}
</script>
<style scoped>
.container {
  padding: 30px 40px;
  border-radius: 25px;
  border: 1px solid #EBE600;
  background: rgba(40, 40, 34, 0.41);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.wrapper{
  text-align: left;
  width: 340px;
}
.slider{
  height: 10px;
  position: relative;
  background: #fff;
  border-radius: 5px;
}
.slider .progress{
  height: 100%;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #EBE600;
}
.range-input{
  position: relative;
}
.range-input input{
  position: absolute;
  width: 100%;
  height: 10px;
  top: -10px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb{
  height: 21px;
  width: 21px;
  border-radius: 4px;
  background: #EBE600;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}
input[type="range"]::-moz-range-thumb{
  height: 21px;
  width: 21px;
  border: none;
  border-radius: 4px;
  background: #EBE600;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}
</style>
