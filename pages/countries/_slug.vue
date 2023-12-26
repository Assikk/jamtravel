<template>
  <div>
    <div class="relative h-screen"
    :style="{
      background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.40) 5.7%, rgba(0, 0, 0, 0.00) 77.25%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 22.61%, #000 100%), url(' + require('@/assets/img/slider/mainPage/' + activeImage.url) + ') center/cover'
    }">
      <div class="hidden lg:flex flex-col items-center gap-2.5 absolute top-1/2 right-4 2xl:right-[74px]">
        <div class="rounded-full cursor-pointer" v-for="image in images" :key="image.id"
          :class="activeImage.id == image.id ? 'w-5 h-5 bg-[#EBE600]' : 'w-2.5 h-2.5 border border-[#EBE600]'"
          @click="set_activeImage(image)"/>
      </div>
      <div class="pt-52 max-w-[1500px] mx-auto">
        <div class="h-[400px] border border-gray text-white">
          123
        </div>
        <div class="pt-10 flex gap-[50px] text-white">
          <img src="@/assets/img/slider/mainPage/2.png" alt="" class="w-[417px] h-[312px] rounded-[20px]">
          <div class="flex flex-col gap-6">
            <p class="uppercase text-[39px] font-bold">
              Amilla Maldives Resort & Residences 5* Deluxe
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CountryPage',
  computed: {
    ...mapState({
      images: state => state.slider.images,
      activeImage: state => state.slider.activeImage
    }),
  },
  methods: {
    ...mapMutations({
      set_activeImage: 'slider/SET_ACTIVEIMAGE'
    })
  },
  created() {
    this.set_activeImage(this.images[0])
  }
}
</script>
