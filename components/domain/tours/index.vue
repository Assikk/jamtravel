<template>
<div class="min-h-screen" :style="{
      background: `url(${require('@/assets/img/countryMobileBG.png')}) no-repeat, #000`,
      backgroundSize: '100% auto',
    }">
  <div class="pt-6 pb-[100px] sm:pb-8 sm:pt-[130px] px-6">
    <h1 class="text-[#EBE600] text-4xl text-center font-semibold">
      Туры
    </h1>
    <div class="flex flex-col gap-8 mt-12">
      <Card v-for="tour in tours" :key="tour.id" :card="tour"/>
    </div>
  </div>
</div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import Card from '@/components/domain/country/components/card.vue'
import Splide from '@splidejs/splide';
export default {
  name: 'ToursPage',
  head: {
    title: 'Туры'
  },
  components: {
    Card,
  },
  computed: {
    ...mapState({
      tours: state => state.tours.tours
    })
  },
  methods: {
    ...mapActions({
      get_tours: 'tours/get_tours'
    }),
    async getTours() {
      await this.get_tours({
        country: this.$route.query.country,
        date_from: this.$route.query.date_from,
        max_price: this.$route.query.max_price
      })
    }
  },
  async mounted() {
    await this.getTours()
  }
}
</script>
