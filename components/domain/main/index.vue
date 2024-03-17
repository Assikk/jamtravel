<template>
  <div>
    <div class="relative h-screen">
      <div class="absolute top-0 left-0 w-full h-full"
      :style="{background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.40) 5.7%, rgba(0, 0, 0, 0.00) 77.25%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 22.61%, #000 100%)',}"/>
      <div class="h-screen">
        <video playsinline autoplay muted loop class="object-cover w-full h-full">
          <source class="w-full h-screen" src="/video/jamfhd.mp4" type="video/webm"/>
        </video>
      </div>
      <div class="hidden lg:flex flex-col items-center gap-2.5 fixed top-1/2 right-4 2xl:right-[94px]">
        <div class="rounded-full cursor-pointer" v-for="country in countries" :key="country.id"
        :class="activePageid == country.id ? 'w-5 h-5 bg-[#EBE600]' : 'w-2.5 h-2.5 border border-[#EBE600]'"
        @click="scrollToPage(country)"/>
      </div>
    </div>
    <div :ref="country.id" v-for="(country, index) in countries" :key="index" class="h-screen"
     :style="{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.40) 5.7%, rgba(0, 0, 0, 0.00) 77.25%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 22.61%, #000 100%), url(' + country.images[0].url + ') center/cover'
      }">
      <div class="flex h-full items-center px-4 md:px-[207.5px]" :class="index % 2 === 1 ? 'justify-end' : 'justify-start'">
        <div class="w-[890px] flex flex-col gap-10 text-white text-center md:text-left"
        :class="index % 2 === 1 ? 'items-center md:items-end' : 'items-center md:items-start'">
          <p class="font-extrabold uppercase max-w-[245px]">
            {{country.slogan}}
          </p>
          <h1 class="font-bold text-[46px] md:text-[100px]"
          :class="index % 2 === 1 ? 'yellow_gradient' : 'white_gradient'">
            {{country.name}}
          </h1>
          <p class="text-lg line4"
          :class="index % 2 === 1 ? 'text-right' : ''">
            {{country.description}}
          </p>
          <Button @click="$router.push(`/country/${country.slug}`)">
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
import {mapState} from 'vuex'
import Button from '~/components/ui/button.vue'
export default {
  name: 'IndexPage',
  head: {
    title: 'Главная'
  },
  components: {
    Button
  },
  data() {
    return {
      activePageid: null
    }
  },
  computed: {
    ...mapState({
      countries: state => state.countries.countries,
    }),
  },
  methods: {
    scrollToPage(country) {
      this.activePageid = country.id
      let element = this.$refs[country.id][0].offsetTop
      window.scrollTo({
        top: element,
        behavior: 'smooth', // добавляет плавное прокручивание (не обязательно)
      });
    },
  },
}
</script>
<style scoped>
.shadow {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.40) 5.7%, rgba(0, 0, 0, 0.00) 77.25%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 22.61%, #000 100%), url('@/assets/img/mainPageBG.png') center/cover;
}
.yellow_gradient {
  background: linear-gradient(180deg, #FCFF00 71.31%, #CBBD41 102.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.white_gradient {
  background: linear-gradient(180deg, #FFF 0%, #C4C4C4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
