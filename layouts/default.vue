<template>
  <div class="relative">
    <Icons/>
    <HeaderMobile/>
    <HeaderDesktop/>
    <Nuxt/>
    <Footer/>
    <div class="hidden lg:flex flex-col gap-5 fixed bottom-4 2xl:bottom-[83px] left-4 2xl:left-[74px]">
      <div v-for="item in social" :key="item.id">
        <svg width="28" height="28" fill="#EBE600" class="cursor-pointer">
          <use :xlink:href="`#${item.svg}`"/>
        </svg>
      </div>
    </div>
    <svg class="hidden lg:block fixed bottom-4 2xl:bottom-[83px] right-4 2xl:right-[74px] cursor-pointer" width="60" height="60" fill="#EBE600"
    @click="scrollToTop">
      <use xlink:href="#arrow_up"/>
    </svg>
  </div>
</template>
<script>
import Icons from '@/components/icons.vue'
import HeaderMobile from '@/components/header/mobile.vue'
import HeaderDesktop from '~/components/header/desktop.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderDesktop,
    HeaderMobile,
    Footer,
    Icons
  },
  data() {
    return {
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
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // добавляет плавное прокручивание (не обязательно)
      });
    }
  }
}
</script>
