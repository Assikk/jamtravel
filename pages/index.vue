<template>
  <div>
    <div class="shadow h-screen">
      main page
    </div>
    <div v-for="country in countries" :key="country.id" class="h-screen flex items-center justify-center"
    :style="{
      background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.40) 5.7%, rgba(0, 0, 0, 0.00) 77.25%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 22.61%, #000 100%), url(' + require('@/assets/img/countries/' + country.backgroundImage) + ') center/cover'
    }">
      <div class="w-[730px] flex flex-col gap-10 text-white"
      :class="country.id % 2 === 0 ? 'items-end' : 'items-start'">
        <p class="font-extrabold uppercase max-w-[245px]">
          {{country.subTitle}}
        </p>
        <h1 class="font-bold text-[100px]">
          {{country.name}}
        </h1>
        <p class="text-lg"
        :class="country.id % 2 === 0 ? 'text-end' : 'text-left'">
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
</template>
<script>
import {mapState} from 'vuex'
import Button from '@/components/button.vue'
export default {
  name: 'IndexPage',
  components: {
    Button
  },
  computed: {
    ...mapState({
      countries: state => state.countries
    })
  },
}
</script>
<style scoped>
.shadow {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.40) 5.7%, rgba(0, 0, 0, 0.00) 77.25%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 22.61%, #000 100%), url('@/assets/img/mainPageBG.png') center/cover;
}
</style>
