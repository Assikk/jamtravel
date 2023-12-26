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
    </div>
    <div v-for="country in countries" :key="country.id" class="h-screen"
    :style="{
      background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.40) 5.7%, rgba(0, 0, 0, 0.00) 77.25%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 22.61%, #000 100%), url(' + require('@/assets/img/countries/' + country.backgroundImage) + ') center/cover'
    }">
      <div class="max-w-[1500px] mx-auto flex h-full items-center" :class="country.id % 2 === 0 ? 'justify-end' : 'justify-start'">
        <div class="w-[890px] flex flex-col gap-10 text-white text-center md:text-left px-4"
        :class="country.id % 2 === 0 ? 'items-center md:items-end' : 'items-center md:items-start'">
          <p class="font-extrabold uppercase max-w-[245px]">
            {{country.subTitle}}
          </p>
          <h1 class="font-bold text-[46px] md:text-[100px]">
            {{country.name}}
          </h1>
          <p class="text-lg"
          :class="country.id % 2 === 0 ? 'md:text-end' : 'md:text-left'">
            {{country.description}}
          </p>
          <Button>
            <template #prev-icon>
              <svg width="32" height="17">
                <use xlink:href="#list"></use>
              </svg>
            </template>
            Все отели
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import Button from '@/components/button.vue'
export default {
  name: 'IndexPage',
  components: {
    Button
  },
  computed: {
    ...mapState({
      countries: state => state.countries.countries,
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
<style scoped>
.shadow {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.40) 5.7%, rgba(0, 0, 0, 0.00) 77.25%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 22.61%, #000 100%), url('@/assets/img/mainPageBG.png') center/cover;
}
</style>
