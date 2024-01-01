<template>
  <header class="hidden lg:flex z-10">
    <div class="flex flex-col gap-1.5">
      <p v-for="lang in langs" :key="lang.id" class="text-xs font-bold cursor-pointer"
      :class="activeLang == lang.id ? 'text-[#EBE600]' : 'text-white'"
      @click="activeLang = lang.id">
        {{lang.name}}
      </p>
    </div>
    <NuxtLink to="/">
      <svg width="172" height="43" fill="#EBE600">
        <use xlink:href="#logo_yellow"/>
      </svg>
    </NuxtLink>
    <div class="flex gap-[30px] font-['Century_Gothic']">
      <NuxtLink v-for="country in countries" :key="country.id" :to="(`/countries/${country.id}`)"
      class="uppercase cursor-pointer transition ease-linear hover:text-[#EBE600]">
        {{country.name}}
      </NuxtLink>
    </div>
    <img src="@/assets/img/trvl.svg" alt="" width="100px" height="45px" class="w-[100px] h-[45px] cursor-pointer">
    <svg width="24" height="24" fill="#EBE600" class="cursor-pointer"
    @click="show_editModal(true)">
      <use xlink:href="#search"/>
    </svg>
  </header>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'HeaderDesktopComponent',
  computed: {
    ...mapState({
      countries: state => state.countries.countries
    })
  },
  data() {
    return {
      langs: [
        {
          id: 1,
          name: 'РУ'
        },
        {
          id: 2,
          name: 'EN'
        }
      ],
      activeLang: 1,
    }
  },
  methods: {
    ...mapMutations({
      show_editModal: 'search/SHOW_SEARCHMODAL'
    })
  }
}
</script>
<style scoped>
header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
  backdrop-filter: blur(5px);
  padding: 68px 85px;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
}
@media screen and (max-width: 1536px) {
  header {
    padding: 68px 16px;
  }
}
</style>
