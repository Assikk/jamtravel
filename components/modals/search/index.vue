<template>
  <div class="fixed top-0 shadow left-0 w-full h-full z-10 flex items-center justify-center">
    <div class="w-full h-full text-center rounded-lg p-4 flex justify-center items-center gap-4">
      <div class="flex flex-col gap-[80px]">
        <h2 class="text-[60px] text-[#EBE600] uppercase">Поиск</h2>
        <div class="flex gap-[52px]">
          <SearchButton>
            Выберите страну
          </SearchButton>
          <SearchButton>
            Выберите дату
          </SearchButton>
          <SearchButton>
            Ваш бюджет
          </SearchButton>
        </div>
        <p class="uppercase text-white text-2xl font-medium">
          С ЛЕГКОСТЬЮ Подберите отель, соответствующий вашему вкусу и бюджету!
        </p>
        <Button class="w-[400px] mx-auto">
          <template #prev-icon>
            <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2087_32409)">
            <path d="M27.5 22.5L25.5 20.5M17 21.5C18.2476 21.5 19.4829 21.2543 20.6355 20.7769C21.7881 20.2994 22.8354 19.5997 23.7175 18.7175C24.5997 17.8354 25.2994 16.7881 25.7769 15.6355C26.2543 14.4829 26.5 13.2476 26.5 12C26.5 10.7524 26.2543 9.5171 25.7769 8.36451C25.2994 7.21191 24.5997 6.16464 23.7175 5.28249C22.8354 4.40033 21.7881 3.70056 20.6355 3.22314C19.4829 2.74572 18.2476 2.5 17 2.5C14.4804 2.5 12.0641 3.50089 10.2825 5.28249C8.50089 7.06408 7.5 9.48044 7.5 12C7.5 14.5196 8.50089 16.9359 10.2825 18.7175C12.0641 20.4991 14.4804 21.5 17 21.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.98953 8.15794C6.48849 8.15794 6.82112 8.49058 6.82112 8.98953C6.82112 9.48849 7.15376 9.82112 7.65271 9.82112H10.1475C10.6464 9.82112 10.9791 9.48849 10.9791 8.98953C10.9791 6.24529 8.73378 4 5.98953 4C3.24529 4 1 6.24529 1 8.98953V17.3054C1 19.1349 2.49686 20.6318 4.32636 20.6318H7.65271C9.48221 20.6318 10.9791 19.1349 10.9791 17.3054V14.977C10.9791 13.4801 10.0643 12.2327 8.73378 11.6506L6.32217 10.6527C6.23901 10.6527 6.07269 10.6527 5.98953 10.6527C5.49058 10.6527 5.15795 10.3201 5.15795 9.82112V8.98953C5.15795 8.49058 5.49058 8.15794 5.98953 8.15794ZM5.82322 12.3159L8.15167 13.2306C8.9001 13.5633 9.39905 14.2285 9.39905 14.977V17.3054C9.39905 18.2202 8.65062 18.9686 7.73587 18.9686H4.40952C3.49477 18.9686 2.74634 18.2202 2.74634 17.3054V8.98953C2.74634 7.16004 4.2432 5.66318 6.07269 5.66318C7.65271 5.66318 8.9001 6.74424 9.31589 8.15794H8.4843C8.15167 7.16004 7.23692 6.49477 6.15585 6.49477C4.74215 6.49477 3.66108 7.57583 3.66108 8.98953V9.82112C3.49477 11.1517 4.49267 12.2327 5.82322 12.3159Z" fill="#494747"/>
            </g>
            <defs>
            <clipPath id="clip0_2087_32409">
            <rect width="28" height="24" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
            </svg>
          </template>
        </Button>
      </div>
    </div>
    <svg class="absolute top-8 right-8 cursor-pointer" width="48" height="48" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"
    @click="show_editModal(false)">
    <rect x="0.914062" y="0.914062" width="67.163" height="67.1638" rx="33.5815" stroke="#EBE600"/>
    <path d="M20.707 20.707C21.0975 20.3164 21.7307 20.3164 22.1212 20.707L48.2841 46.8699C48.6747 47.2604 48.6747 47.8936 48.2841 48.2841C47.8936 48.6746 47.2604 48.6746 46.8699 48.2841L20.707 22.1212C20.3165 21.7306 20.3165 21.0975 20.707 20.707Z" fill="#EBE600"/>
    <path d="M48.2841 20.7078C48.6746 21.0983 48.6746 21.7315 48.2841 22.122L22.1212 48.2849C21.7306 48.6755 21.0975 48.6755 20.707 48.2849C20.3164 47.8944 20.3164 47.2613 20.707 46.8707L46.8699 20.7078C47.2604 20.3173 47.8936 20.3173 48.2841 20.7078Z" fill="#EBE600"/>
    </svg>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import SearchButton from './components/buttons/default.vue'
import Button from '@/components/button.vue'
export default {
  name: 'SearchModal',
  components: {
    Button,
    SearchButton
  },
  methods: {
    ...mapMutations({
      show_editModal: 'search/SHOW_SEARCHMODAL'
    })
  }
}
</script>
<style scoped>
.shadow {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
}
</style>
