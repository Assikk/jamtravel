<template>
  <header class="block lg:hidden"
  :class="isShowMenu ? 'h-full' : ''">
  <transition name="burger">
    <div v-if="isShowMenu" class="absolute top-0 left-0 w-full text-white h-full pt-6 pb-10 px-[35px] flex flex-col gap-8">
      <div class="flex justify-between items-center gap-4">
        <svg width="120" height="30" fill="#EBE600">
          <use xlink:href="#logo_yellow"/>
        </svg>
        <svg width="22" height="22" fill="#EBE600" @click="isShowMenu = false">
          <use xlink:href="#close"/>
        </svg>
      </div>
      <div class="h-full flex justify-between gap-4">
        <div class="flex flex-col justify-between gap-4">
          <div class="flex flex-col gap-1.5">
            <p v-for="lang in langs" :key="lang.id" class="text-xs font-bold cursor-pointer"
            :class="activeLang == lang.id ? 'text-[#EBE600]' : 'text-white'"
            @click="activeLang = lang.id">
              {{lang.name}}
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <div v-for="item in social" :key="item.id">
              <svg width="28" height="28" fill="#EBE600" class="cursor-pointer">
                <use :xlink:href="`#${item.svg}`"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between gap-4">
          <div class="flex flex-col gap-[30px]">
            <p v-for="country in countries" :key="country.id"
            class="uppercase cursor-pointer transition text-right ease-linear"
            :class="$route.params.slug == country.slug ? 'text-[#EBE600]' : 'hover:text-[#EBE600]'"
            @click="changePage(country)">
              {{country.name}}
            </p>
          </div>
          <img src="@/assets/img/digital.png" alt="">
        </div>
      </div>
    </div>
  </transition>
    <div v-if="!isShowMenu" class="px-8 py-4 flex gap-4 justify-between items-center">
      <svg width="24" height="24" fill="white" class="cursor-pointer">
        <use xlink:href="#search"/>
      </svg>
      <NuxtLink to="/">
        <svg width="120" height="30" fill="#EBE600">
          <use xlink:href="#logo_yellow"/>
        </svg>
      </NuxtLink>
      <svg width="30" height="30" fill="white" @click="isShowMenu = true">
        <use xlink:href="#burger"/>
      </svg>
    </div>
  </header>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'HeaderMobileComponent',
  computed: {
    ...mapState({
      countries: state => state.countries.countries
    })
  },
  data() {
    return {
      isShowMenu: false,
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
      social: [
        {
          id: 1,
          svg: 'instagram'
        },
        {
          id: 2,
          svg: 'twitter'
        },
        {
          id: 3,
          svg: 'facebook'
        },
        {
          id: 4,
          svg: 'telegram'
        }
      ]
    }
  },
  methods: {
    changePage(country) {
      this.isShowMenu = false
      this.$router.push(`/country/${country.slug}`)
    }
  }
}
</script>
<style scoped>
header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
  backdrop-filter: blur(5px);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
</style>
