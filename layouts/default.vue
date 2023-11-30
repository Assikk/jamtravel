<template>
  <div class="relative">
    <Icons/>
    <Header/>
    <Nuxt/>
    <Footer/>
    <svg class="fixed bottom-4 2xl:bottom-[83px] right-4 2xl:right-[74px] cursor-pointer" width="60" height="60" fill="#EBE600"
    @click="scrollToTop">
      <use xlink:href="#arrow_up"/>
    </svg>
  </div>
</template>
<script>
import Icons from '@/components/icons.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    Icons
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
