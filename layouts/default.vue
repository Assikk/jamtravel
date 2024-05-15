<template>
  <div class="relative">
    <Icons/>
    <HeaderMobile/>
    <HeaderDesktop/>
    <Nuxt/>
    <!-- <Footer/> -->
    <div class="hidden lg:flex flex-col gap-5 fixed bottom-4 2xl:bottom-[83px] left-4 2xl:left-[94px]">
      <div v-for="item in social" :key="item.id">
        <svg width="28" height="28" fill="#EBE600" class="cursor-pointer">
          <use :xlink:href="`#${item.svg}`"/>
        </svg>
      </div>
    </div>
    <svg class="hidden lg:block fixed bottom-4 2xl:bottom-[83px] right-4 2xl:right-[94px] cursor-pointer" width="60" height="60" fill="#EBE600"
    @click="scrollToTop">
      <use xlink:href="#arrow_up"/>
    </svg>
    <transition name="fade">
      <Search v-if="isShowSearchModal"/>
    </transition>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import Icons from '~/components/ui/icons.vue'
import HeaderMobile from '@/components/ui/header/mobile.vue'
import HeaderDesktop from '~/components/ui/header/desktop.vue'
import Footer from '~/components/ui/footer.vue'
import Search from '~/components/ui/modals/search/index.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderDesktop,
    HeaderMobile,
    Footer,
    Icons,
    Search
  },
  computed: {
    ...mapState({
      isShowSearchModal: state => state.search.isShowModal
    })
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
      ],
    }
  },
  methods: {
    ...mapActions({
      get_countries: 'countries/get_countries'
    }),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // добавляет плавное прокручивание (не обязательно)
      });
    },
  },
  async mounted() {
    await this.get_countries()
  }
}
</script>
