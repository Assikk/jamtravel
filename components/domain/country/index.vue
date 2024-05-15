<template>
<div class="min-h-screen" :style="{
      background: `url(${require('@/assets/img/countryMobileBG.png')}) no-repeat, #000`,
      backgroundSize: '100% auto',
    }">
    <div class="pt-6 pb-[100px] sm:pb-8 sm:pt-[200px] px-6 sm:px-[203.5px]">
      <h2 class="block md:hidden uppercase text-[#EBE600] text-4xl text-center mb-6">
        {{country.name}}
      </h2>
      <div ref="splide" class="w-full splide">
        <div class="splide__track w-full md:w-[80%] mx-auto">
          <ul class="splide__list">
            <li v-for="(item, index) in country.images" :key="index" class="splide__slide">
              <img :src="item.url" alt="" class="w-full h-[400px] rounded-lg">
            </li>
          </ul>
        </div>
        <div class="splide__arrows">
          <svg class="splide__arrow splide__arrow--prev" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z" fill="#EBE600"/>
          </svg>
          <svg class="splide__arrow splide__arrow--next" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" fill="#EBE600"/>
          </svg>
        </div>
      </div>
      <div class="flex flex-col gap-6 mt-12">
        <Card v-for="hotel in hotels" :key="hotel.id" :card="hotel"/>
      </div>
    </div>
</div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import Card from './components/card.vue'
import Splide from '@splidejs/splide';
export default {
  name: 'CountryPage',
  head: {
    title: 'Отели'
  },
  components: {
    Card,
  },
  computed: {
    ...mapState({
      hotels: state => state.hotels.hotels,
      country: state => state.countries.country
    })
  },
  data() {
    return {
      images: [
        require('@/assets/img/countries/bali.png'),
        require('@/assets/img/countries/dubai.png'),
      ],
    }
  },
  methods: {
    ...mapActions({
      get_gotels: 'hotels/get_hotelsByCountry',
      get_country: 'countries/get_country'
    }),
    initSplide() {
      new Splide(this.$refs.splide, {
        pagination: false,
        transition: 'none',
        speed: 800,
      }).mount();
    },
  },
  async mounted() {
    await this.get_gotels(this.$route.params.slug)
    await this.get_country(this.$route.params.slug)
    this.initSplide();
  }
}
</script>
<style scoped>
@import url('https://unpkg.com/@splidejs/splide@3.0.9/dist/css/splide.min.css');
@import url('https://unpkg.com/@splidejs/splide@3.0.9/dist/css/themes/splide-default.min.css');
.splide__arrow {
  width: 80px; /* Задайте ширину вашей стрелки */
  height: 80px; /* Задайте высоту вашей стрелки */
  background-color: transparent; /* Сделайте фон прозрачным */
  border: none; /* Уберите границу */
  cursor: pointer;
}
@media (max-width: 640px) {
  .splide__arrow {
    display: none; /* Скройте стрелки */
  }
}
</style>
